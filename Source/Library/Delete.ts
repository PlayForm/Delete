import Deployment from "../Library/Deployment.js";
import Environment from "../Library/Environment.js";
import Project from "../Library/Project.js";

const Days = 7;
const Limit = 40;

export const Header = {
	"content-type": "application/json;charset=UTF-8",
	"X-Auth-Email": Environment.Email,
	"X-Auth-Key": Environment.Key,
};

export default async (
	Email = Environment.Email,
	Key = Environment.Key,
	ID = Environment.ID
) => {
	Header["X-Auth-Email"] = Email ?? Header["X-Auth-Email"];
	Header["X-Auth-Key"] = Key ?? Header["X-Auth-Key"];

	const Deleted = [];

	for (const { name } of await Project(ID, Header)) {
		for (const { id } of (await Deployment(ID, name, Header)).splice(
			0,
			Limit
		)) {
			await fetch(
				`${`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${name}/deployments`}/${id}`,
				{
					method: "DELETE",
					headers: Header,
				}
			);

			Deleted.push(id);
		}
	}

	return Deleted;
};
