import type {
  FlagSpec,
  PublicSitesConfig,
  PublicSitesEnvironment,
  UrlRuleCondition,
  UrlRuleStep,
} from "./public-sites-config";

function envMatches(conditionEnv: string | string[] | undefined, activeEnv: string): boolean {
  if (conditionEnv === undefined) return true;
  const list = Array.isArray(conditionEnv) ? conditionEnv : [conditionEnv];
  return list.includes(activeEnv);
}

function truthyEnvValue(raw: string | undefined, allowed: string[]): boolean {
  if (raw === undefined || raw === "") return false;
  const normalized = raw.trim().toLowerCase();
  return allowed.map((v) => v.toLowerCase()).includes(normalized);
}

export function resolveFlags(
  specs: Record<string, FlagSpec> | undefined,
  env: NodeJS.ProcessEnv = process.env,
): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  if (!specs) return out;
  for (const [name, spec] of Object.entries(specs)) {
    let value = spec.default ?? false;
    if (spec.from_env) {
      for (const [varName, allowed] of Object.entries(spec.from_env)) {
        if (truthyEnvValue(env[varName], allowed)) {
          value = true;
          break;
        }
      }
    }
    out[name] = value;
  }
  return out;
}

function getByPath(root: unknown, dotted: string, activeEnv: string): string {
  const segments = dotted.split(".").map((seg) => (seg === "${env}" ? activeEnv : seg));
  let cur: unknown = root;
  for (const seg of segments) {
    if (cur === null || cur === undefined || typeof cur !== "object") {
      throw new Error(`url_rules ref: cannot resolve "${dotted}" at "${seg}"`);
    }
    cur = (cur as Record<string, unknown>)[seg];
  }
  if (typeof cur !== "string") {
    throw new Error(`url_rules ref: "${dotted}" is not a string URL`);
  }
  return cur;
}

function conditionMatches(
  condition: UrlRuleCondition,
  activeEnv: string,
  flags: Record<string, boolean>,
): boolean {
  if (!envMatches(condition.env, activeEnv)) return false;
  if (
    condition.innovtech_canonical_live !== undefined &&
    flags.innovtech_canonical_live !== condition.innovtech_canonical_live
  ) {
    return false;
  }
  return true;
}

function resolveStepValue(
  step: UrlRuleStep,
  config: PublicSitesConfig,
  activeEnv: string,
): string | null {
  if ("then" in step && step.then) return step.then;
  if ("then_ref" in step && step.then_ref) {
    return getByPath(config, step.then_ref.replaceAll("${env}", activeEnv), activeEnv);
  }
  if ("else" in step && step.else) return step.else;
  if ("else_ref" in step && step.else_ref) {
    return getByPath(config, step.else_ref.replaceAll("${env}", activeEnv), activeEnv);
  }
  return null;
}

export function resolveUrlRule(
  ruleName: string,
  config: PublicSitesConfig,
  activeEnv: string,
  flags: Record<string, boolean>,
): string {
  const steps = config.url_rules?.[ruleName];
  if (!steps?.length) {
    throw new Error(`config.yaml: missing url_rules.${ruleName}`);
  }

  for (const step of steps) {
    if ("if" in step) {
      if (conditionMatches(step.if, activeEnv, flags)) {
        const value = resolveStepValue(step, config, activeEnv);
        if (value) return value;
      }
      continue;
    }
    const fallback = resolveStepValue(step, config, activeEnv);
    if (fallback) return fallback;
  }

  throw new Error(`config.yaml: url_rules.${ruleName} did not match any branch`);
}

export function resolvedPublicSites(
  config: PublicSitesConfig,
  activeEnv: string = process.env.SPINE_PUBLIC_SITES_ENV ?? "prod",
): PublicSitesEnvironment & {
  resolved: {
    spine_innovtech_site: string;
    spine_workspace_apex: string;
    spine_workspace_app: string;
    spine_workspace_auth: string;
  };
} {
  const flags = resolveFlags(config.flags, process.env);
  const base = config.environments[activeEnv];
  if (!base) {
    throw new Error(`config.yaml: unknown environment "${activeEnv}"`);
  }

  return {
    ...base,
    resolved: {
      spine_innovtech_site: resolveUrlRule("spine_innovtech_site", config, activeEnv, flags),
      spine_workspace_apex: resolveUrlRule("spine_workspace_apex", config, activeEnv, flags),
      spine_workspace_app: resolveUrlRule("spine_workspace_app", config, activeEnv, flags),
      spine_workspace_auth: resolveUrlRule("spine_workspace_auth", config, activeEnv, flags),
    },
  };
}
