import * as Environment from "dotenv";
import { z as Zod } from "zod";

Environment.config();

export const Function = Zod.object({
	Email: Zod.string().default(""),
	ID: Zod.string().default(""),
	Key: Zod.string().default(""),
});

export type Type = Zod.infer<typeof Function>;

export type { Type as default };
