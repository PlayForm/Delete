import type Interface from "../Interface/Delete.js";

/**
 * @module Delete
 *
 * Deletes all Cloudflare Pages deployments for an account or a specific project.
 * Prefers API Token (Bearer) auth over Email + Global API Key.
 * Uses ?force=true to bypass aliased-deployment restrictions.
 * Processes deletions in parallel batches with an optional delay between batches.
 */
export default (async ({
	Email,
	Key,
	ID,
	Token,
	Project,
	Logger,
	Batch,
	Delay,
}) => {
	const Log =
		Logger === 0 ? () => {} : (Message: string) => console.log(Message);

	const LogVerbose =
		Logger >= 2 ? (Message: string) => console.log(Message) : () => {};

	const Headers: HeadersInit = Token?.trim()
		? {
				Authorization: `Bearer ${Token}`,
				"Content-Type": "application/json;charset=UTF-8",
			}
		: {
				"X-Auth-Email": Email,
				"X-Auth-Key": Key,
				"Content-Type": "application/json;charset=UTF-8",
			};

	const { default: GetProjects } = await import("@Function/Project.js");

	const { default: GetDeployments } = await import("@Function/Deployment.js");

	const Projects: string[] = Project?.trim()
		? [Project]
		: await GetProjects(ID, Headers);

	const Results: Array<{
		project: string;
		deployment: string;
		success: boolean;
		error?: string;
	}> = [];

	for (const ProjectName of Projects) {
		const DeploymentIDs = await GetDeployments(ID, ProjectName, Headers);

		const BatchSize = Math.max(1, Batch);

		const Chunks = Array.from(
			{ length: Math.ceil(DeploymentIDs.length / BatchSize) },
			(_, Index) =>
				DeploymentIDs.slice(Index * BatchSize, (Index + 1) * BatchSize),
		);

		Log(
			`→ Project: ${ProjectName} (${DeploymentIDs.length} deployment(s), ${Chunks.length} batch(es) of ${BatchSize})`,
		);

		for (const [ChunkIndex, Chunk] of Chunks.entries()) {
			if (Chunks.length > 1) {
				LogVerbose(`  Batch ${ChunkIndex + 1}/${Chunks.length}`);
			}

			const ChunkResults = await Promise.all(
				Chunk.map(async (DeploymentID) => {
					const Response = await fetch(
						`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${ProjectName}/deployments/${DeploymentID}?force=true`,
						{ method: "DELETE", headers: Headers },
					);

					const Data = (await Response.json()) as {
						success: boolean;
						errors: Array<{ message: string }>;
					};

					const Message = Data.errors[0]?.message;

					LogVerbose(
						`    ${Data.success ? "✓" : "✗"} ${DeploymentID}${Message ? ` - ${Message}` : ""}`,
					);

					return {
						project: ProjectName,
						deployment: DeploymentID,
						success: Data.success,
						...(Message !== undefined && { error: Message }),
					};
				}),
			);

			Results.push(...ChunkResults);

			if (Delay > 0 && ChunkIndex < Chunks.length - 1) {
				await new Promise((Resolve) => setTimeout(Resolve, Delay));
			}
		}

		Log(
			`  ✓ ${Results.filter((R) => R.project === ProjectName && R.success).length}/${DeploymentIDs.length} deleted`,
		);
	}

	return Results;
}) satisfies Interface;
