import type { Response } from "@cloudflare/workers-types/experimental/index.js";

/**
 * @module Response
 *
 */
export default interface Interface {
	(Message?: unknown, Status?: number): Promise<Response>;
}
