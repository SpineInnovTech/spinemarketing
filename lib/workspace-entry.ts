import { SPINE_WORKSPACE_APEX } from "./site-urls";

// Corporate site routes exclusively to the public SpineWorkspace product site
// (https://spineworkspace.com). It never builds sign-in, sign-up or app URLs:
// only the product site hands off to auth.spineworkspace.com / app.spineworkspace.com.
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
