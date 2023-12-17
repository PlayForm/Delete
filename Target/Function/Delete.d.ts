/**
 * @module Delete
 *
 */
declare const _default: Type;
export default _default;
export declare const Environment: import("zod").ZodObject<
	{
		Email: import("zod").ZodDefault<
			import("zod").ZodOptional<import("zod").ZodString>
		>;
		ID: import("zod").ZodDefault<
			import("zod").ZodOptional<import("zod").ZodString>
		>;
		Key: import("zod").ZodDefault<
			import("zod").ZodOptional<import("zod").ZodString>
		>;
	},
	"strip",
	import("zod").ZodTypeAny,
	{
		Email: string;
		Key: string;
		ID: string;
	},
	{
		Email?: string | undefined;
		ID?: string | undefined;
		Key?: string | undefined;
	}
>;
import type Type from "../Interface/Delete.js";
