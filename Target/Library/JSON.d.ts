/**
 * The function `JSON` is a TypeScript function that reads a JSON file and returns its
 * parsed content.
 * @param {string} File - The `File` parameter is a string that represents the name or
 * path of the JSON file that you want to parse.
 * @param {string} From - The `From` parameter is a string that represents the file path
 * or URL of the file from which you want to read the JSON data. It is optional and
 * defaults to `import.meta.url`, which is a special variable that represents the URL of
 * the current module.
 */
declare const _default: (File: string, From?: string) => Promise<any>;
export default _default;
