import { z as Zod } from "zod";
export * as Environment from "dotenv";

export const Fn = Zod.object({
	Email: Zod.string().default(""),
	ID: Zod.string().default(""),
	Key: Zod.string().default(""),
});

export type Type = Zod.infer<typeof Fn>;

export type { Type as default };
