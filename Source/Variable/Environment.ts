(await import("dotenv")).config();

export const { string } = await import("zod");

export default (await import("zod")).object({
	Email: string().optional().default(""),
	ID: string().optional().default(""),
	Key: string().optional().default(""),
});
