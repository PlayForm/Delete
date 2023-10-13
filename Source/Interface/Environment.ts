const { default: Environment } = await import("../Variable/Environment.js");

export type Type = Zod.infer<typeof Environment>;

export type { Type as default };
