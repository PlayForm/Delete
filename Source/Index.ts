import { Command } from "commander";
import Delete from "./Command/Delete.js";
import _JSON from "./Library/JSON.js";

try {
	new Command()
		.name("dod")
		.version((await _JSON("../package.json", import.meta.url))?.version)
		.description("Delete old deployment")
		.option("-e, --Email <Email>", "Cloudflare account email")
		.option("-k, --Key <Key>", "Cloudflare API")
		.option("-i, --ID <ID>", "Cloudflare account ID")
		.action(Delete)
		.parse();
} catch (_Error) {
	console.log(_Error);
}
