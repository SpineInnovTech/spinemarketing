import { SPINE_WORKSPACE_APEX } from "./site-urls";

// Corporate site routes exclusively to the SpineWorkspace product site
// (https://spineworkspace.com). Only the product site redirects to the app.
const solutionDomains: Readonly<Record<string, string>> = {
  "customer-success": "account-success",
  "customer-support": "support",
  "product-engineering": "productengineering",
  "human-resources": "humanresources",
  memoryandknowledge: "knowledge-management",
  individual: "personal",
  founders: "founderops",
  "finance-leaders": "finance",
  sales: "sales", marketing: "marketing", content: "content",
  finance: "finance", legal: "legal", operations: "operations", revops: "revops",
};

const solutionLensSlugs: Readonly<Record<string, string>> = {
  "customer-success": "account-success",
  "customer-support": "support",
  "product-engineering": "productengineering",
  "human-resources": "humanresources",
  individual: "personal",
  founders: "founderops",
  "finance-leaders": "finance",
  sales: "sales",
  marketing: "marketing",
  content: "content",
  finance: "finance",
  legal: "legal",
  operations: "ops",
  revops: "businessops",
  services: "service",
};

export function productSiteUrl(pathname = ""): string {
  const slug = /^\/solutions\/([^/]+)\/?$/.exec(pathname)?.[1];
  const lens = slug && Object.hasOwn(solutionLensSlugs, slug) ? solutionLensSlugs[slug] : undefined;
  const targetPath = lens
    ? `/solutions/${lens}`
    : pathname.startsWith("/solutions")
      ? "/solutions"
      : pathname === "/pricing"
        ? "/pricing"
        : "/";
  return new URL(targetPath, SPINE_WORKSPACE_APEX).toString();
}

export function workspaceEntryLinks(pathname = "") {
  const slug = /^\/solutions\/([^/]+)\/?$/.exec(pathname)?.[1];
  const domain = slug && Object.hasOwn(solutionDomains, slug) ? solutionDomains[slug] : undefined;
  // Founder Operations starts at company-overview; it has no dashboard view.
  const homeView = domain === "founderops" ? "company-overview" : "dashboard";
  const next = domain ? `/workspace/work/${domain}/${homeView}` : "/workspace/my-work";
  function href(path: "signup" | "login") {
    const url = new URL(`/${path}`, SPINE_WORKSPACE_APEX);
    url.searchParams.set("next", next);
    if (domain) url.searchParams.set("entry_domain", domain);
    return url.toString();
  }
  return { signup: href("signup"), login: href("login"), product: productSiteUrl(pathname) };
}
