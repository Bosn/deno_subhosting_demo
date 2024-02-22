const accessToken = Deno.env.get("DEPLOY_ACCESS_TOKEN");
const API = "https://api.deno.com/v1";

// Replace with your desired project ID
const projectId = "51406a55-9cfa-4927-9fd3-0b39c21acad3";

// Create a new deployment
const res = await fetch(`${API}/projects/${projectId}/deployments`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    entryPointUrl: "main.ts",
    assets: {
      "main.ts": {
        "kind": "file",
        "content": `Deno.serve(() => new Response("Hello, World! Bosn Ma!❤️"));`,
        "encoding": "utf-8",
      },
    },
    envVars: {},
  }),
});

console.log(res.status);