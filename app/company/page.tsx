import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Company — Spine InnovTech",
  description: "Meet Spine InnovTech, the technology company behind SpineWorkspace, and learn why we build for the work between business systems.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Company — Spine InnovTech",
    description: "Meet Spine InnovTech, the technology company behind SpineWorkspace, and learn why we build for the work between business systems.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
};

const beliefs = [
  { n: "01", title: "Context is a business capability.", text: "Meaning emerges from relationships between goals, people, systems, events, decisions, and work. Software should help reveal those relationships." },
  { n: "02", title: "AI needs the business, not just a prompt.", text: "Useful intelligence depends on timely context, provenance, permissions, and an understanding of the work already underway." },
  { n: "03", title: "Connection does not equal authority.", text: "A tool being available never means an agent or person is authorized to use it. Approval and scope belong in the architecture." },
  { n: "04", title: "Work deserves continuity.", text: "A team should be able to carry forward a decision, handoff, and verified outcome without reconstructing the history every time." },
];

const pursuits = [
  ["Business context", "Connect the people, goals, relationships, events, evidence, and outcomes that make business work understandable."],
  ["Intelligent workspaces", "Create relevant work surfaces for humans and AI around their responsibilities and authorized capabilities."],
  ["Governed AI", "Design accountable paths from context gathering and proposals to authorization, execution, and verification."],
  ["Connected ecosystems", "Work with existing applications, hosts, tools, and connectors rather than forcing businesses into a new isolated silo."],
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-[#111B30]">
      <Header />
      <main id="main">
        <PageHero
          badge="About the company / Spine InnovTech"
          headline="We build for the work between systems."
          subhead="Spine InnovTech is a technology company focused on a persistent business problem: the information needed to act lives across many systems, while responsibility for understanding it falls on people. We develop the foundation for that understanding to remain connected, governed and useful as work moves between people, teams and AI environments."
          primaryCta={{ label: "Explore our technology", href: "/platform" }}
          secondaryCta={{ label: "Talk to us", href: "/contact" }}
        />

        <section id="our-story" className="scroll-mt-24 mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
          <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">OUR STARTING POINT</p>
          <h2 className="mt-5 max-w-[820px] text-[length:min(clamp(2.5rem,4.6vw,4.6rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.06em]">The experience behind the company.</h2>
          <div className="mt-8 max-w-[760px] space-y-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">
            <p>Before founding Spine InnovTech, our founder worked on an $8 million renewal that was already at risk, with no reliable account history.</p>
            <p>Connecting Slack, email, the MuleSoft connector and multiple Salesforce connectors through authorized surfaces revealed the underlying problem. The account was saved.</p>
            <p>The experience exposed a recurring challenge: the information existed, but someone had to assemble its meaning before the team could act.</p>
            <p>It also raised the question behind Spine InnovTech. How could the understanding built during that work remain available when the account changed hands, the next issue emerged or a different AI session began?</p>
            <p className="font-medium text-[#1A355B]">The lasting need was continuous, governed context. That is the foundation we set out to build.</p>
          </div>
        </section>

        <section id="founder" className="scroll-mt-24 bg-[#F0F8FF] py-24 lg:py-32 innovtech-reference-surface">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">FOUNDER</p>
            <h3 className="mt-5 text-[length:min(clamp(2rem,3.4vw,3.4rem),var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-.05em] text-[#052858]">Nirmal Prince J</h3>
            <p className="mt-3 text-[length:min(18px,var(--marketing-body-size))] font-semibold text-[#2463C2]">Founder &amp; Chief Executive Officer</p>
            <div className="mt-8 max-w-[760px] space-y-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">
              <p>Nirmal&apos;s background spans enterprise integration architecture and customer-facing work, including experience with MuleSoft and Salesforce ecosystems.</p>
              <p>That experience informs Spine InnovTech&apos;s focus on preserving the meaning of business work, giving people and AI a common basis for understanding it, and keeping authority explicit.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24 lg:py-32">
          <div><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">OUR PURPOSE</p><p className="mt-5 max-w-[280px] text-sm leading-7 text-[#5A6D86]">Help people and AI understand the business they are working in.</p></div>
          <div>
            <h2 className="text-[length:min(clamp(2.5rem,4.8vw,4.6rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.06em]">The next big challenge is not connecting another application.</h2>
            <p className="mt-8 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">A useful business system needs more than access to information. It needs to establish what a record refers to, how it relates to other evidence, who is responsible and which decisions are already in motion.</p>
            <p className="mt-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">Our work began with a recurring observation from enterprise integration and customer-facing operations: moving information between applications does not automatically preserve its meaning. A support escalation might connect to a customer commitment; that commitment might depend on a technical change; the technical change might affect an account goal discussed in a different system.</p>
            <p className="mt-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">The connections matter because someone must decide what to do next. We make that context available where work happens, with clear boundaries around access, authority and accountability.</p>
            <p className="mt-5 text-[length:min(18px,var(--marketing-body-size))] font-medium leading-[1.9] text-[#1A355B]">We want people to spend more of their time exercising judgment and moving work forward, with less effort spent reconstructing its history.</p>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-4 px-5 sm:px-8 lg:grid-cols-2">
            <div className="rounded-[26px] bg-[#E9F1FC] p-8 sm:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#2463C2]">OUR VISION</p>
              <h2 className="mt-6 max-w-[490px] text-[length:min(clamp(2rem,3.3vw,3.5rem),var(--marketing-heading-size))] font-semibold leading-[1.16] tracking-[-.05em]">A world where business context moves with the work.</h2>
              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#4E6683]">People and AI should understand the same business reality, work from their appropriate authority, and build on what has already been learned and verified.</p>
            </div>
            <div className="rounded-[26px] bg-[#0D2753] p-8 text-white sm:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#9DBEFF]">OUR MISSION</p>
              <h2 className="mt-6 max-w-[490px] text-[length:min(clamp(2rem,3.3vw,3.5rem),var(--marketing-heading-size))] font-semibold leading-[1.16] tracking-[-.05em]">Make connected intelligence usable and accountable.</h2>
              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#C1D0E7]">Build intelligent, governed work environments that connect business context, human judgment, AI capability, authorized action, and evidence-based outcomes.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
          <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">WHAT WE WORK ON</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[780px] text-[length:min(clamp(2.5rem,4.4vw,4.4rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.055em]">From scattered systems to shared understanding.</h2>
            <Link href="/platform" className="inline-flex items-center gap-2 border-b border-[#245FC8] pb-2 text-sm font-semibold text-[#245FC8]">Explore technology <ArrowUpRight className="h-4 w-4"/></Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {pursuits.map(([title,body],i)=><div key={title} className="rounded-[22px] border border-[#D6E3F2] bg-white p-7 sm:p-9"><span className="font-mono text-xs text-[#6688BA]">0{i+1}</span><h3 className="mt-8 text-[length:min(24px,var(--marketing-card-size))] font-semibold tracking-[-.04em]">{title}</h3><p className="mt-4 max-w-[500px] text-[15px] leading-[1.8] text-[#586C84]">{body}</p></div>)}
          </div>
        </section>

        <section id="principles" className="bg-[#F0F8FF] py-24 text-[#052858] lg:py-32 innovtech-reference-surface">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#4C5C73]">OUR PRINCIPLES</p>
            <h2 className="mt-6 max-w-[800px] text-[length:min(clamp(2.5rem,4.6vw,4.8rem),var(--marketing-heading-size))] font-semibold leading-[1.08] tracking-[-.055em]">Useful AI starts with responsibility.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[22px] border border-white/15 bg-white/10 md:grid-cols-2">
              {beliefs.map((b)=><div key={b.n} className="bg-white p-8 sm:p-10"><p className="font-mono text-xs text-[#4C5C73]">{b.n} / PRINCIPLE</p><h3 className="mt-6 text-[length:min(25px,var(--marketing-card-size))] font-semibold tracking-[-.04em]">{b.title}</h3><p className="mt-4 max-w-[490px] text-[15px] leading-[1.85] text-[#4C5C73]">{b.text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <div><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">OUR FLAGSHIP</p><h2 className="mt-5 text-[length:min(clamp(2.6rem,4.5vw,4.7rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.06em]">One foundation, expressed through a working product.</h2></div>
            <div><p className="text-[length:min(20px,var(--marketing-body-size))] font-medium leading-[1.7] text-[#253F62]">Spine InnovTech is the company behind SpineWorkspace.</p><p className="mt-5 text-[16px] leading-[1.85] text-[#556982]">Our technology work centers on business context, governed capabilities and continuity. SpineWorkspace brings those ideas together in a shared working environment for people and AI. The company develops the foundation and its engineering principles; the product makes that foundation usable in everyday work.</p><Link href="/product" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0D2B59] px-6 text-sm font-semibold text-white transition hover:bg-[#2854A0]">Meet SpineWorkspace <ArrowUpRight className="h-4 w-4"/></Link></div>
          </div>
        </section>

        <section className="bg-[#E9F1FB] py-20">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-8 px-5 sm:px-8"><div><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">LET'S CONNECT</p><h2 className="mt-4 max-w-[690px] text-[length:min(clamp(2.4rem,4vw,4rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.05em]">Build a more connected way to work.</h2><p className="mt-5 max-w-[610px] text-[16px] leading-[1.8] text-[#536780]">Whether you're exploring the product, an integration, a partnership, or the ideas behind it, we'd like to hear from you.</p></div><Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0D2B59] px-6 text-sm font-semibold text-white transition hover:bg-[#2854A0]">Contact Spine InnovTech <ArrowUpRight className="h-4 w-4"/></Link></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
