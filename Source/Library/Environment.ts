import * as Environment from "dotenv";
import { z as Zod } from "zod";

Environment.config();

export default Zod.object({
	Email: Zod.string().default(""),
	ID: Zod.string().default(""),
	Key: Zod.string().default(""),
}).parse(process.env);
