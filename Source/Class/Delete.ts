#!/usr/bin/env node

/**
 * @module Delete
 *
 */
(await import("dotenv")).config();

export default new (await import("commander")).Command()
	.name("Delete")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("Delete ♻️")
	.option(
		"-e, --Email <Email>",
		"Account email (for Global API Key auth).",
		process.env["Email"],
	)
	.option("-i, --ID <ID>", "Account ID.", process.env["ID"])
	.option(
		"-k, --Key <Key>",
		"Global API key (for Email auth).",
		process.env["Key"],
	)
	.option(
		"-t, --Token <Token>",
		"API token (preferred over Email + Key).",
		process.env["Token"],
	)
	.option(
		"-p, --Project <Project>",
		"Pages project name (omit to process all projects).",
		process.env["Project"],
	)
	.option(
		"-l, --Logger <Logger>",
		"Log level: 1 = normal (default), 0 = silent.",
		process.env["Logger"] ?? "1",
	)
	.option(
		"-b, --Batch <Batch>",
		"Number of deployments deleted in parallel per batch (default: 10).",
		process.env["Batch"] ?? "10",
	)
	.option(
		"-d, --Delay <Delay>",
		"Milliseconds to wait between batches (default: 0).",
		process.env["Delay"] ?? "0",
	)
	.action(
		async ({ Email, ID, Key, Token, Project, Logger, Batch, Delay }) => {
			await (
				await import("@Function/Delete.js")
			).default({
				Email,
				ID,
				Key,
				Token,
				Project,
				Logger: Number(Logger),
				Batch: Number(Batch),
				Delay: Number(Delay),
			});
		},
	)
	.parse(process.argv, { from: "node" });
