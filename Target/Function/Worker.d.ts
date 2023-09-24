/// <reference types="@cloudflare/workers-types/experimental" />
export declare const Delete: ({ Email, Key, ID }?: {
    Email: string;
    ID: string;
    Key: string;
}) => Promise<string[]>;
declare const _default: ExportedHandler<{
    Email: string;
    ID: string;
    Key: string;
}, unknown, unknown>;
export default _default;
