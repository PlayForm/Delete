import { z as Zod } from "zod";
export declare const Fn: Zod.ZodObject<{
    Email: Zod.ZodDefault<Zod.ZodString>;
    ID: Zod.ZodDefault<Zod.ZodString>;
    Key: Zod.ZodDefault<Zod.ZodString>;
}, "strip", Zod.ZodTypeAny, {
    Email: string;
    ID: string;
    Key: string;
}, {
    Email?: string | undefined;
    ID?: string | undefined;
    Key?: string | undefined;
}>;
export type Type = Zod.infer<typeof Fn>;
export type { Type as default };
