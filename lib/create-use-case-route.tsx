import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { UseCasePageContent } from "@/components/marketing/narrative-page";
import type { UseCasePageCopy } from "@/lib/site-copy";

export function createUseCaseRoute(page: UseCasePageCopy) {
  const metadata = createPageMetadata(page.meta);
  const title = page.meta.title.split(" — ")[0] || page.meta.title;

  function PageComponent() {
    const breadcrumbs = breadcrumb(page.meta.path, title, [{ name: "Site map", path: "/site-map" }]);
    return (
      <MarketingPageShell breadcrumbs={breadcrumbs}>
        <UseCasePageContent page={page} />
      </MarketingPageShell>
    );
  }

  return { metadata, Page: PageComponent };
}
