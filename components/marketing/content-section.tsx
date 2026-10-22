"use client";

import Link from "next/link";
import { Section } from "./section";
import { FeatureGrid } from "./feature-grid";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import type { ContentSectionCopy } from "@/lib/site-copy";

const GLOSS: Record<string, string> = {
  Goals: "The business outcomes people and their Twin are trying to move.",
  KPIs: "Measures attached to those goals, so progress stays visible.",
  Customers: "The accounts the work is about.",
  Relationships: "The people and organizations connected to that work.",
  Work: "The active piece of work, with its status and next step.",
  Decisions: "Choices already made, and ones still waiting on a person.",
  Memory: "Context that stays with the work across sessions and handoffs.",
  Evidence: "Records linked back to the source system they came from.",
  Outcomes: "Results observed after the work, then reconciled with the source.",
  History: "What already happened, kept with the work so it is not rebuilt.",
  "Personal memory": "Stays with the person. It is not shared organizational context.",
  "Session memory": "Stays with that sitting.",
  "Organizational memory": "Shared business context for the organization.",
  Context: "People and AI work from the same governed picture of the work.",
  Accountability: "A person accepts consequential steps. Proposals stay proposals until then.",
  Continuity: "The business story survives sessions, hosts, and handoffs.",
  "Adaptive capability": "The workspace uses the host and the role in front of the work.",
};

type Aside = { kicker: string; title: string; rows: { term: string; detail: string }[] };

/** Structured readings of approved section copy. No new metrics or proof claims. */
const ASIDES: Record<string, Aside> = {
  "A workspace for the business, not another tool in the stack.": {
    kicker: "Above the tools",
    title: "Truth stays in source systems",
    rows: [
      { term: "Sits above", detail: "Existing systems, including CRM, email, and project tools." },
      { term: "Brings together", detail: "Authoritative truth and the context for the current task." },
      { term: "Stays in place", detail: "SpineWorkspace does not replace the tools already in the stack." },
    ],
  },
  "The record and the evidence first. Then a proposal.": {
    kicker: "Before a response",
    title: "What the Twin uses",
    rows: [
      { term: "Truth", detail: "Authoritative records the person is allowed to use." },
      { term: "Context", detail: "Goals, active work, customer history, prior decisions, and evidence for this task." },
      { term: "Proposal", detail: "Stays a proposal until a person reviews it." },
    ],
  },
  "One counterpart. No model catalogue.": {
    kicker: "What you see",
    title: "Twin",
    rows: [
      { term: "One counterpart", detail: "Twin is the user-facing AI counterpart." },
      { term: "What is already open", detail: "Twin uses the tools already open for this task." },
      { term: "Not in the product", detail: "No second chat product and no model picker." },
    ],
  },
  "Without truth and context together, everyone rebuilds the story.": {
    kicker: "The gap",
    title: "Starting from zero",
    rows: [
      { term: "Rebuilds happen", detail: "At every tool handoff, AI session, and new team member." },
      { term: "Together", detail: "The record and the context for this task let people and AI work without re-explaining everything." },
    ],
  },
  "One piece of Work.": {
    kicker: "Attached to the work",
    title: "Customer onboarding",
    rows: [
      { term: "The work", detail: "Customer onboarding." },
      { term: "Stays with it", detail: "The goal, the evidence, and the status." },
    ],
  },
  "What stays with the tools you already use.": {
    kicker: "Already open",
    title: "The tools stay themselves",
    rows: [
      { term: "Already in use", detail: "Tools, files, conversations, and workflows already open for that person." },
      { term: "When connected", detail: "SpineWorkspace connects to them. It does not replace them." },
    ],
  },
  "Work continues across the tools you already use.": {
    kicker: "What carries",
    title: "The story continues",
    rows: [
      { term: "What travels", detail: "The record, the evidence, and earlier decisions." },
      { term: "Continue", detail: "Work started in one tool can continue in another without rebuilding the story." },
    ],
  },
  "Authority is a person, not a model.": {
    kicker: "Who decides",
    title: "Availability is not authority",
    rows: [
      { term: "Twin", detail: "Can propose." },
      { term: "A person", detail: "With the right scope accepts or rejects the proposal. The source system stays the record." },
    ],
  },
  "Pending review is the default.": {
    kicker: "Until accepted",
    title: "A proposal stays pending",
    rows: [
      { term: "Default", detail: "Pending until someone with authority accepts it." },
      { term: "Evidence", detail: "Stays linked to the source system." },
    ],
  },
  "Every tool handoff splits truth from context.": {
    kicker: "What breaks",
    title: "The story gets rebuilt",
    rows: [
      { term: "Across tools", detail: "CRM, email, chat, and project tools." },
      { term: "People and AI reconstruct", detail: "What happened, why it matters, and what comes next." },
    ],
  },
  "Building around shared business reality.": {
    kicker: "Spine InnovTech",
    title: "Same governed context",
    rows: [
      { term: "Built so", detail: "People and AI can work from the same governed business context." },
      { term: "Using", detail: "The tools a team already runs." },
    ],
  },
  "Governance model.": {
    kicker: "Boundary",
    title: "Humans govern",
    rows: [
      { term: "People", detail: "Govern the business." },
      { term: "AI", detail: "Assists within authority boundaries." },
      { term: "Availability", detail: "Does not grant authority to use a capability." },
    ],
  },
  "Coworker gathers truth and context. Twin prepares the proposal.": {
    kicker: "Before Twin helps",
    title: "Truth, context, then a proposal",
    rows: [
      { term: "Spine Coworker", detail: "Gathers the truth and context this person may use for this workflow." },
      { term: "Spine Twin", detail: "Prepares a proposal. The proposal is not the record." },
      { term: "A person", detail: "Reviews the proposal." },
      { term: "Model selection", detail: "Stays behind Twin. There is no model catalogue and no second chat product." },
    ],
  },
  "Keep the record, the evidence, and the person apart.": {
    kicker: "The record",
    title: "Distinct memory scopes",
    rows: [
      { term: "Business Context", detail: "Where context for the current task is assembled. Not the record." },
      { term: "Personal memory", detail: "Stays with the person." },
      { term: "Session memory", detail: "Stays with that sitting." },
      { term: "Organizational memory", detail: "Shared context for the organization. Not blended with the other scopes." },
      { term: "Source systems", detail: "Retain authority over their records." },
    ],
  },
  "Adapt the environment around the work.": {
    kicker: "The view for this role",
    title: "The view follows the role",
    rows: [
      { term: "Around the work", detail: "The workspace changes around the person, the task, and the role." },
      { term: "One piece of Work", detail: "Stays the same." },
      { term: "The view", detail: "Follows who is looking at it." },
    ],
  },
  "A person still decides.": {
    kicker: "Status",
    title: "Awaiting review",
    rows: [
      { term: "Stays", detail: "Awaiting review." },
      { term: "Until", detail: "Someone with authority accepts the step." },
    ],
  },
  "Work continues across hosts.": {
    kicker: "What carries",
    title: "The business story",
    rows: [
      { term: "Spine carries", detail: "Context, Work, evidence, and checkpoints." },
      { term: "Resume", detail: "An objective started in one host can continue in another without losing the business story." },
    ],
  },
  "Execution controls.": {
    kicker: "Limits",
    title: "Scoped execution",
    rows: [
      { term: "Consequential actions", detail: "Require explicit approval." },
      { term: "Scope", detail: "Keeps AI inside authorized boundaries." },
    ],
  },
};

