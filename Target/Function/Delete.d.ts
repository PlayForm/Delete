/**
 * @module Delete
 *
 * Deletes all Cloudflare Pages deployments for an account or a specific project.
 * Prefers API Token (Bearer) auth over Email + Global API Key.
 * Uses ?force=true to bypass aliased-deployment restrictions.
 * Processes deletions in parallel batches with an optional delay between batches.
 */
declare const _default: ({ Email, Key, ID, Token, Project, Logger, Batch, Delay, }: {
    Batch: number;
    Delay: number;
    Email: string;
    ID: string;
    Key: string;
    Logger: number;
    Project: string;
    Token: string;
}) => Promise<{
    project: string;
    deployment: string;
    success: boolean;
    error?: string;
}[]>;
export default _default;
