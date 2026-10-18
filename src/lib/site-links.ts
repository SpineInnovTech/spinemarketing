export type SiteOrigins = {
  corporate?: string;
  product?: string;
  workspace?: string;
  documentation?: string;
};

function publicOrigin(value: string, name: string): string {
  let url: URL;
  try { url = new URL(value); } catch { throw new Error(`Invalid public origin: ${name}`); }
  const loopback = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if ((url.protocol !== "https:" && !(loopback && url.protocol === "http:"))
    || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error(`Expected a public HTTPS origin: ${name}`);
  }
  return url.origin;
}

export function createSiteLinks(origins: SiteOrigins = {}) {
  const corporate = publicOrigin(origins.corporate ?? "https://spineinnovtech.spineworkspace.com", "corporate");
  const product = publicOrigin(origins.product ?? "https://spineworkspace.com", "product");
  const app = publicOrigin(origins.workspace ?? "https://app.spineworkspace.com", "workspace");
  const next = "/workspace/my-work";
  const params = new URLSearchParams({ next });
  return {
    corporate,
    product,
    workspace: `${app}${next}`,
    signup: `${app}/signup?${params.toString()}`,
    login: `${app}/login?${params.toString()}`,
    documentation: `${publicOrigin(origins.documentation ?? "https://docs.spineworkspace.com", "documentation")}/`,
    productPlatform: `${product}/product/platform`,
    productSolutions: `${product}/solutions`,
    productPricing: `${product}/pricing`,
    productContact: `${product}/contact`,
  } as const;
}

/** Only explicit, public build settings are read; no browser credentials are shared. */
export const SITE_LINKS = createSiteLinks({
  corporate: import.meta.env?.VITE_CORPORATE_URL,
  product: import.meta.env?.VITE_PRODUCT_URL,
  workspace: import.meta.env?.VITE_WORKSPACE_URL,
  documentation: import.meta.env?.VITE_DOCUMENTATION_URL,
});

export function referralUrl(href: string): string {
  const url = new URL(href);
  publicOrigin(url.origin, "referral");
  url.searchParams.set("utm_source", "spineinnovtech");
  url.searchParams.set("utm_medium", "referral");
  return url.toString();
}
