import _Deployment from "../Library/Deployment.js";
import Environment from "../Library/Environment.js";
import _Project from "../Library/Project.js";

const Days = 7;
const Limit = 40;

export const Header = {
	"content-type": "application/json;charset=UTF-8",
	"X-Auth-Email": Environment.Email,
	"X-Auth-Key": Environment.Key,
};

export default async (
	Email?: string,
	ID: string = Environment.ID,
	Key?: string
) => {
	Header["X-Auth-Email"] = Email ?? Header["X-Auth-Email"];
	Header["X-Auth-Key"] = Key ?? Header["X-Auth-Key"];

	return (await _Project(ID, Header)).forEach((Project) => {
		_Deployment(ID, Project.name, Header).then((Deployment) =>
			Deployment.splice(0, Limit).forEach((Deployment) =>
				fetch(
					`${`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${Project.name}/deployments`}/${
						Deployment.id
					}`,
					{
						method: "DELETE",
						headers: Header,
					}
				).then((Response) => {
					console.log(Response);
				})
			)
		);
	});
};
