/**
 * Public site origin for canonical URLs, sitemap, robots, and structured data.
 * Set at build time via NEXT_PUBLIC_SITE_URL or PUBLIC_SITE_URL.
 */
const DEFAULT_PRODUCTION_ORIGIN = "https://spineinnovtech.com";

function readConfiguredOrigin(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.PUBLIC_SITE_URL?.trim() ||
    DEFAULT_PRODUCTION_ORIGIN;
  return raw.replace(/\/+$/, "");
}

export const publicSiteUrl = readConfiguredOrigin();

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return publicSiteUrl;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${publicSiteUrl}${normalized}`;
}
