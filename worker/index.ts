/**
 * Edge wrapper for spineinnovlabs-marketing static assets.
 * Domain cutover: enable CANONICAL_REDIRECT_HOST + CANONICAL_SITE_URL vars on prod
 * to 301 legacy hostnames to the apex (see docs/DEPLOYMENT.md).
 */

export interface Env {
  ASSETS: Fetcher;
  /** When "true", hostnames listed in LEGACY_REDIRECT_HOSTS redirect to CANONICAL_SITE_URL */
  CANONICAL_REDIRECTS_ENABLED?: string;
  CANONICAL_SITE_URL?: string;
  /** Comma-separated hostnames (e.g. spineinnovlabs.spineworkspace.com,www.spineinnovlabs.com) */
  LEGACY_REDIRECT_HOSTS?: string;
}

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  "X-Frame-Options": "DENY",
  "X-DNS-Prefetch-Control": "on",
};

function parseLegacyHosts(raw: string | undefined): Set<string> {
  if (!raw?.trim()) return new Set();
  return new Set(
    raw
      .split(",")
      .map((h) => h.trim().toLowerCase())
      .filter(Boolean),
  );
}

const DEFAULT_CANONICAL_SITE_URL = "https://spineinnovtech.com";
const DEFAULT_LEGACY_REDIRECT_HOSTS =
  "spineinnovtech.spineworkspace.com,spineinnovlabs.spineworkspace.com,spineinnovlabs.com,www.spineinnovlabs.com,www.spineinnovtech.com";

export function maybeCanonicalRedirect(request: Request, env: Env): Response | null {
  if (env.CANONICAL_REDIRECTS_ENABLED !== "true") return null;
  const canonicalBase = (env.CANONICAL_SITE_URL || DEFAULT_CANONICAL_SITE_URL).replace(/\/+$/, "");
  if (!canonicalBase) return null;

  const url = new URL(request.url);
  const legacyHosts = parseLegacyHosts(env.LEGACY_REDIRECT_HOSTS || DEFAULT_LEGACY_REDIRECT_HOSTS);
  if (!legacyHosts.has(url.hostname.toLowerCase())) return null;

  const safePath = "/" + url.pathname.replace(/^[\/\\]+/, "");
  const target = new URL(safePath + url.search, canonicalBase);
  return Response.redirect(target.toString(), 301);
}

function withSecurityHeaders(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }

  const url = new URL(request.url);
  if (url.protocol === "https:" && !headers.has("Strict-Transport-Security")) {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  const contentType = headers.get("content-type") ?? "";
  const isDocumentOrData =
    contentType.includes("text/html") ||
    contentType.includes("text/plain") ||
    contentType.includes("application/xml") ||
    contentType.includes("text/xml") ||
    contentType.includes("application/json") ||
    url.pathname === "/llms.txt" ||
    url.pathname === "/sitemap.xml" ||
    url.pathname === "/robots.txt" ||
    url.pathname === "/rss.xml";

  if (isDocumentOrData) {
    // Unconditionally overwrite asset-level cache headers so Cloudflare edge and normal visitors always see fresh release state
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    headers.set("CDN-Cache-Control", "public, max-age=0, must-revalidate");
    headers.set("Cloudflare-CDN-Cache-Control", "public, max-age=0, must-revalidate");
  } else if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/images/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const AUTH_SITE_ORIGIN = "https://auth.spineworkspace.com";
const APP_SITE_ORIGIN = "https://app.spineworkspace.com";
const PRODUCT_SITE_ORIGIN = "https://spineworkspace.com";
const CORPORATE_ENTRY_REDIRECT_PATHS = new Set([
  "/login",
  "/signup",
  "/onboarding",
  "/workspace",
]);

export function maybeProductEntryRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  const normalized = url.pathname.replace(/\/+$/, "") || "/";
  if (!CORPORATE_ENTRY_REDIRECT_PATHS.has(normalized)) return null;

  let target: URL;
  if (normalized === "/login" || normalized === "/signup") {
    target = new URL(normalized + url.search, AUTH_SITE_ORIGIN);
  } else if (normalized === "/workspace") {
    target = new URL("/" + (url.search ? url.search : ""), APP_SITE_ORIGIN);
  } else {
    target = new URL("/get-started" + url.search, PRODUCT_SITE_ORIGIN);
  }

  return Response.redirect(target.toString(), 302);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const redirect = maybeCanonicalRedirect(request, env);
    if (redirect) return redirect;

    const productEntryRedirect = maybeProductEntryRedirect(request);
    if (productEntryRedirect) return productEntryRedirect;

    const response = await env.ASSETS.fetch(request);
    return withSecurityHeaders(response, request);
  },
};
