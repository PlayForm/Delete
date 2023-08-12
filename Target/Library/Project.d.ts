import type { HeadersInit } from "@cloudflare/workers-types/experimental";
/**
 * The function `Project` makes an asynchronous request to the Cloudflare API to fetch a
 * list of projects associated with a given account ID, using the provided headers.
 * @param {string} ID - The ID parameter is a string that represents the account ID for
 * the Cloudflare API. It is used to specify which account's projects you want to
 * retrieve.
 * @param {HeadersInit} Header - The `Header` parameter is an object that represents the
 * headers to be included in the HTTP request. It should be of type `HeadersInit`, which
 * is a type alias for an object that can be used to initialize a `Headers` object. The
 * headers can include information such as authentication tokens, content
 */
declare const _default: (ID: string, Header: HeadersInit) => Promise<{
    id: string;
    name: string;
}[]>;
export default _default;
