#!/usr/bin/env node

/**
 * @module Delete
 *
 */
export default new (await import("commander")).Command()
	.name("Delete")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("♻️ Delete.")
	.option("-e, --Email <Email>", "Email.")
	.option("-i, --ID <ID>", "ID.")
	.option("-k, --Key <Key>", "Key.")
	.action(async ({ Email, ID, Key }) =>
		console.log(
			await (await import("@Function/Delete.js")).default({
				Email,
				ID,
				Key,
			}),
		),
	)
	.parse();
