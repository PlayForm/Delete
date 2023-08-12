import Environment from "./Library/Environment.js";

const DAYS = 7;

const LIMIT = 40;
const HEADERS = {
	"content-type": "application/json;charset=UTF-8",
	"X-Auth-Email": Environment.ACCOUNT_EMAIL,
	"X-Auth-Key": Environment.API_KEY,
};

const getProjects = async () => {
	const URL = `https://api.cloudflare.com/client/v4/accounts/${Environment.ACCOUNT_ID}/pages/projects`;

	const projects: {
		// rome-ignore lint/suspicious/noExplicitAny:
		result: any;
	} = await (
		await fetch(URL, {
			headers: HEADERS,
		})
	).json();

	return projects.result;
};

const getDeployments = async (project: string) => {
	// @ts-ignore
	const URL = `https://api.cloudflare.com/client/v4/accounts/${Environment.ACCOUNT_ID}/pages/projects/${project}/deployments`;

	const deployments: {
		result: [];
	} = await (
		await fetch(URL, {
			headers: HEADERS,
		})
	).json();

	return deployments.result;
};

const deleteOldDeployments = async () => {
	const projects = await getProjects();

	for (const project of projects) {
		const URL = `https://api.cloudflare.com/client/v4/accounts/${Environment.ACCOUNT_ID}/pages/projects/${project}/deployments`;

		const deployments: {
			id: string;
		}[] = await getDeployments(project.name);

		for (const deployment of deployments.splice(0, LIMIT)) {
			if (
				// @ts-ignore
				(Date.now() - new Date(deployment.created_on)) / 86400000 >
				DAYS
			) {
				await fetch(`${URL}/${deployment.id}`, {
					method: "DELETE",
					headers: HEADERS,
				});
			}
		}
	}

	return new Response("OK", { status: 200 });
};

// rome-ignore lint/suspicious/noExplicitAny:
addEventListener("fetch", (event: any) => {
	event.respondWith(deleteOldDeployments());
});

// rome-ignore lint/suspicious/noExplicitAny:
addEventListener("scheduled", (event: any) => {
	event.waitUntil(deleteOldDeployments());
});

export default deleteOldDeployments;
