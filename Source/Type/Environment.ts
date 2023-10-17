/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Environment>;

export type { Type as default };

import type Zod from "zod";

const { default: Environment } = await import("../Variable/Environment.js");
