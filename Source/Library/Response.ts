export default async (Message: unknown = null, Status = 200) =>
	new Response(JSON.stringify(Message), {
		status: Status,
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
	});
