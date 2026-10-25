"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";

type ResourceLink = {
  title: string;
  desc: string;
  href: string;
  cta: string;
  external?: boolean;
};

// Reading: perspectives published on this corporate site.
const reading: ResourceLink[] = [
  {
    title: "Software is connected. Business understanding is still fragmented.",
    desc: "Why moving information between applications still leaves people to reconstruct context.",
    href: "/insights/connected-software-shared-understanding",
    cta: "Read the perspective",
  },
  {
    title: "Connection is not permission.",
    desc: "The boundary between discovering a capability and authorizing its use.",
    href: "/insights/connection-and-authority",
    cta: "Read the perspective",
  },
  {
    title: "Work should retain its history.",
    desc: "What continuity preserves as work moves between people, systems and AI.",
    href: "/insights/work-continuity",
    cta: "Read the perspective",
  },
  {
    title: "Insights",
    desc: "All perspectives on context, authority and connected work.",
    href: "/insights",
    cta: "Browse all insights",
  },
];

// Understand: how we think about the technology and our responsibilities.
const understand: ResourceLink[] = [
  {
    title: "Trust & governance",
    desc: "Who can see what, who can act, where information came from, and the results. Design promises, not deployed certifications.",
    href: "/trust",
    cta: "Read the approach",
  },
  {
    title: "Responsible AI",
    desc: "Evidence, clear limits on what AI may do, reviews that mean something, and keeping memory areas separate.",
    href: "/responsible-ai",
    cta: "Read the approach",
  },
  {
    title: "About SpineWorkspace",
    desc: "Our flagship product, explained in company voice.",
    href: "/spine-workspace",
    cta: "Explore the product page",
  },
];

// Explore: directories and demonstrations on this site.
const explore: ResourceLink[] = [
  {
    title: "Technology portfolio",
    desc: "Example workflows and how it is built. Demonstrations, not customer results.",
    href: "/portfolio",
    cta: "View the portfolio",
  },
  {
    title: "Site map",
    desc: "The full directory of corporate pages.",
    href: "/site-map",
    cta: "Open the site map",
  },
];

const productGuides: ResourceLink = {
  title: "Product guides & getting started",
  desc: "Detailed product demonstrations, setup and getting started live on the product website.",
  href: "https://spineworkspace.com",
  cta: "Visit spineworkspace.com",
  external: true,
};

function ResourceCard({ link }: { link: ResourceLink }) {
  const body = (
    <>
      <h3 className="text-[length:min(19px,var(--marketing-body-size))] font-semibold tracking-[-0.02em] text-[#112F59]">
        {link.title}
      </h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-[1.65] text-[#536A85]">{link.desc}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E5EA8]">
        {link.cta}
        {link.external ? (
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        ) : (
          <ArrowRight className="h-4 w-4" aria-hidden />
        )}
      </span>
    </>
  );

  const className =
    "flex h-full flex-col rounded-[22px] border border-[#D8E4F3] bg-white p-7 transition-colors hover:border-[#A0BDEA]";

  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {body}
    </Link>
  );
}

function ResourceSection({
  icon: Icon,
  eyebrow,
  heading,
  intro,
  links,
}: {
  icon: typeof Network;
  eyebrow: string;
  heading: string;
  intro: string;
  links: ResourceLink[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F2FF] text-[#235EAE]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#386DA9]">{eyebrow}</p>
      </div>
      <h2 className="mt-5 text-[length:min(28px,var(--marketing-heading-size))] font-semibold tracking-[-0.04em] text-[#112F59]">
        {heading}
      </h2>
      <p className="mt-3 max-w-2xl text-[16px] leading-[1.8] text-[#536A85]">{intro}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <ResourceCard key={link.href} link={link} />
        ))}
      </div>
    </div>
  );
}

export function ResourcesContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="Spine InnovTech / Resources"
        headline="Read, understand, explore."
        subhead="A guide to the thinking, the technology approach and the demonstrations on this corporate site. Detailed product guides and getting started live on the product website."
        primaryCta={{ label: "Read our insights", href: "/insights" }}
        secondaryCta={{ label: "Technology overview", href: "/platform" }}
      />

      <section className="mx-auto max-w-[1220px] space-y-20 px-5 py-24 sm:px-8 lg:space-y-24 lg:py-32">
        <ResourceSection
          icon={BookOpen}
          eyebrow="Read"
          heading="Perspectives from our team"
          intro="How we think about context, authority and connected business work."
          links={reading}
        />

        <ResourceSection
          icon={ShieldCheck}
          eyebrow="Understand"
          heading="Our technology approach"
          intro="The engineering choices behind the work, and the responsibilities that guide them."
          links={understand}
        />

        <ResourceSection
          icon={Layers3}
          eyebrow="Explore"
          heading="Directories and demonstrations"
          intro="Where to find the full picture of what we build and publish."
          links={explore}
        />

        <div className="rounded-[26px] border border-[#CBE5FA] bg-[#F0F8FF] p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#235EAE]">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#386DA9]">Product website</p>
          </div>
          <h2 className="mt-5 text-[length:min(26px,var(--marketing-heading-size))] font-semibold tracking-[-0.04em] text-[#112F59]">
            {productGuides.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.8] text-[#4E607A]">{productGuides.desc}</p>
          <a
            href={productGuides.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#006FE8] bg-white px-6 py-3 text-sm font-semibold text-[#082B5E] transition-colors hover:bg-[#EBF7FF]"
          >
            {productGuides.cta}
            <ArrowUpRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
