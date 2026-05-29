import type Zod from "zod";
/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Environment>;
export type { Type as default };
declare const Environment: Zod.ZodObject<{
    Batch: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodCoercedNumber<unknown>>>;
    Delay: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodCoercedNumber<unknown>>>;
    Email: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    ID: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    Key: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    Logger: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodCoercedNumber<unknown>>>;
    Project: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    Token: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
}, Zod.core.$strip>;
