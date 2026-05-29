/**
 * @module Deployment
 *
 * Lists all deployment IDs for a Cloudflare Pages project, handling pagination.
 */
declare const _default: (
	AccountID: string,
	Project: string,
	Headers: HeadersInit,
) => Promise<string[]>;
export default _default;
