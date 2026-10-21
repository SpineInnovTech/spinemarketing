import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Network, ShieldCheck, UsersRound, Waypoints } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { PageHero } from "@/components/marketing/page-hero";
import { EXPLORE_SPINEWORKSPACE_LABEL, PRODUCT_SITE_URL } from "@/lib/product-site";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: { absolute: "Technology Portfolio | Spine InnovTech" },
  description: "Explore the Spine InnovTech technology portfolio: the SpineWorkspace product, Spine Fabric, Spine Twin and governed execution architecture.",
  alternates: { canonical: "/portfolio" },
};

const work = [
  {
    icon: UsersRound,
    type: "Flagship product",
    title: "SpineWorkspace",
    body: "A business-context workspace for people and AI to understand the business, share work and move goals forward together.",
    href: "/product",
    external: false,
  },
  {
    icon: Network,
    type: "Context foundation",
    title: "Spine Fabric",
    body: "The context, relationship, signal and continuity fabric designed to keep shared work grounded in evidence and appropriate access.",
    href: "/platform/spine-fabric",
    external: false,
  },
  {
    icon: Waypoints,
    type: "AI counterpart",
    title: "Spine Twin",
    body: "A context-aware AI counterpart for collecting relevant information, preparing work and proposing authorized next steps.",
    href: "/twin",
    external: false,
  },
  {
    icon: ShieldCheck,
    type: "Governed execution",
    title: "Spine Runtime",
    body: "The controls that separate discovery, proposals, authority, execution, observation and reconciliation.",
    href: "/governance",
    external: false,
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", url: absoluteUrl("/") }, { name: "Portfolio", url: absoluteUrl("/portfolio") }]} />
      <Header />
      <main id="main">
        <PageHero
          badge="Spine InnovTech / Portfolio"
          headline="One direction. Connected capabilities."
          subhead="Our portfolio is built around SpineWorkspace. The elements below describe an integrated product architecture, not a list of separately purchasable products or verified customer implementations."
          primaryCta={{ label: EXPLORE_SPINEWORKSPACE_LABEL, href: PRODUCT_SITE_URL }}
          secondaryCta={{ label: "Platform architecture", href: "/platform" }}
        />
        <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-5 md:grid-cols-2">
            {work.map(({ icon: Icon, type, title, body, href, external }, index) => (
              <article key={title} className="flex flex-col rounded-[26px] border border-[#D8E4F3] bg-white p-8 transition-colors hover:border-[#A0BDEA] sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F2FF] text-[#235EAE]"><Icon className="h-6 w-6" aria-hidden /></span>
                  <span className="font-mono text-xs text-[#6A8FC5]">0{index + 1}</span>
                </div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[.2em] text-[#386DA9]">{type}</p>
                <h2 className="mt-4 text-[length:min(30px,var(--marketing-heading-size))] font-semibold tracking-[-.05em] text-[#112F59]">{title}</h2>
                <p className="mt-5 flex-1 text-[16px] leading-[1.85] text-[#536A85]">{body}</p>
                {external ? (
                  <a href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5EA8] hover:underline">Explore {title} <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
                ) : (
                  <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5EA8] hover:underline">Learn about {title} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
