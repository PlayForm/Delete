import Deployment from "./Library/Deployment.js";
import { Fn } from "./Library/Environment.js";
import Project from "./Library/Project.js";

const Environment = Fn.parse(process.env);

export const Days = 7;
export const Limit = 500;

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
export default async (
	Email = Environment.Email,
	Key = Environment.Key,
	ID = Environment.ID
) => {
	const Header = {
		"content-type": "application/json;charset=UTF-8",
		"X-Auth-Email": Environment.Email,
		"X-Auth-Key": Environment.Key,
	};

	Header["X-Auth-Email"] = Email ?? Header["X-Auth-Email"];
	Header["X-Auth-Key"] = Key ?? Header["X-Auth-Key"];

	const Deleted = [];

	for (const { name } of (await Project(ID, Header)) ?? []) {
		for (const { id, created_on } of (
			await (async (Project: string) =>
				(await Deployment(ID, Project, Header)).splice(0, Limit) ?? [])(
				name
			)
		).reverse()) {
			if (
				// @ts-ignore
				(Date.now() - new Date(created_on)) / 86400000 >
				Days
			) {
				try {
					await fetch(
						`${`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${name}/deployments`}/${id}`,
						{
							method: "DELETE",
							headers: Header,
						}
					);
				} catch (_Error) {
					console.log(_Error);
				}

				Deleted.push(id);
			}
		}
	}

	return Deleted;
};
