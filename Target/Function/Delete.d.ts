/**
 * @module Delete
 *
 * Deletes all Cloudflare Pages deployments for an account or a specific project.
 * Prefers API Token (Bearer) auth over Email + Global API Key.
 * Uses ?force=true to bypass aliased-deployment restrictions.
 */
declare const _default: ({ Email, Key, ID, Token, Project }: {
    Email: string;
    ID: string;
    Key: string;
    Token: string;
    Project: string;
}) => Promise<{
    project: string;
    deployment: string;
    success: boolean;
    error?: string;
}[]>;
export default _default;
