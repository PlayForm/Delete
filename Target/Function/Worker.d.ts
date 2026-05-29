import type { ExportedHandler } from "@cloudflare/workers-types/experimental/index.js";
import type Environment from "../Type/Environment.js";
export declare const Delete: ({ Email, Key, ID, Token, Project, Logger, Batch, Delay, }: {
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
declare const _default: ExportedHandler<Environment>;
export default _default;
