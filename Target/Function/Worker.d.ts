import type { ExportedHandler } from "@cloudflare/workers-types/experimental/index.js";

import type Environment from "../Type/Environment.js";

export declare const Delete: ({
	Email,
	Key,
	ID,
	Token,
	Project,
}: {
	Email: string;
	ID: string;
	Key: string;
	Token: string;
	Project: string;
}) => Promise<
	{
		project: string;
		deployment: string;
		success: boolean;
		error?: string;
	}[]
>;
declare const _default: ExportedHandler<Environment>;
export default _default;
