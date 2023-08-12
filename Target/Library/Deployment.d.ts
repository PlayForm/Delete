/// <reference types="@cloudflare/workers-types" />
declare const _default: (ID: string, Project: string, Header: HeadersInit) => Promise<{
    created_on: Date;
    id: string;
}[]>;
export default _default;
