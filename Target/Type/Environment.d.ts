/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Environment>;
export type { Type as default };
import type Zod from "zod";
declare const Environment: Zod.ZodObject<{
    Email: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    ID: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    Key: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
}, "strip", Zod.ZodTypeAny, {
    Email: string;
    ID: string;
    Key: string;
}, {
    Email?: string | undefined;
    ID?: string | undefined;
    Key?: string | undefined;
}>;
