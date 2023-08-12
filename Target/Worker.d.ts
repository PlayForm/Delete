/// <reference types="@cloudflare/workers-types/experimental" />
export interface Env {
    Email?: string;
    ID?: string;
    Key?: string;
}
declare const _default: ExportedHandler<Env, unknown, unknown>;
export default _default;
