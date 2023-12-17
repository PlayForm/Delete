var f = async (...[{ Email: a, ID: e, Key: o } = p.parse(process.env)]) => {
	const t = {
		"content-type": "application/json;charset=UTF-8",
		"X-Auth-Email": a,
		"X-Auth-Key": o,
	};
	(t["X-Auth-Email"] = a ?? t["X-Auth-Email"]),
		(t["X-Auth-Key"] = o ?? t["X-Auth-Key"]);
	const r = [];
	for (const { name: s } of (await (
		await import("./Project.js")
	).default(e, t)) ?? [])
		for (const { id: n, created_on: c } of (
			await (async (i) =>
				(
					await (await import("./Deployment.js")).default(e, i, t)
				).splice(0, 500) ?? [])(s)
		).reverse())
			if ((Date.now() - new Date(c)) / 864e5 > 7) {
				try {
					await fetch(
						`${`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects/${s}/deployments`}/${n}`,
						{ method: "DELETE", headers: t },
					);
				} catch {}
				r.push(n);
			}
	return r;
};
const { default: p } = await import("../Variable/Environment.js");
export { p as Environment, f as default };
