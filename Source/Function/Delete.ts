// This is used only once because:
// 'await' expressions cannot be used in a parameter initializer.ts(2524)
export const { default: Environment } = await import(
	"../Variable/Environment.js"
);

/**
 * The Delete function deletes all deployments associated with a specific project ID using the
 * Cloudflare API.
 * @param Email - The `Email` parameter is the email address associated with the Cloudflare account. It
 * is used to authenticate the API request.
 * @param Key - The `Key` parameter is the authentication key used to access the Cloudflare API. It is
 * used to authenticate the request and verify the identity of the user making the request.
 * @param ID - The ID parameter represents the ID of the Cloudflare account. It is used to identify the
 * account for which the deployments need to be deleted.
 * @returns The function `Delete` returns an array of IDs that have been deleted.
 */

// @TODO: Find a way to use await in parameters
export default async ({ Email, Key, ID } = Environment.parse(process.env)) => {
	const Header = {
		"content-type": "application/json;charset=UTF-8",
		"X-Auth-Email": Email,
		"X-Auth-Key": Key,
	};

	Header["X-Auth-Email"] = Email ?? Header["X-Auth-Email"];
	Header["X-Auth-Key"] = Key ?? Header["X-Auth-Key"];

	const Deleted = [];

	for (const { name } of (await (
		await import("./Project.js")
	).default(ID, Header)) ?? []) {
		for (const { id, created_on } of (
			await (async (Project: string) =>
				(
					await (
						await import("./Deployment.js")
					).default(ID, Project, Header)
				).splice(0, 500) ?? [])(name)
		).reverse()) {
			if (
				// @ts-ignore
				(Date.now() - new Date(created_on)) / 86400000 >
				7
			) {
				try {
					await fetch(
						`${`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${name}/deployments`}/${id}`,
						{
							method: "DELETE",
							headers: Header,
						}
					);
				} catch (_Error) {}

				Deleted.push(id);
			}
		}
	}

	return Deleted;
};
