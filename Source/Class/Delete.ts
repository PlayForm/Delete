#!/usr/bin/env node

/**
 * @module Delete
 *
 */
export default new (await import("commander")).Command()
	.name("Delete")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("Delete ♻️")
	.option("-e, --Email <Email>", "Account email (for Global API Key auth).")
	.option("-i, --ID <ID>", "Account ID.")
	.option("-k, --Key <Key>", "Global API key (for Email auth).")
	.option("-t, --Token <Token>", "API token (preferred over Email + Key).")
	.option(
		"-p, --Project <Project>",
		"Pages project name (omit to process all projects).",
	)
	.action(async ({ Email, ID, Key, Token, Project }) =>
		console.log(
			await (
				await import("@Function/Delete.js")
			).default({
				Email,
				ID,
				Key,
				Token,
				Project,
			}),
		),
	)
	.parse();
