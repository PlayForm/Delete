import type { ExecutionContext } from "@cloudflare/workers-types/experimental";

import Delete from "./Command/Delete.js";
import Response from "./Library/Response.js";

export interface Env {
	ACCOUNT_EMAIL?: string;
	ACCOUNT_ID?: string;
	API_KEY?: string;
}

export default <ExportedHandler<Env>>{
	fetch: async (_request: Request, _env: Env, _ctx: ExecutionContext) => {
		Delete(_env.ACCOUNT_EMAIL, _env.ACCOUNT_ID, _env.API_KEY);

		return Response();
	},
	scheduled: async (_env: Env) => {},
};
