import { readFile as _File } from "fs/promises";
import { dirname as Dir } from "path";
import { fileURLToPath as Path } from "url";

export default async (File: string, From: string = import.meta.url) =>
	JSON.parse(
		(
			await _File(
				`${Dir(Path(From ?? import.meta.url))}/${File}`,
				"utf-8"
			)
		).toString()
	);
