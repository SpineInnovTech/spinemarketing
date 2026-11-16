import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { NarrativeT2Page } from "@/lib/page-templates/narrative-t2";
import type { NarrativePageCopy } from "@/lib/site-copy";
import { DEFAULT_NARRATIVE_TEMPLATE } from "@/lib/page-templates";

export function createNarrativeRoute(
  page: NarrativePageCopy,
  options?: {
    breadcrumbParents?: { name: string; path: string }[];
    showProofCards?: boolean;
    /** Magic UI template id (default T2 product/feature). */
    template?: typeof DEFAULT_NARRATIVE_TEMPLATE;
  },
) {
  const metadata = createPageMetadata(page.meta);
  const breadcrumbs = breadcrumb(page.meta.path, page.meta.title.split(" — ")[0] || page.meta.title, options?.breadcrumbParents);

  function Page() {
    return (
      <MarketingPageShell breadcrumbs={breadcrumbs}>
        <NarrativeT2Page page={page} showProofCards={options?.showProofCards} />
      </MarketingPageShell>
    );
  }

  return { metadata, Page };
}
