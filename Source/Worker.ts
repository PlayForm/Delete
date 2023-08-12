import type { ExecutionContext } from "@cloudflare/workers-types/experimental";

import Delete from "./Library/Delete.js";
import Response from "./Library/Response.js";

export interface Env {
	Email?: string;
	ID?: string;
	Key?: string;
}

export default <ExportedHandler<Env>>{
	fetch: async (_Request: Request, Env: Env, _Context: ExecutionContext) => {
		await Delete(Env.Email, Env.ID, Env.Key);

		return Response("Ok");
	},
	scheduled: async (_Controller, Env, _Context) =>
		await Delete(Env.Email, Env.ID, Env.Key),
};
