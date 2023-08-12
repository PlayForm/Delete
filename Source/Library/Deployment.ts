export default async (Project: string) =>
	(
		(await (
			await fetch(
				`https://api.cloudflare.com/client/v4/accounts/${Environment.ID}/pages/projects/${Project}/deployments`,
				{
					headers: Header,
				}
			)
		).json()) satisfies {
			// rome-ignore lint/suspicious/noExplicitAny:
			[key: string]: any;
			results: [];
		}
	)?.results;
