import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { breadcrumb, createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({
  title: "Product evidence — SpineWorkspace",
  description: "Inspect authentic Workbench captures, a recorded shell walkthrough and a controlled renewal journey, with clear source and test boundaries.",
  path: "/proof",
});

const evidence = [
  {
    title: "Explore the work views.",
    image: "/images/workbench/native-shell/document-20261015.webp",
    alt: "Captured application shell with the blue sidebar and Canvas renewal document using QA records.",
    width: 1600,
    height: 1100,
    caption: "Canvas in the native Workbench shell",
    description: "Inspect dashboards, Canvas documents, tables and context graphs, including the application’s complete sidebar.",
    label: "Explore Workbench views",
    href: "/product#workbench-views",
    detail: "Captures render real application components with QA records. Canvas uses a local component composition; dashboard captures include a documented local editor repair pending application integration. Visible sync and host badges do not establish connected source effects.",
  },
  {
    title: "Watch the shell respond.",
    image: "/images/workbench/founderops/cockpit-20261014.webp",
    alt: "Recorded Workbench shell’s FounderOps cockpit with its native navigation and QA summaries.",
    width: 1440,
    height: 900,
    caption: "26-second application recording",
    description: "See the native navigation expand and collapse, then open work-view search in the actual application.",
    label: "Watch the shell recording",
    href: "/product#workbench-recording",
    detail: "Recorded October 14, 2026, using existing QA fixtures. Playback keeps the original speed, with no compositing. This establishes interface interactions, not live ingestion, verified host access or completed provider execution.",
  },
  {
    title: "Follow one piece of work.",
    image: "/images/workbench/native-shell/graph-20261015.webp",
    alt: "QA Canvas context graph showing related work and evidence; this capture is not an execution receipt.",
    width: 1600,
    height: 1100,
    caption: "Canvas context view · QA records",
    description: "Follow a controlled renewal and SLA request through context, a proposed action, authority checks and continuation.",
    label: "Explore the test journey",
    href: "/product#workbench-customer-journey",
    detail: "The October 15 repository report records 18 passing steps. It combines deployed-service checks with a constructed email, programmatic approval and controlled provider adapter. It does not establish independent Gmail delivery or a complete browser approval journey.",
  },
] as const;

export default function ProofPage() {
  return (
    <MarketingPageShell breadcrumbs={breadcrumb("/proof", "Product evidence")}>
      <section aria-labelledby="proof-title" className="border-b border-[#D6E8F8] bg-[#F0F8FF] px-5 pb-12 pt-32 text-[#082B5E] sm:px-8 sm:pb-16">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#006FE8]">SpineWorkspace · Product evidence</p>
          <h1 id="proof-title" className="mt-5 max-w-[850px] text-[length:min(clamp(2.7rem,5vw,4.8rem),var(--marketing-title-size))] font-semibold leading-[1.1] tracking-[-.045em]">Product evidence you can inspect.</h1>
          <p className="mt-6 max-w-[740px] text-[length:var(--marketing-body-size)] leading-7 text-[#4E607A]">See the interface, watch real interactions and follow the recorded test scope behind one workflow.</p>
        </div>
      </section>
      <section aria-label="Product evidence" className="px-5 py-12 text-[#082B5E] sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <p className="max-w-[900px] text-sm leading-7 text-[#4E607A]">Application captures use QA records. Figures and workflow states are not live customer telemetry, measured customer outcomes or certifications.</p>
          <div className="mt-7 grid items-start gap-6 lg:grid-cols-3">
            {evidence.map((item) => (
              <article key={item.href} className="min-w-0 overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white">
                <figure className="border-b border-[#E2EEF8] bg-[#F7FAFD]">
                  <Link href={item.href} className="flex aspect-[16/11] items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]">
                    <img src={item.image} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                  </Link>
                  <figcaption className="px-4 py-3 text-xs leading-5 text-[#596F89]">{item.caption}</figcaption>
                </figure>
                <div className="p-5 sm:p-6">
                  <h2 className="text-[length:var(--marketing-card-size)] font-semibold leading-snug">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#4E607A]">{item.description}</p>
                  <Link href={item.href} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">{item.label} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden /></Link>
                  <details className="mt-4 border-t border-[#E2EEF8] pt-4">
                    <summary className="cursor-pointer rounded-sm text-xs font-semibold leading-6 text-[#315775] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Source and test scope</summary>
                    <p className="mt-3 text-xs leading-6 text-[#596F89]">{item.detail}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
