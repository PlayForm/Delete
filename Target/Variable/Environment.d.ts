export declare const string: (params?: ({
    errorMap?: import("zod").ZodErrorMap | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
    message?: string | undefined;
    description?: string | undefined;
} & {
    coerce?: true | undefined;
}) | undefined) => import("zod").ZodString;
declare const _default: import("zod").ZodObject<{
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
export default _default;
