import type { PublicSitesEnvironment } from "./public-sites-config";

// Next.js injects only the resolved public URLs; filesystem access stays in its config.
const resolved = JSON.parse(
  process.env.SPINE_PUBLIC_SITES_JSON!,
) as PublicSitesEnvironment & {
  resolved: {
    spine_innovtech_site: string;
    spine_workspace_apex: string;
    spine_workspace_app: string;
    spine_workspace_auth: string;
  };
};

/** Parent company marketing site (resolved from config.yaml url_rules). */
export const SPINE_INNOVTECH_SITE = resolved.resolved.spine_innovtech_site;

/** Post-cutover apex — Worker redirects when CANONICAL_REDIRECTS_ENABLED=true. */
export const SPINE_INNOVTECH_CANONICAL_URL =
  resolved.spine_innovtech.canonical_url;

/** SpineWorkspace product — apex landing and lens doors only. */
export const SPINE_WORKSPACE_APEX = resolved.resolved.spine_workspace_apex;

export const SPINE_WORKSPACE_APP = resolved.resolved.spine_workspace_app;

export const AUTH_ORIGIN = resolved.resolved.spine_workspace_auth;
