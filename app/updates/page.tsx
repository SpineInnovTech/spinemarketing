import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { PageHero } from "@/components/marketing/page-hero";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: { absolute: "Company news | Spine InnovTech" },
  description: "Company news from Spine InnovTech: notes on company direction and how SpineWorkspace is built, with people in control. Product release notes are on the product website.",
  alternates: { canonical: "/updates" },
};

// Company news entries. Each entry is a dated note in the company's voice,
// newest first. Copy is drawn only from text that already exists in this repo
// and the Final Content Master; labels are short and neutral. No number,
// timing, certification, customer, pricing or security claim appears here
// unless the repo or master already proves it. Product-only release notes
// belong to the product site and are linked once, below.
const news = [
  {
    period: "October 2026",
    category: "Company direction",
    title: "Spine InnovTech and SpineWorkspace: two distinct roles",
    body: "Spine InnovTech is the company and technology identity. SpineWorkspace is the flagship business-context workspace where people and AI collaborate. This website introduces the company, its technology, and the features of SpineWorkspace so visitors can evaluate the product before entering a workspace.",
  },
  {
    period: "September 2026",
    category: "How it is built",
    title: "One product, with people in control",
    body: "Spine Fabric, Workbench, Twin, approved action and the Marketplace are connected parts of SpineWorkspace. The focus stays on business context, who can act, and checked results — rather than separate AI agents working on their own.",
  },
];

export default function CompanyNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", url: absoluteUrl("/") }, { name: "Company news", url: absoluteUrl("/updates") }]} />
      <Header />
      <main id="main">
        <PageHero
          tone="ice"
          badge="Spine InnovTech / Company news"
          headline="Company news"
          subhead="Notes from Spine InnovTech on company direction and how SpineWorkspace is built, with people in control. Product release notes live on the product website."
          primaryCta={{ label: "About Spine InnovTech", href: "/company" }}
          secondaryCta={{ label: "Product release notes", href: "https://spineworkspace.com" }}
        />
        <section className="mx-auto max-w-[1130px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-5">
            {news.map((note) => (
              <article key={note.title} className="grid gap-6 rounded-[24px] border border-[#D7E5F5] bg-white p-8 sm:p-10 lg:grid-cols-[.3fr_1fr]">
                <div><p className="text-xs font-semibold uppercase tracking-[.14em] text-[#2664B3]">{note.period}</p><p className="mt-3 text-sm text-[#58708C]">{note.category}</p></div>
                <div><h2 className="max-w-2xl text-[length:min(28px,var(--marketing-heading-size))] font-semibold leading-[1.25] tracking-[-.045em] text-[#112E55]">{note.title}</h2><p className="mt-6 max-w-3xl text-[16px] leading-[1.85] text-[#536B85]">{note.body}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[24px] border border-[#CBE5FA] bg-[#F0F8FF] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#2664B3]">Product release notes</p>
            <p className="mt-3 max-w-3xl text-[16px] leading-[1.85] text-[#536B85]">
              Product-specific release notes for SpineWorkspace are published on the product website.
            </p>
            <a href="https://spineworkspace.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#225FAB] hover:underline">
              Visit the product website <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
