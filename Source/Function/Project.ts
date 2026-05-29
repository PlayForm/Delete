/**
 * @module Project
 *
 * Lists all Cloudflare Pages project names for an account.
 */
export default async (
	AccountID: string,
	Headers: HeadersInit,
): Promise<string[]> => {
	const Response = await fetch(
		`https://api.cloudflare.com/client/v4/accounts/${AccountID}/pages/projects`,
		{ headers: Headers },
	);

	const Data = (await Response.json()) as {
		success: boolean;
		result: Array<{ name: string }>;
		errors: Array<{ message: string }>;
	};

	if (!Data.success) {
		throw new Error(
			Data.errors[0]?.message ?? "Failed to list Pages projects",
		);
	}

	return Data.result.map(({ name }) => name);
};
