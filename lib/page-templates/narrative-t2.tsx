import { NarrativePageContent } from "@/components/marketing/narrative-page";
import type { NarrativePageCopy } from "@/lib/site-copy";
import { templateSections } from "./types";

/** T2 product/feature page shell (hero + sections + cross-links + CTA). */
export function NarrativeT2Page({
  page,
  showProofCards,
}: {
  page: NarrativePageCopy;
  showProofCards?: boolean;
}) {
  void templateSections["T2-product"];
  return <NarrativePageContent page={page} showProofCards={showProofCards} />;
}
