import type Environment from "../Type/Environment.js";

/**
 * @module Delete
 *
 */
export default interface Interface {
	/**
	 * The Delete function deletes all deployments associated with a specific project ID using the
	 * Cloudflare API.
	 *
	 * @param Email - The `Email` parameter is the email address associated with the Cloudflare account. It
	 * is used to authenticate the API request.
	 *
	 * @param Key - The `Key` parameter is the authentication key used to access the Cloudflare API. It is
	 * used to authenticate the request and verify the identity of the user making the request.
	 *
	 * @param ID - The ID parameter represents the ID of the Cloudflare account. It is used to identify the
	 * account for which the deployments need to be deleted.
	 *
	 */
	// biome-ignore lint/suspicious/noExplicitAny:
	({ Email, Key, ID }: Environment): Promise<any[]>;
}
