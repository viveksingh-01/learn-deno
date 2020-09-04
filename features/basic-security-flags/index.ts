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
const fileContent = await Deno.readTextFile("./read.txt");
console.log(fileContent);

/* ******************************************************************************************* */

/**
 * @name --allow-write
 * @description Provides WRITE permissions to Deno
 */

/**
 * @example Write content into file
 */
await Deno.writeTextFile(
  "write.txt",
  "This is some more random text...",
);
