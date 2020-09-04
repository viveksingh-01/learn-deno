import {
  serve,
  Server,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";

const server: Server = serve({ port: 8000 });
console.log("Server running at http://localhost:8000/");

for await (const req: ServerRequest of server) {
  let msg: string = "Hello!\nThe server is up and running...";
  if (req.url === "/about") {
    msg = "This is a dummy Deno server! :)";
  }
  req.respond({ body: msg });
}
