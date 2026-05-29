var o = async (e, r) => {
	const s = await (
		await fetch(
			`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects`,
			{ headers: r },
		)
	).json();
	if (!s.success)
		throw new Error(
			s.errors[0]?.message ?? "Failed to list Pages projects",
		);
	return s.result.map(({ name: t }) => t);
};
export { o as default };
