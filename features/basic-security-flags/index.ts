/**
 * @name --allow-read
 * @description Provides READ permissions to Deno
 */

/**
 * @example Fetch current working directory
 */
const cwd = Deno.cwd();
console.log(cwd);

/**
 * @example Read content from a text-file
 */
const fileContent = await Deno.readTextFile("./some-text-file.txt");
console.log(fileContent);
