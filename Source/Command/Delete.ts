import Environment from "../Library/Environment.js";

const Days = 7;
const Limit = 40;
const headers = {
	"content-type": "application/json;charset=UTF-8",
	"X-Auth-Email": Environment.ACCOUNT_EMAIL,
	"X-Auth-Key": Environment.API_KEY,
};

const Projects = async () =>
	await (
		await fetch(
			`https://api.cloudflare.com/client/v4/accounts/${Environment.ACCOUNT_ID}/pages/projects`,
			{
				headers,
			}
		)
	).json();

const Deployments = async (Project: string) =>
	await (
		await fetch(
			`https://api.cloudflare.com/client/v4/accounts/${Environment.ACCOUNT_ID}/pages/projects/${Project}/deployments`,
			{
				headers,
			}
		)
	).json();

const Delete = async (Email?: string, ID?: string, Key?: string) => {
	for (const Project of await Projects()) {
		for (const deployment of await Deployments(Project.name).splice(
			0,
			Limit
		)) {
			if (
				// @ts-ignore
				(Date.now() - new Date(deployment.created_on)) / 86400000 >
				Days
			) {
				await fetch(
					`${`https://api.cloudflare.com/client/v4/accounts/${Environment.ACCOUNT_ID}/pages/projects/${Project}/deployments`}/${
						deployment.id
					}`,
					{
						method: "DELETE",
						headers,
					}
				);
			}
		}
	}
};

export default Delete;
