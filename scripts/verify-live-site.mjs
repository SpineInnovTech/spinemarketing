/**
 * Post-Wrangler production acceptance. Fails when CDN/Worker still serves the
 * previous release. This check runs on Cloudflare Builds after deployment.
 */
const origin = "https://spineinnovtech.com";
const retries = Number(process.env.SPINE_DEPLOY_VERIFY_ATTEMPTS || 8);
let last = "no response";
for (let attempt = 1; attempt <= retries; attempt++) {
  try {
    const url = new URL(origin);
    url.searchParams.set("_release_check", String(Date.now()));
    const response = await fetch(url, { headers: { "Cache-Control": "no-cache" }, redirect: "follow", signal: AbortSignal.timeout(20000) });
    const html = await response.text();
    if (response.ok && new URL(response.url).hostname === new URL(origin).hostname &&
        html.includes("Connecting business context for humans and AI, with people in control.") && html.includes("Spine InnovTech") &&
        !html.includes("We build governed business context for humans and AI.") &&
        !html.includes("We build the foundation for connected business work.") &&
        !html.includes("Good morning, Operator")) {
      console.log(`Cloudflare production verified: ${origin} (HTTP ${response.status})`);
      process.exit(0);
    }
    last = `HTTP ${response.status}; final host ${new URL(response.url).hostname}; product introduction ${html.includes("Connecting business context for humans and AI, with people in control.")}`;
  } catch (error) {
    last = String(error);
  }
  if (attempt < retries) await new Promise(resolve => setTimeout(resolve, 7000));
}
console.error("Cloudflare deploy completed but live corporate homepage verification failed:", last);
process.exitCode = 1;
