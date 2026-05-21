import { Elysia } from "elysia";

const app = new Elysia().get("/*", ({ params, redirect }) => {
  const path = params["*"];
  return redirect('https://github.com/hanaeatsplanes/' + path);
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