type Layout = "split" | "list" | "claim" | "split-reverse" | "terms" | "term-rows" | "cards" | "card-list" | "paired";

const PROSE: Layout[] = ["split", "list", "claim", "split-reverse"];

function planLayouts(sections: ContentSectionCopy[]): Layout[] {
  const layouts: Layout[] = [];
  let proseStep = 0;
  let prev: Layout | null = null;

  for (const section of sections) {
    let layout: Layout;
    if (section.comparison) {
      layout = "paired";
      proseStep = 0;
    } else if (section.cards?.length) {
      layout = prev === "cards" ? "card-list" : "cards";
      proseStep = 0;
    } else if (section.items?.length) {
      layout = section.body || prev === "terms" ? "term-rows" : "terms";
      proseStep = 0;
    } else {
      layout = PROSE[proseStep % PROSE.length];
      if ((layout === "split" || layout === "split-reverse") && !ASIDES[section.headline]) {
        layout = "list";
      }
      proseStep += 1;
    }
    layouts.push(layout);
    prev = layout;
  }

  return layouts;
}

function Heading({ label, headline, className = "" }: { label?: string; headline: string; className?: string }) {
  return (
    <div className={className}>
      {label && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
          {label}
        </p>
      )}
      <h2 className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(34px,var(--marketing-heading-size))]">{headline}</h2>
    </div>
  );
}

function Body({ children }: { children: string }) {
  return <p className="mt-4 text-[16px] leading-[1.65] text-[#33465B]">{children}</p>;
}

