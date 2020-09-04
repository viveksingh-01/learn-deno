/**
 * @name --allow-read
 * @description Allows READ access to Deno
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
 * @description Allows WRITE access to Deno
 */

/**
 * @example Write content into file
 */
await Deno.writeTextFile(
  "write.txt",
  "This is some more random text...",
);

/* ******************************************************************************************* */
/**
 * @name --allow-net
 * @description Allows NETWORK access to Deno
 */

/**
 * @example Fetch data from a third-party API
 */
const userData = await fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(
    (response) => response.json(),
  );
console.log(userData);
