/// <reference types="@cloudflare/workers-types" />
export interface Env {
    ACCOUNT_EMAIL?: string;
    ACCOUNT_ID?: string;
    API_KEY?: string;
}
declare const _default: ExportedHandler<Env, unknown, unknown>;
export default _default;