function EvidencePanel({ aside, raised = false }: { aside: Aside; raised?: boolean }) {
  return (
    <BlurFade delay={0.08} inView>
      <aside
        className={`relative overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white p-6 lg:p-7 ${raised ? "shadow-[0_20px_50px_-12px_rgba(3,45,96,0.12)] lg:-mb-8 lg:-mr-6 lg:translate-y-6" : "shadow-sm"}`}
        aria-label={aside.title}
      >
        <BorderBeam size={180} duration={14} />
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8]">{aside.kicker}</p>
        <h3 className="mt-2 text-[length:min(20px,var(--marketing-card-size))] font-semibold tracking-[-0.02em] text-[#032D60]">{aside.title}</h3>
        <dl className="mt-6 space-y-4">
          {aside.rows.map((row) => (
            <div key={row.term} className="border-t border-[#E5EFFA] pt-4 first:border-t-0 first:pt-0">
              <dt className="text-[13px] font-semibold text-[#032D60]">{row.term}</dt>
              <dd className="mt-1 text-[14px] leading-[1.55] text-[#33465B]">{row.detail}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </BlurFade>
  );
}

function Split({ section, reverse, raisedAside = true }: { section: ContentSectionCopy; reverse?: boolean; raisedAside?: boolean }) {
  const aside = ASIDES[section.headline];
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : undefined}>
        <Heading label={section.label} headline={section.headline} />
        {section.body && <Body>{section.body}</Body>}
      </div>
      {aside && (
        <div className={reverse ? "lg:order-1" : undefined}>
          <EvidencePanel aside={aside} raised={raisedAside} />
        </div>
      )}
    </div>
  );
}

