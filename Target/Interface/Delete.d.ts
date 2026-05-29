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
     * @param Logger - Log level: `2` = verbose (batch progress + per-deployment result), `1` = summary (project header + final count), `0` = silent.
     * @param Batch - Number of deployments deleted in parallel per batch (default: `10`).
     * @param Delay - Milliseconds to wait between batches (default: `0`).
     */
    ({ Email, Key, ID, Token, Project, Logger, Batch, Delay, }: Environment): Promise<any[]>;
}
