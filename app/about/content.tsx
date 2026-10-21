import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck, Waypoints } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { EXPLORE_SPINEWORKSPACE_LABEL, PRODUCT_SITE_URL } from "@/lib/product-site";

const principles = [
  {
    number: "01",
    title: "Start with the business question.",
    body: "A record is useful, but its relationship to a customer, goal, decision, signal, or commitment explains why it matters.",
  },
  {
    number: "02",
    title: "Keep existing systems authoritative.",
    body: "An intelligent workspace should make connected work understandable without pretending every source can be replaced by another database.",
  },
  {
    number: "03",
    title: "Make authority visible.",
    body: "Knowing what could be done is different from being allowed to do it. Execution needs clear scope, approval when appropriate, and evidence.",
  },
];

export function AboutContent() {
  return (
    <>
      <PageHero
        badge="Our origin / Spine InnovTech"
        headline="The real gap was never just system integration."
        subhead="Connecting systems makes information available. Helping people understand that information, act with authority and continue work across teams is a different challenge. That is the problem behind Spine InnovTech."
        primaryCta={{ label: "Meet the company", href: "/company" }}
        secondaryCta={{ label: EXPLORE_SPINEWORKSPACE_LABEL, href: PRODUCT_SITE_URL }}
      />

      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Why we began</p>
          <div className="mt-7 h-px w-20 bg-[#2461BC]" aria-hidden />
        </div>
        <div>
          <h2 className="text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#102747]">Integration connected the systems. People still carried the context.</h2>
          <p className="mt-8 text-[length:min(17px,var(--marketing-body-size))] leading-[1.95] text-[#536883]">
            The idea took shape through experience in software engineering, integration architecture and customer-facing enterprise work. To understand one customer or decision, a person often has to move across CRM, support, documents, messages and meetings, reconstructing the same business story repeatedly.
          </p>
          <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] leading-[1.95] text-[#536883]">
            This is not a story about replacing the tools organizations already trust. It is about connecting business context around goals, relationships, work and evidence so that a person or AI counterpart can understand what matters without losing the boundaries that protect the business.
          </p>
          <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.95] text-[#17375F]">
            Our direction is simple: shared business understanding, useful collaboration between humans and AI, and governed paths from intention to verified outcome.
          </p>
        </div>
      </section>

      <section className="bg-[#ECF3FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">The engineering principles</p>
          <h2 className="mt-5 max-w-[780px] text-[length:min(clamp(2.5rem,4.7vw,4.6rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.055em] text-[#0C274E]">Intelligence requires more than access to data.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((point) => (
              <article key={point.number} className="rounded-[24px] border border-[#D7E4F3] bg-white p-8 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
                <span className="font-mono text-xs text-[#5082C8]">{point.number}</span>
                <h3 className="mt-12 text-[length:min(24px,var(--marketing-card-size))] font-semibold tracking-[-.04em] text-[#13365F]">{point.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-[#576C86]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">From vision to product</p>
          <h2 className="mt-6 text-[length:min(clamp(2.4rem,4.4vw,4.4rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.055em] text-[#0C274E]">SpineWorkspace puts the principle to work.</h2>
          <p className="mt-7 text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#536883]">One workspace for humans and AI to understand the business, share the work, and achieve goals together. Spine Fabric, the Workbench, the Twin and Runtime are parts of that integrated direction.</p>
          <a href={PRODUCT_SITE_URL} className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#102F5B] px-6 text-sm font-semibold text-white transition hover:bg-[#2759A0]">
            {EXPLORE_SPINEWORKSPACE_LABEL} <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="grid gap-4 rounded-[26px] bg-[#09244D] p-6 text-white sm:p-9">
          {[
            { icon: GitBranch, title: "Context", body: "Relate goals, customers, signals, work and evidence." },
            { icon: Waypoints, title: "Collaboration", body: "Share the right understanding with people and AI." },
            { icon: ShieldCheck, title: "Governance", body: "Move forward through authorized actions and verified results." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-[#A3C7FF]" aria-hidden />
              <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-[#C5D5EC]">{body}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
