import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
		ACCOUNT_EMAIL: z.string().default(""),
		ACCOUNT_ID: z.string().default(""),
		API_KEY: z.string().default(""),
	})
	.parse(process.env);