function SentenceList({ section }: { section: ContentSectionCopy }) {
  const sentences = (section.body ?? "")
    .split(/(?<=\.)\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  return (
    <div>
      <Heading label={section.label} headline={section.headline} className="max-w-3xl" />
      <ol className="mt-8 divide-y divide-[#D9E4EF] border-y border-[#D9E4EF]">
        {sentences.map((sentence, index) => (
          <li key={sentence} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_1fr] sm:items-baseline sm:gap-6">
            <span className="font-mono text-[13px] font-semibold tabular-nums text-[#006FE8]">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-[16px] leading-[1.65] text-[#33465B]">{sentence}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Claim({ section }: { section: ContentSectionCopy }) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
      <Heading label={section.label} headline={section.headline} />
      {section.body && (
        <p className="border-t border-[#D9E4EF] pt-6 text-[16px] leading-[1.65] text-[#33465B] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
          {section.body}
        </p>
      )}
    </div>
  );
}

function TermGrid({ section, cellClass, raised = false }: { section: ContentSectionCopy; cellClass: string; raised?: boolean }) {
  const grid = (
    <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#CBE5FA] bg-[#CBE5FA] sm:grid-cols-2 lg:grid-cols-3">
      {(section.items ?? []).map((item) => (
        <div key={item} className={`p-5 transition-colors hover:bg-[#EBF7FF] ${cellClass}`}>
          <dt className="text-[15px] font-semibold text-[#032D60]">{item}</dt>
          {GLOSS[item] && <dd className="mt-1.5 text-[14px] leading-[1.55] text-[#33465B]">{GLOSS[item]}</dd>}
        </div>
      ))}
    </dl>
  );

  return (
    <div>
      <Heading label={section.label} headline={section.headline} className="max-w-2xl" />
      {section.body && <div className="max-w-2xl"><Body>{section.body}</Body></div>}
      {raised ? (
        <div className="relative z-10 -mt-4 overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white p-6 shadow-[0_18px_48px_rgba(0,111,232,0.08)] md:-mt-8 md:p-8">
          <BorderBeam size={200} duration={16} />
          {grid}
        </div>
      ) : (
        grid
      )}
    </div>
  );
}

function TermRows({ section }: { section: ContentSectionCopy }) {
  return (
    <div>
      <Heading label={section.label} headline={section.headline} className="max-w-3xl" />
      {section.body && <div className="max-w-3xl"><Body>{section.body}</Body></div>}
      <dl className="mt-8 divide-y divide-[#D6E8F8] border-y border-[#D6E8F8]">
        {(section.items ?? []).map((item) => (
          <div key={item} className="grid gap-1 py-4 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-8 sm:py-5">
            <dt className="text-[15px] font-semibold text-[#032D60]">{item}</dt>
            {GLOSS[item] && <dd className="text-[15px] leading-[1.55] text-[#33465B]">{GLOSS[item]}</dd>}
          </div>
        ))}
      </dl>
    </div>
  );
}

function CardList({ cards }: { cards: NonNullable<ContentSectionCopy["cards"]> }) {
  return (
    <ul className="divide-y divide-[#D6E8F8] border-y border-[#D6E8F8]">
      {cards.map((card) => {
        const row = (
          <span className="grid gap-2 py-5 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-8">
            <span className="text-[16px] font-semibold text-[#032D60]">{card.title}</span>
            <span className="text-[15px] leading-[1.55] text-[#33465B]">
              {card.description}
              {card.href && <span className="mt-2 block text-[13px] font-semibold text-[#006FE8]">Learn more →</span>}
            </span>
          </span>
        );
        return (
          <li key={card.title}>
            {card.href ? (
              <Link href={card.href} className="block rounded-sm px-2 transition-colors hover:bg-[#F0F8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]">
                {row}
              </Link>
            ) : (
              row
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Paired({ section }: { section: ContentSectionCopy }) {
  if (!section.comparison) return null;
  const [left, right] = [section.comparison.left, section.comparison.right];
  return (
    <div>
      <Heading label={section.label} headline={section.headline} className="max-w-3xl" />
      {section.body && <div className="max-w-3xl"><Body>{section.body}</Body></div>}
      <div className="relative mt-10 pb-2 md:grid md:grid-cols-2 md:gap-6">
        <MagicCard className="relative z-0 md:ml-6" innerClassName="p-6">
          <h3 className="text-[18px] font-semibold text-[#032D60]">{left.title}</h3>
          <ul className="mt-5 space-y-3">
            {left.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[#33465B]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B85A3]" />
                {item}
              </li>
            ))}
          </ul>
        </MagicCard>
        <div className="relative z-20 -mt-4 overflow-hidden rounded-2xl border border-[#8BC2F7] bg-[#EBF7FF] p-6 shadow-[0_18px_40px_rgba(0,111,232,0.12)] md:mt-8 md:-ml-4 md:mr-6">
          <BorderBeam size={200} duration={12} />
          <h3 className="text-[18px] font-semibold text-[#032D60]">{right.title}</h3>
          <ul className="mt-5 space-y-3">
            {right.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[#33465B]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006FE8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SectionBody({
  section,
  layout,
  muted,
  prevLayout,
}: {
  section: ContentSectionCopy;
  layout: Layout;
  muted: boolean;
  prevLayout: Layout | null;
}) {
  const cellClass = muted ? "bg-white" : "bg-[#F0F8FF]";

  switch (layout) {
    case "split":
      return <Split section={section} raisedAside={prevLayout !== "cards"} />;
    case "split-reverse":
      return <Split section={section} reverse raisedAside={prevLayout !== "cards"} />;
    case "list":
      return <SentenceList section={section} />;
    case "claim":
      return <Claim section={section} />;
    case "terms":
      return <TermGrid section={section} cellClass={cellClass} raised={prevLayout === "split" || prevLayout === "split-reverse"} />;
    case "term-rows":
      return <TermRows section={section} />;
    case "cards":
      return (
        <div className="relative z-10 -mt-6 overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white p-6 shadow-[0_18px_48px_rgba(0,111,232,0.08)] md:-mt-10 md:p-8">
          <BorderBeam size={240} duration={16} />
          <Heading label={section.label} headline={section.headline} className="max-w-3xl" />
          {section.body && <div className="max-w-3xl"><Body>{section.body}</Body></div>}
          {section.cards && (
            <div className="mt-8">
              <FeatureGrid cards={section.cards} columns={section.cards.length === 5 ? 3 : section.cards.length === 4 ? 2 : 3} />
            </div>
          )}
        </div>
      );
    case "card-list":
      return (
        <div>
          <Heading label={section.label} headline={section.headline} className="max-w-3xl" />
          {section.body && <div className="max-w-3xl"><Body>{section.body}</Body></div>}
          {section.cards && (
            <div className="mt-8">
              <CardList cards={section.cards} />
            </div>
          )}
        </div>
      );
    case "paired":
      return <Paired section={section} />;
    default:
      return null;
  }
}

export function ContentSections({ sections }: { sections: ContentSectionCopy[] }) {
  const layouts = planLayouts(sections);

  return (
    <>
      {sections.map((section, index) => {
        const layout = layouts[index];
        const bleed = layouts[index - 1] === "cards";
        const className = [section.id ? "scroll-mt-24" : "", bleed ? "border-t-0" : ""].filter(Boolean).join(" ");
        return (
          <Section
            key={`${section.headline}-${index}`}
            id={section.id}
            className={className || undefined}
            variant={bleed ? "dark" : index % 2 === 1 ? "muted" : "dark"}
          >
            <SectionBody section={section} layout={layout} muted={index % 2 === 1} prevLayout={index > 0 ? layouts[index - 1] : null} />
          </Section>
        );
      })}
    </>
  );
}
