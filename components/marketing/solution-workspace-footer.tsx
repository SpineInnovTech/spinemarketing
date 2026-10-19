"use client";

import { getPublicSolutionBySlug, type PublicSolution } from "@/lib/solution-taxonomy";
import { SOLUTION_DOMAINS, type SolutionSlug } from "@/lib/solution-domains";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";

export function SolutionWorkspaceFooter({ slug }: { slug: string }) {
  const catalogSolution = getPublicSolutionBySlug(slug);
  const domain = Object.prototype.hasOwnProperty.call(SOLUTION_DOMAINS, slug)
    ? SOLUTION_DOMAINS[slug as SolutionSlug]
    : undefined;

  const solution: PublicSolution | null =
    catalogSolution ??
    (domain
      ? {
          id: slug,
          slug,
          name: domain.name,
          navLabel: domain.name,
          headline: domain.summary,
          description: domain.summary,
          buyerSummary: domain.summary,
          workspaceAssociations: [],
        }
      : null);

  if (!solution) return null;
  return <WorkspaceProjectionCta solution={solution} />;
}
