import type { HeadersInit } from "@cloudflare/workers-types/experimental";

export default async (ID: string, Header: HeadersInit) =>
	(
		(await (
			await fetch(
				`https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects`,
				{
					headers: Header,
				}
			)
		).json()) satisfies {
			// rome-ignore lint/suspicious/noExplicitAny:
			[key: string]: any;

			result: {
				id: string;
				name: string;
			}[];
		}
	)?.result;
