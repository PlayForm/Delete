const { default: t } = await import("./Delete.js");
var r = {
	fetch: async (n, e, o) =>
		await (await import("./Response.js")).default(await t(e)),
	scheduled: async (n, e, o) => console.log(await t(e)),
};
export { t as Delete, r as default };
