export default async (ID: string, Project: string, Header: HeadersInit) =>
	(
		(await (
			await fetch(
				`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${Project}/deployments`,
				{
					headers: Header,
				}
			)
		).json()) satisfies {
			// rome-ignore lint/suspicious/noExplicitAny:
			[key: string]: any;

			result: {
				created_on: Date;
				id: string;
			}[];
		}
	)?.result;
