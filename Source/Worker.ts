import type { ExecutionContext } from "@cloudflare/workers-types/experimental";

import Delete from "./Delete.js";
import Response from "./Library/Response.js";

export interface Env {
	Email?: string;

	ID?: string;

	Key?: string;
}

export default <ExportedHandler<Env>>{
	fetch: async (_Request: Request, Env: Env, _Context: ExecutionContext) =>
		await Response(await Delete(Env.Email, Env.ID, Env.Key)),
	scheduled: async (_Controller, Env, _Context) =>
		console.log(await Delete(Env.Email, Env.ID, Env.Key)),
};
