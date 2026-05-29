/**
 * @module Deployment
 *
 * Lists all deployment IDs for a Cloudflare Pages project, handling pagination.
 */
export default async (
	AccountID: string,
	Project: string,
	Headers: HeadersInit,
): Promise<string[]> => {
	const IDs: string[] = [];

	let Page = 1;

	while (true) {
		const Response = await fetch(
			`https://api.cloudflare.com/client/v4/accounts/${AccountID}/pages/projects/${Project}/deployments?per_page=25&page=${Page}`,
			{ headers: Headers },
		);

		const Data = (await Response.json()) as {
			success: boolean;
			result: Array<{ id: string }>;
			result_info: { total_count: number; per_page: number };
			errors: Array<{ message: string }>;
		};

		if (!Data.success) {
			throw new Error(
				Data.errors[0]?.message ?? "Failed to list deployments",
			);
		}

		for (const Deployment of Data.result) {
			IDs.push(Deployment.id);
		}

		const TotalCount = Data.result_info?.total_count ?? 0;

		const PerPage = Data.result_info?.per_page ?? 25;

		if (Page * PerPage >= TotalCount || Data.result.length < PerPage) {
			break;
		}

		Page++;
	}

	return IDs;
};
