var u = async (o, n, a) => {
	const t = [];
	let s = 1;
	for (;;) {
		const e = await (
			await fetch(
				`https://api.cloudflare.com/client/v4/accounts/${o}/pages/projects/${n}/deployments?per_page=25&page=${s}`,
				{ headers: a },
			)
		).json();
		if (!e.success)
			throw new Error(
				e.errors[0]?.message ?? "Failed to list deployments",
			);
		for (const l of e.result) t.push(l.id);
		const i = e.result_info?.total_count ?? 0,
			r = e.result_info?.per_page ?? 25;
		if (s * r >= i || e.result.length < r) break;
		s++;
	}
	return t;
};
export { u as default };
