import { Command } from "commander";
import Delete from "./Library/Delete.js";
import _JSON from "./Library/JSON.js";

try {
	new Command()
		.name("DeploymentDelete")
		.version((await _JSON("../package.json", import.meta.url))?.version)
		.description("Deletes old deployments in your Cloudflare account.")
		.option("-e, --Email <Email>", "Cloudflare Account Email")
		.option("-k, --Key <Key>", "Cloudflare API key")
		.option("-i, --ID <ID>", "Cloudflare Account ID")
		.action(
			async (Options?: { Email?: string; ID?: string; Key?: string }) =>
				await Delete(Options?.Email, Options?.ID, Options?.Key)
		)
		.parse();
} catch (_Error) {
	console.log(_Error);
}
