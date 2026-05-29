import type Interface from "../Interface/Delete.js";

/**
 * @module Delete
 *
 * Deletes all Cloudflare Pages deployments for an account or a specific project.
 * Prefers API Token (Bearer) auth over Email + Global API Key.
 * Uses ?force=true to bypass aliased-deployment restrictions.
 */
export default (async ({ Email, Key, ID, Token, Project }) => {
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

		for (const DeploymentID of DeploymentIDs) {
			const Response = await fetch(
				`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${ProjectName}/deployments/${DeploymentID}?force=true`,
				{ method: "DELETE", headers: Headers },
			);

			const Data = (await Response.json()) as {
				success: boolean;
				errors: Array<{ message: string }>;
			};

			const Message = Data.errors[0]?.message;

			Results.push({
				project: ProjectName,
				deployment: DeploymentID,
				success: Data.success,
				...(Message !== undefined && { error: Message }),
			});
		}
	}

	return Results;
}) satisfies Interface;
