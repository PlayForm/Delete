#!/usr/bin/env node

import { Command } from "commander";
import Delete from "../Function/Delete.js";

try {
	new Command()
		.name("DeploymentDelete")
		.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
		.description("Deletes old deployments in your Cloudflare account.")
		.option("-e, --Email <Email>", "Cloudflare Account E-mail.")
		.option("-i, --ID <ID>", "Cloudflare Account ID.")
		.option("-k, --Key <Key>", "Cloudflare API key.")
		.action(async (Option) =>
			console.log(await Delete(Option?.Email, Option?.ID, Option?.Key))
		)
		.parse();
} catch (_Error) {}
