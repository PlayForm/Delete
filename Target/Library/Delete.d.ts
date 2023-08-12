export declare const Header: {
    "content-type": string;
    "X-Auth-Email": string;
    "X-Auth-Key": string;
};
export declare const Days = 7;
export declare const Limit = 40;
/**
 * The Delete function deletes all deployments associated with a specific project ID using the
 * Cloudflare API.
 * @param Email - The `Email` parameter is the email address associated with the Cloudflare account. It
 * is used to authenticate the API request.
 * @param Key - The `Key` parameter is the authentication key used to access the Cloudflare API. It is
 * used to authenticate the request and verify the identity of the user making the request.
 * @param ID - The ID parameter represents the ID of the Cloudflare account. It is used to identify the
 * account for which the deployments need to be deleted.
 * @returns The function `Delete` returns an array of IDs that have been deleted.
 */
declare const _default: (Email?: string, Key?: string, ID?: string) => Promise<string[]>;
export default _default;
