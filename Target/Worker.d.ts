/// <reference types="@cloudflare/workers-types" />
export interface Env {
    Email?: string;
    ID?: string;
    Key?: string;
}
declare const _default: ExportedHandler<Env, unknown, unknown>;
export default _default;
