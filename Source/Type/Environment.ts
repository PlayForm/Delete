import type Zod from "zod";

/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Environment>;

export type { Type as default };

const { default: Environment } = await import("@Variable/Environment.js");
