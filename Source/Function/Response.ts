/**
 * The function `Response` is an asynchronous function that returns a response object with a JSON
 * stringified message and a specified status code.
 * @param {unknown} [Message=null] - The `Message` parameter is the data that you want to send as a
 * response. It can be of any type, but it will be converted to a JSON string before being sent.
 * @param [Status=200] - The `Status` parameter is an optional parameter that specifies the HTTP status
 * code of the response. If no value is provided, it defaults to 200 (OK).
 */
export default async (Message: unknown = null, Status = 200) =>
	new Response(JSON.stringify(Message), {
		status: Status,
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
	});
