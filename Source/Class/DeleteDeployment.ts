#!/usr/bin/env node

/**
 * @module DeleteDeployment
 *
 */
export default new (await import("commander")).Command()
	.name("DeleteDeployment")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("Deletes old deployments in your Cloudflare account.")
	.option("-e, --Email <Email>", "Cloudflare Account E-mail.")
	.option("-i, --ID <ID>", "Cloudflare Account ID.")
	.option("-k, --Key <Key>", "Cloudflare API key.")
	.action(async ({ Email, ID, Key }) =>
		console.log(
			await (await import("../Function/Delete.js")).default({
				Email,
				ID,
				Key,
			}),
		),
	)
	.parse();
