"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
import { proofCards } from "@/lib/site-copy";
import { PageHero } from "./page-hero";
import { ExampleWork, RenewalReviewPanel, RenewalWorkflowNarrative } from "./hero-subjects";
import { IntegrationLogoStrip } from "./integration-logo-strip";
import { EnterpriseButton } from "./enterprise";

const rise = {
  initial: { opacity: 1, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const productModel = [
  {
    name: "SpineWorkspace",
    body: "The renewal and account workspace where people review evidence and decide.",
    href: "/spineworkspace",
  },
  {
    name: "Spine Fabric",
    body: "Authorized connections to CRM, support, inbox, documents, and finance.",
    href: "/platform/spine-fabric",
  },
  {
    name: "Spine Twin",
    body: "Prepares a source-linked proposal when someone asks. A person approves.",
    href: "/twin",
  },
  {
    name: "Spine Platform",
    body: "Shared infrastructure for governed operational workflows.",
    href: "/platform",
  },
];

const renewalInputs = [
  "CRM stage, renewal date, contract value, account owner, and opportunity history",
  "Support volume, escalations, severity, and unresolved incidents",
  "Customer emails, commitments, objections, and stakeholder changes",
  "Usage or delivery signals, where authorized",
  "Invoices, payment state, or contract records, where relevant",
  "Previous account reviews, decisions, and actions",
];

const humanDecisions = [
  "Approve the proposed next action",
  "Edit the action, owner, timing, or rationale",
  "Reject and request more evidence",
  "Escalate to commercial or executive review",
];

const proposalFields = [
  ["Proposed action", "Create a renewal follow-up task"],
  ["Destination", "Connected CRM (system of record)"],
  ["Renewal owner", "Account owner"],
  ["Evidence", "Contract, support ticket, latest customer email"],
  ["Approval", "Required before execution"],
  ["Execution", "Not started until approved"],
];

export function EnterpriseHome() {
  const accountSuccess = PUBLIC_SOLUTIONS.find((s) => s.id === "customer-success");
  const otherSolutions = PUBLIC_SOLUTIONS.filter((s) => s.id !== "customer-success").slice(0, 4);

  return (
    <div className="bg-white text-[#181818]">
      <PageHero
        tone="ice"
        badge="Built for customer-success and revenue teams managing complex renewals"
        headline={"Stop rebuilding the customer story\nbefore every renewal decision."}
        subhead="SpineWorkspace brings CRM activity, support signals, email commitments, documents, and finance context into one evidence-backed renewal proposal—so your team can review, approve, and execute the next step with control."
        principle="Your CRM, support desk, inbox, finance platform, and document store remain the systems of record. SpineWorkspace assembles authorized context around the decision—without becoming another source of truth."
        primaryCta={{ label: "See a renewal decision packet", href: "#renewal-decision-packet" }}
        secondaryCta={{ label: "Book a workflow review", href: "/contact?intent=workflow-review" }}
        art={<RenewalReviewPanel />}
        work={<ExampleWork variant="strip" />}
      />

      {/* 2. Pain */}
      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <motion.div {...rise} className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">The hidden cost</p>
            <h2 className="mt-3 text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[length:min(36px,var(--marketing-heading-size))]">
              Your team should review the decision—not spend half a day reconstructing it.
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              {...rise}
              className="rounded-[20px] border border-[#D9E4EF] bg-white p-8 shadow-[0_24px_50px_rgba(3,45,96,0.08)]"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Before Spine</p>
              <p className="mt-4 text-[16px] leading-[1.75] text-[#33465B]">
                A renewal manager opens Salesforce, searches email, checks support tickets, asks Finance about payment
                status, finds an old commercial document, messages the account owner in Slack, and manually writes a
                status update for the weekly account review.
              </p>
              <ul className="mt-6 space-y-2 text-[14px] font-semibold text-[#032D60]">
                {["Manual account research", "Opinion-led renewal forecast", "Slack escalation", "Spreadsheet save plans"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#526479]" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
            <motion.div
              {...rise}
              className="rounded-[20px] border border-[#0176D3]/30 bg-[#EAF5FC] p-8 shadow-[0_24px_50px_rgba(3,45,96,0.08)]"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">With Spine</p>
              <p className="mt-4 text-[16px] leading-[1.75] text-[#33465B]">
                SpineWorkspace gathers authorized evidence, surfaces unresolved commitments and at-risk signals, creates
                a source-linked proposal, routes it to the accountable reviewer, and records the approved action back in
                the owning system.
              </p>
              <ul className="mt-6 space-y-2 text-[14px] font-semibold text-[#032D60]">
                {[
                  "Evidence-backed decision packet",
                  "Explicit approval before execution",
                  "Traceable next-best action",
                  "CRM stays the system of record",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0176D3]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. First workflow offer */}
      <section id="renewal-decision-packet" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Start here</p>
            <h2 className="mt-3 text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[length:min(36px,var(--marketing-heading-size))]">
              Renewal Decision Workspace
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              A governed workflow for accounts approaching renewal, accounts with risk signals, and accounts requiring
              commercial or executive intervention.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-6 lg:col-span-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Inputs</p>
              <ul className="mt-4 space-y-3 text-[14px] leading-[1.6] text-[#33465B]">
                {renewalInputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#0176D3]/25 bg-white p-6 shadow-[0_18px_48px_rgba(3,45,96,0.08)] lg:col-span-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Output</p>
              <p className="mt-4 text-[15px] leading-[1.7] font-semibold text-[#032D60]">
                An evidence-backed renewal decision packet:
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[#33465B]">
                Account health, key health signals, open customer commitments, risk assessment, recommended next-best
                action, renewal owner, approval state, and execution record—with every claim linked to its source.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-6 lg:col-span-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Human decision</p>
              <ul className="mt-4 space-y-3 text-[14px] font-semibold text-[#032D60]">
                {humanDecisions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0176D3]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <EnterpriseButton href="#renewal-workflow">See the workflow replay</EnterpriseButton>
            <EnterpriseButton href="/proof" variant="secondary">
              View sample decision packet
            </EnterpriseButton>
          </div>
        </div>
      </section>

      {/* 4. Governance */}
      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <motion.div {...rise}>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Governance</p>
            <h2 className="mt-3 text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[length:min(36px,var(--marketing-heading-size))]">
              AI prepares the case. Your team owns the decision.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              SpineWorkspace does not silently alter customer, commercial, or operational records. It gives accountable
              people the evidence, recommendation, and controls required to decide what happens next.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#526479]">
              Before Spine, renewal preparation is manual investigation across Salesforce, Gmail, support tickets,
              contract documents, finance records, and Slack—then a defensible recommendation under time pressure. Spine
              turns that investigation into a governed decision workflow with source links, explicit approval, and
              write-back to the system that owns the record.
            </p>
            <Link href="/governance" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
              See governance details
            </Link>
          </motion.div>
          <dl className="overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_18px_48px_rgba(3,45,96,0.08)]">
            {proposalFields.map(([term, detail]) => (
              <div
                key={term}
                className="grid gap-1 border-b border-[#D9E4EF] px-6 py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="text-[13px] font-semibold text-[#526479]">{term}</dt>
                <dd
                  className={`text-[15px] font-semibold ${detail.includes("Not started") ? "text-[#0176D3]" : "text-[#032D60]"}`}
                >
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. Workflow replay */}
      <section id="renewal-workflow" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Evidence → proposal → approval → execution</p>
            <h2 className="mt-3 text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[length:min(36px,var(--marketing-heading-size))]">
              Prepare the Northstar Labs renewal decision
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              See how authorized context becomes a reviewable proposal, a human decision, and an approved action in the
              CRM—without the AI becoming another system of record.
            </p>
          </div>
          <div className="mt-10">
            <RenewalWorkflowNarrative />
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <EnterpriseButton href="/proof">See the demonstration</EnterpriseButton>
            <EnterpriseButton href="/solutions/customer-success" variant="secondary">
              Explore customer-success workflows
            </EnterpriseButton>
          </div>
        </div>
      </section>

      {/* 6. Integrations */}
      <IntegrationLogoStrip
        title="Works across the stack you already use"
        subtitle="Connect authorized context from CRM, support, email, documents, and finance—without replacing those systems."
      />
      <div className="-mt-px border-b border-[#E5E5E5] bg-white pb-10">
        <p className="mx-auto max-w-[720px] px-6 text-center text-[14px] leading-[1.6] text-[#526479]">
          Spine does not replace your CRM or support desk.{" "}
          <Link href="/integrations" className="font-semibold text-[#0176D3] hover:underline">
            Browse the connector catalog
          </Link>
        </p>
      </div>

      {/* 7. Proof */}
      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">
            Illustrative proof · demonstration, not customer results
          </p>
          <h2 className="mt-3 text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60]">
            What a renewal decision packet looks like in practice
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.6] text-[#526479]">
            Demonstrations show governed workflow behavior—audit trail, approval gates, and execution boundaries—not
            invented customer outcomes.
          </p>
          <ol className="mt-8 grid overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_18px_48px_rgba(3,45,96,0.08)] lg:grid-cols-3">
            {proofCards.slice(0, 3).map((card, i) => (
              <li key={card.title} className={i === 0 ? "" : "border-t border-[#D9E4EF] lg:border-l lg:border-t-0"}>
                <div className="flex h-full flex-col p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#526479]">Demonstration</p>
                  <h3 className="mt-2 text-[16px] font-semibold text-[#032D60]">{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#33465B]">{card.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/proof" className="text-[14px] font-semibold text-[#0176D3] hover:underline">
              See the product map
            </Link>
            <Link href="#renewal-workflow" className="text-[14px] font-semibold text-[#0176D3] hover:underline">
              Replay the renewal workflow
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Platform (sequenced after buyer story) */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Expand after the first workflow</p>
          <h2 className="mt-3 max-w-xl text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[length:min(36px,var(--marketing-heading-size))]">
            Governed AI platform beneath the renewal workspace
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">
            Spine Fabric and Spine Twin support additional operational workflows once your team trusts the renewal
            decision model—same evidence standards, same approval boundaries, same systems of record.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {productModel.map(({ name, body, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="flex h-full flex-col rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-6 transition-colors hover:border-[#0176D3] hover:bg-[#EAF5FC]"
                >
                  <p className="text-[length:min(18px,var(--marketing-body-size))] font-semibold text-[#032D60]">{name}</p>
                  <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-[#33465B]">{body}</p>
                  <span className="mt-4 text-[13px] font-semibold text-[#0176D3]">Learn more →</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/platform" className="mt-6 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
            View full platform architecture
          </Link>
        </div>
      </section>

      <section className="border-t border-[#D9E4EF] bg-[#F3F6F9] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">Same model, more workflows later</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[#33465B]">
            Start with renewal decisions. Additional solution paths use the same governed evidence → proposal → approval
            pattern.
          </p>
          <ul className="mt-8 overflow-hidden rounded-[20px] border border-[#D9E4EF]">
            {accountSuccess && (
              <li>
                <Link
                  href={marketingPathForSolution(accountSuccess.slug)}
                  className="block bg-[#EAF5FC] px-6 py-8 hover:bg-[#E3F2FA]"
                >
                  <div className="text-[24px] font-semibold tracking-[-0.02em] text-[#032D60]">{accountSuccess.name}</div>
                  <p className="mt-2 max-w-2xl text-[16px] leading-[1.6] text-[#33465B]">{accountSuccess.headline}</p>
                  <p className="mt-2 text-[14px] text-[#526479]">{accountSuccess.buyerSummary}</p>
                </Link>
              </li>
            )}
            {otherSolutions.map((solution) => (
              <li key={solution.id} className="border-t border-[#D9E4EF]">
                <Link
                  href={marketingPathForSolution(solution.slug)}
                  className="block bg-white px-6 py-4 hover:bg-[#F3F6F9]"
                >
                  <div className="text-[16px] font-semibold text-[#032D60]">{solution.name}</div>
                  <p className="mt-1 text-[14px] leading-[1.5] text-[#526479]">{solution.headline}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/solutions" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
            View all solutions
          </Link>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="border-y border-[#D9E4EF] bg-white py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Begin with one workflow</p>
            <h2 className="mt-3 text-[length:min(28px,var(--marketing-heading-size))] font-semibold tracking-[-0.02em] text-[#032D60]">
              Deploy the Renewal Decision Workspace first.
            </h2>
            <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-[#33465B]">
              See a sample decision packet, replay the Northstar Labs workflow, or book a review of your renewal process.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnterpriseButton href="#renewal-decision-packet">See a renewal decision packet</EnterpriseButton>
            <EnterpriseButton href="/contact?intent=workflow-review" variant="secondary">
              Book a workflow review
            </EnterpriseButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F8FF] py-20 md:py-24 innovtech-reference-surface">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="text-[length:min(24px,var(--marketing-heading-size))] font-semibold tracking-[-0.02em] text-[#052858]">
              Make every renewal decision from the full customer story.
            </h2>
            <p className="mt-1 max-w-xl text-[15px] text-[#4C5C73]/80">
              Evidence-backed proposals, explicit approvals, and execution in the systems your team already trusts.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnterpriseButton href="/contact?intent=workflow-review">Book a workflow review</EnterpriseButton>
            <EnterpriseButton href="/proof" variant="secondary">
              See a renewal decision packet
            </EnterpriseButton>
          </div>
        </div>
      </section>
    </div>
  );
}
