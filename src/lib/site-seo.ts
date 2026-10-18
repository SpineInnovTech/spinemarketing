import { SITE_LINKS } from "./site-links.ts";

const CORPORATE_PATHS = [
  "/", "/company", "/story", "/services", "/platform", "/technology",
  "/technology/fabric", "/technology/governance", "/technology/network", "/insights",
  "/faq", "/security", "/privacy", "/terms", "/docs", "/workspace", "/site-map",
] as const;

export function corporateCanonical(pathname: string): string {
  const url = new URL(pathname, SITE_LINKS.corporate);
  if (!pathname.startsWith("/") || pathname.startsWith("//") || url.origin !== SITE_LINKS.corporate) {
    throw new Error("Canonical paths must belong to the corporate site");
  }
  url.search = "";
  url.hash = "";
  return url.toString();
}

export function corporateSitemapXml(): string {
  const entries = CORPORATE_PATHS.map((path) => `<url><loc>${corporateCanonical(path)}</loc></url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
}

export function corporateRobots(): string {
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${corporateCanonical("/sitemap.xml")}\n`;
}
