import _Deployment from "../Library/Deployment.js";
import Environment from "../Library/Environment.js";
import _Project from "../Library/Project.js";

const Days = 7;
const Limit = 40;

const Header = {
	"content-type": "application/json;charset=UTF-8",
	"X-Auth-Email": Environment.Email,
	"X-Auth-Key": Environment.Key,
};

export default async (Email?: string, ID?: string, Key?: string) => {
	Header["X-Auth-Email"] = Email ?? Header["X-Auth-Email"];
	Header["X-Auth-Key"] = Key ?? Header["X-Auth-Key"];

	for (const Project of await _Project(ID ?? Environment.ID, Header)) {
		for (const Deployment of await _Deployment(Project.name).splice(
			0,
			Limit
		)) {
			if (
				// @ts-ignore
				(Date.now() - new Date(Deployment.created_on)) / 86400000 >
				Days
			) {
				await fetch(
					`${`https://api.cloudflare.com/client/v4/accounts/${Environment.ID}/pages/projects/${Project}/deployments`}/${
						Deployment.id
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
