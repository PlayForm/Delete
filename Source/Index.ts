import { Command } from "commander";
import Delete from "./Library/Delete.js";
import _JSON from "./Library/JSON.js";

try {
	new Command()
		.name("DeploymentDelete")
		.version((await _JSON("../package.json", import.meta.url))?.version)
		.description("Deletes old deployments in your Cloudflare account.")
		.option("-e, --Email <Email>", "Cloudflare Account Email.")
		.option("-i, --ID <ID>", "Cloudflare Account ID.")
		.option("-k, --Key <Key>", "Cloudflare API key.")
		.action(
			async (Options) =>
				await Delete(Options?.Email, Options?.ID, Options?.Key)
		)
		.parse();
} catch (_Error) {
	console.log(_Error);
}
