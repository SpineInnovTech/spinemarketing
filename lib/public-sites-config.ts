import { readFileSync } from "node:fs";
import path from "node:path";
import { parse } from "yaml";

export type PublicSitesEnvironment = {
  spine_innovtech: {
    public_url: string;
    canonical_url: string;
    legacy_redirect_hosts?: string[];
  };
  spine_workspace: {
    apex: string;
    app: string;
    auth: string;
    domain_root: string;
  };
};

export type UrlRuleCondition = {
  env?: string | string[];
  innovtech_canonical_live?: boolean;
};

export type UrlRuleStep =
  | { if: UrlRuleCondition; then?: string; then_ref?: string }
  | { else?: string; else_ref?: string };

export type UrlRulesMap = Record<string, UrlRuleStep[]>;

export type FlagSpec = {
  default?: boolean;
  from_env?: Record<string, string[]>;
};

export type PublicSitesConfig = {
  version: number;
  flags?: Record<string, FlagSpec>;
  environments: Record<string, PublicSitesEnvironment>;
  url_rules?: UrlRulesMap;
  navigation?: Record<string, string>;
  build?: { prod_site_url?: string };
};

let cached: PublicSitesConfig | null = null;

export function loadPublicSitesConfig(): PublicSitesConfig {
  if (cached) return cached;
  const configPath = path.join(process.cwd(), "config.yaml");
  const raw = readFileSync(configPath, "utf8");
  cached = parse(raw) as PublicSitesConfig;
  return cached;
}
