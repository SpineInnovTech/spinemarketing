import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Network, ShieldCheck, UsersRound, Waypoints } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { PageHero } from "@/components/marketing/page-hero";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: { absolute: "Technology Portfolio | Spine InnovTech" },
  description: "Explore the Spine InnovTech technology portfolio: the SpineWorkspace product, Spine Fabric, Spine Twin and controlled execution.",
  alternates: { canonical: "/portfolio" },
};

const work = [
  {
    icon: UsersRound,
    type: "Flagship product",
    title: "SpineWorkspace",
    body: "A business-context workspace for people and AI to understand the business, share work and move goals forward together.",
    href: "/spine-workspace",
    external: false,
  },
  {
    icon: Network,
    type: "Context foundation",
    title: "Spine Fabric",
    body: "The part that keeps shared work grounded in evidence and the right access, by connecting records, how they relate, signals and history.",
    href: "/platform/spine-fabric",
    external: false,
  },
  {
    icon: Waypoints,
    type: "AI assistant",
    title: "Spine Twin",
    body: "The AI assistant that gathers the right information, prepares work and suggests next steps for a person to approve.",
    href: "/twin",
    external: false,
  },
  {
    icon: ShieldCheck,
    type: "Controlled execution",
    title: "Approved action",
    body: "The controls that keep each step separate: looking into things, proposing, approving, acting, and checking the result.",
    href: "/trust",
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
          subhead="Our portfolio is built around SpineWorkspace. The pieces below are parts of one product, not a list of separately purchasable products, and not verified customer results."
          primaryCta={{ label: "Explore SpineWorkspace", href: "/spine-workspace" }}
          secondaryCta={{ label: "How it is built", href: "/platform" }}
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
