import type Environment from "../Type/Environment.js";

/**
 * @module Delete
 *
 */
export default interface Interface {
	/**
	 * Deletes all Cloudflare Pages deployments for a given account or a specific project.
	 *
	 * @param Email - Cloudflare account email (used with Global API Key auth).
	 * @param Key - Cloudflare Global API Key (used with Email auth).
	 * @param ID - Cloudflare account ID.
	 * @param Token - Cloudflare API Token (preferred; used instead of Email + Key when set).
	 * @param Project - Pages project name. If set, only this project's deployments are deleted.
	 *                  If empty, all projects in the account are processed.
	 */
	({ Email, Key, ID, Token, Project }: Environment): Promise<any[]>;
}
