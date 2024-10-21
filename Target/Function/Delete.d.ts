import type Interface from "../Interface/Delete.js";
/**
 * @module Delete
 *
 */
declare const _default: Interface;
export default _default;
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
