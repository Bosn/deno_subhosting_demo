import express from "npm:express@4";
import { load } from "https://deno.land/std@0.216.0/dotenv/mod.ts";

const app = express();

app.get("/", (_req: any, res: any) => {
  res.send("Hello World! test qq");
});

addEventListener("hmr", (e: any) => {
  console.log("HMR triggered", e.detail.path);
});


const env = await load();
const password = env["PASSWORD"];

console.log('pwd=', password);


app.listen(3000);
