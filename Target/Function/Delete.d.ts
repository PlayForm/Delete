export declare const Environment: import("zod").ZodObject<{
    Email: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    ID: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Key: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, "strip", import("zod").ZodTypeAny, {
    Email: string;
    ID: string;
    Key: string;
}, {
    Email?: string | undefined;
    ID?: string | undefined;
    Key?: string | undefined;
}>;
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
declare const _default: ({ Email, Key, ID }?: {
    Email: string;
    ID: string;
    Key: string;
}) => Promise<string[]>;
export default _default;
