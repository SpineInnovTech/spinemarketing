"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Database, GitBranch, History, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";

const foundations = [
  { icon: GitBranch, title: "Relationships", body: "Connect people, accounts, goals, events, evidence, decisions, tasks and outcomes. See how a commitment relates to a customer, or how a decision changes the work toward a goal." },
  { icon: Database, title: "Provenance", body: "Distinguish observed records, supporting evidence, interpretations, drafts and verified outcomes. Sources, freshness, conflicts and missing information remain part of the business picture." },
  { icon: ShieldCheck, title: "Authority", body: "Context follows identity, role, policy and authorized scope. Knowing about a situation does not independently grant permission to act on it." },
  { icon: History, title: "Continuity", body: "Carry relevant history and earlier decisions into a new session or handoff. People and their Twin can continue the work from its existing context." },
];

const examples = [
  { title: "Operations", context: "A delayed handoff", detail: "Relate the customer commitment, delivery dependency, responsible team and decision history before preparing the next step." },
  { title: "Finance", context: "An invoice exception", detail: "Bring together the invoice record, contract terms, delivery evidence and approval history for the person reviewing the exception." },
  { title: "Product & engineering", context: "A release decision", detail: "Connect the release goal, open issues, customer impact and previous decisions so a team can understand the tradeoff." },
];

export function SpineFabricContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="Spine Fabric · The contextual foundation"
        headline="A business is more than its records."
        subhead="Spine Fabric is the contextual foundation behind our work. It relates how people, goals, records, evidence, decisions and work connect across the tools a business already uses, while those tools keep the record."
        primaryCta={{ label: "Technology overview", href: "/platform" }}
        secondaryCta={{ label: "Explore SpineWorkspace", href: "https://spineworkspace.com" }}
        art={
          <figure>
            <Image src="/images/corporate-architecture.png" width={1774} height={887} priority alt="Concept illustration of Fabric, Workbench, Twin and Runtime within one connected business architecture" className="h-auto w-full rounded-xl" />
            <figcaption className="mt-4 text-xs leading-relaxed text-[#4E607A]">Concept illustration. Fabric supplies shared context within the wider Spine architecture.</figcaption>
          </figure>
        }
      />
      <Section variant="muted">
        <SectionHeader align="left" label="The contextual foundation" headline="Relationships, evidence and authority belong together." body="A record tells you what one system knows. Fabric brings the relationships around that record into the context of a goal, responsibility or task." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {foundations.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl border border-[#D6E8F8] bg-white p-7">
              <Icon className="mb-5 h-7 w-7 text-[#006FE8]" aria-hidden />
              <h2 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader align="left" label="Across business functions" headline="The same foundation supports different kinds of work." body="These examples show how connected context can support a decision. Each role starts with its own responsibility and the information it is permitted to use." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {examples.map(({ title, context, detail }) => (
            <article key={title} className="rounded-2xl border border-[#D6E8F8] bg-[#F0F8FF] p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0055B8]">{title}</p>
              <h2 className="mt-4 text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{context}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section variant="muted">
        <SectionHeader align="left" label="Designed to cooperate" headline="Build context around the systems you already use." body="Source systems continue to own their records. Fabric relates authorized information from connected environments, preserving where it came from and why it matters to the current work." />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Connect", "Read the relevant records, events, documents and conversations through authorized connections."],
            ["Relate", "Link information to the right people, entities, goals and work, retaining its source and history."],
            ["Understand", "Bring the permitted context into shared surfaces so people can review a situation and prepare options."],
            ["Continue", "Carry decisions and observed results forward while governed actions remain subject to the appropriate authority."],
          ].map(([title, body], i) => (
            <li key={title} className="rounded-2xl border border-[#D6E8F8] bg-white p-7">
              <p className="text-xs font-bold text-[#0055B8]">0{i + 1}</p>
              <h2 className="mt-3 text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionHeader align="left" label="Keep exploring" headline="See how the foundation fits together." body="Spine Fabric is the detail behind the foundation. Start from the introduction, meet the AI counterpart, or step back to the full architecture." />
        <div className="flex flex-wrap gap-3">
          <Link href="/spine" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
            Spine, in brief <ArrowRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </Link>
          <Link href="/twin" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
            Meet Spine Twin <ArrowRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </Link>
          <Link href="/platform" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
            Technology overview <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/portfolio" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
            See the portfolio <ArrowUpRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
