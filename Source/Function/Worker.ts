import type Environment from "../Type/Environment.js";

import type {
	ExecutionContext,
	ExportedHandler,
} from "@cloudflare/workers-types/experimental/index.js";

export const { default: Delete } = await import("@Function/Delete.js");

export default <ExportedHandler<Environment>>{
	fetch: async (
		_Request: Request,
		Environment: Environment,
		_Context: ExecutionContext
	) =>
		await (
			await import("@Function/Response.js")
		).default(await Delete(Environment)),
	scheduled: async (_Controller, Environment, _Context) =>
		console.log(await Delete(Environment)),
};
