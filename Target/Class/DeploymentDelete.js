#!/usr/bin/env node
try {
	new (await import("commander")).Command()
		.name("DeploymentDelete")
		.version("0.1.13")
		.description("Deletes old deployments in your Cloudflare account.")
		.option("-e, --Email <Email>", "Cloudflare Account E-mail.")
		.option("-i, --ID <ID>", "Cloudflare Account ID.")
		.option("-k, --Key <Key>", "Cloudflare API key.")
		.action(async ({ Email: e, ID: o, Key: a }) =>
			console.log(
				await (await import("../Function/Delete.js")).default({
					Email: e,
					ID: o,
					Key: a,
				}),
			),
		)
		.parse();
} catch {}
