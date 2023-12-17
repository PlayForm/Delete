(await import("dotenv")).config();
const { string: t } = await import("zod");
var a = (await import("zod")).object({
	Email: t().optional().default(""),
	ID: t().optional().default(""),
	Key: t().optional().default(""),
});
export { a as default, t as string };
