(await import("dotenv")).config();
const { string: t } = await import("zod");
var o = (await import("zod")).object({
	Email: t().optional().default(""),
	ID: t().optional().default(""),
	Key: t().optional().default(""),
	Token: t().optional().default(""),
	Project: t().optional().default(""),
});
export { o as default, t as string };
