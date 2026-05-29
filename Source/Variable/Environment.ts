(await import("dotenv")).config();

export const { string, coerce } = await import("zod");

export default (await import("zod")).object({
	Batch: coerce.number().optional().default(10),
	Delay: coerce.number().optional().default(0),
	Email: string().optional().default(""),
	ID: string().optional().default(""),
	Key: string().optional().default(""),
	Logger: coerce.number().optional().default(1),
	Project: string().optional().default(""),
	Token: string().optional().default(""),
});
