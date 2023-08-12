import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
		Email: z.string().default(""),
		ACCOUNT_ID: z.string().default(""),
		Key: z.string().default(""),
	})
	.parse(process.env);
