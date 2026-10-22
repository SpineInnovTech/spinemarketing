"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./section";
import { EnterpriseButton } from "./enterprise";

const rise = {
  initial: { opacity: 1, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const lenses = [
  { id: "account-success", label: "Account Success", priority: "Renewal risk: usage change flagged in support, billing invoice past due", nextWork: "Prepare renewal follow-up with account owner" },
  { id: "sales", label: "Sales", priority: "Open opportunity stalled; latest commitment from email thread", nextWork: "Draft follow-up referencing stakeholder change" },
  { id: "finance", label: "Finance", priority: "Invoice overdue 12 days; contract value verified in CRM", nextWork: "Reconcile invoice against contract record" },
  { id: "engineering", label: "Engineering", priority: "Two open escalations linked to the account; deploy note in Slack", nextWork: "Triage escalation before customer call" },
  { id: "executive", label: "Executive", priority: "Expansion decision pending; escalation unresolved for 6 days", nextWork: "Review account posture for leadership sync" },
];

const capabilities: [string, string][] = [
  ["Daily workspace", "See relevant tasks, queues, approvals, priorities, and next steps without reconstructing the situation."],
  ["Business context", "Bring records, conversations, documents, signals, and evidence into a connected business picture."],
  ["Your AI Twin", "Work with one primary AI representative to assemble context, prepare work, propose next steps, and coordinate bounded assistance."],
  ["Shared work and handoffs", "Carry objectives, responsibilities, evidence, progress, and outcomes forward so authorized participants can continue."],
  ["Governed actions", "Review proposed actions, grant authority, execute through connected systems, and verify what happened."],
  ["Memory and continuity", "Preserve relevant history across people, work, tools, and AI interactions—with personal and organizational boundaries."],
];

export function EnterpriseHome() {
  const [lens, setLens] = useState(lenses[0].id);
  const active = lenses.find((l) => l.id === lens)!;

  return (
    <div className="bg-white text-[#181818]">
      {/* Hero */}
      <section className="relative border-b border-[#D9E4EF] bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0176D3]">The connected workspace for people and AI</p>
          <h1 className="mt-6 max-w-3xl text-[length:min(3rem,var(--marketing-title-size))]/[var(--tw-leading,1)] font-bold leading-tight md:text-[length:min(3.75rem,var(--marketing-title-size))]/[var(--tw-leading,1)]">
            Your work already has the data.
            <br />
            SpineWorkspace gives it context.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#3C4A5A]">
            Bring your work, connected tools, and AI Twin together in one workspace—to understand what matters, coordinate next steps, and move work forward under your authority.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <EnterpriseButton href="/request-access">Start Workspace Free</EnterpriseButton>
            <EnterpriseButton href="#how-it-works" variant="secondary">See how work comes together</EnterpriseButton>
          </div>
          <p className="mt-6 text-sm text-[#6B7A8D]">Context you own. AI you rent. Approval in between.</p>
        </div>
      </section>

      {/* Problem */}
      <Section>
        <motion.div {...rise}>
          <SectionHeader headline="Your work is connected. Your tools keep it apart." />
          <div className="mx-auto mt-10 grid max-w-3xl gap-2 text-center text-lg">
            <p>CRM holds the account. Support holds the issue. Billing holds the invoice.</p>
            <p>Conversations hold the decisions. AI sessions hold another part of the story.</p>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[#3C4A5A]">
            People become the bridge—searching, checking, copying, and explaining before the work can move forward.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-center font-semibold">Stop juggling tools. Start continuing work.</p>
        </motion.div>
      </Section>

      {/* Broader workspace */}
      <Section variant="muted">
        <motion.div {...rise}>
          <SectionHeader
            headline="More than a view of your business. A place to move it forward."
            body="Connected context is the foundation. SpineWorkspace brings the work, collaboration, actions, and continuity around it."
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {capabilities.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-[#D9E4EF] bg-white p-6">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-[#3C4A5A]">{b}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Daily work */}
      <Section>
        <motion.div {...rise}>
          <SectionHeader
            headline="The right context arrives with the work."
            body="Open a task, review an approval, investigate a signal, or continue a handoff—with the available evidence and history alongside it."
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-[#6B7A8D]">Illustrative operational examples. Labels show where each piece of context came from.</p>
        </motion.div>
      </Section>

      {/* Account Brief */}
      <Section variant="muted" id="brief">
        <motion.div {...rise}>
          <SectionHeader
            label="Explore example work lenses"
            headline="The same business reality. Different work."
            body="Bring the relevant context, evidence, and next work to each person—based on their responsibilities and authorized access."
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl font-semibold">One account. Any role. Any user.</p>
          <div className="mx-auto mt-10 max-w-3xl">
            <div role="tablist" aria-label="Example work lenses" className="flex flex-wrap justify-center gap-2">
              {lenses.map((l) => (
                <button
                  key={l.id}
                  role="tab"
                  aria-selected={lens === l.id}
                  onClick={() => setLens(l.id)}
                  className={`rounded-full border px-4 py-2 text-sm ${lens === l.id ? "border-[#0176D3] bg-[#0176D3] text-white" : "border-[#C9D7E6] bg-white text-[#3C4A5A]"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div role="tabpanel" className="mt-8 rounded-2xl border border-[#D9E4EF] bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0176D3]">{active.label} lens</p>
              <p className="mt-4"><span className="font-semibold">Top priority:</span> {active.priority}</p>
              <p className="mt-2"><span className="font-semibold">Next work:</span> {active.nextWork}</p>
              <p className="mt-6 text-sm text-[#6B7A8D]">
                Sources: CRM · Support · Billing · Product · Forecast. Illustrative example with connected account evidence. Each person sees only the context they are authorized to access.
              </p>
              <p className="mt-2 text-sm font-semibold">Nothing consequential runs until you accept it.</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Progressive usefulness */}
      <Section id="how-it-works">
        <motion.div {...rise}>
          <SectionHeader headline="Useful before it knows everything. Better as context grows." />
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-[#E3EBF4] text-[#3C4A5A]">
            <p className="py-3"><span className="font-semibold text-[#181818]">Day 1:</span> My Work · Today · Tasks · Lists · Connect sources</p>
            <p className="py-3"><span className="font-semibold text-[#181818]">As context grows:</span> Signals · Risks · KPIs · Relationships</p>
            <p className="py-3"><span className="font-semibold text-[#181818]">When evidence is sufficient:</span> Account / Entity synthesis</p>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center">
            SpineWorkspace does not invent the missing pieces. It shows what is known, what is stale, what conflicts, and what still needs a source.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-[#6B7A8D]">
            Rich synthesis depends on sufficient evidence, entity binding, freshness, and reconciliation—not simply time since signup.
          </p>
        </motion.div>
      </Section>

      {/* Human and Twin */}
      <Section variant="muted">
        <motion.div {...rise}>
          <SectionHeader
            headline="Same work. Same context. Different responsibilities."
            body="Your Twin helps you work across the connected environment without making you coordinate every underlying agent or workflow yourself."
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              ["Human", ["Intent", "Judgment", "Approval", "Accountability"]],
              ["Twin", ["Assemble context", "Recall continuity", "Prepare work", "Propose actions", "Coordinate bounded assistance", "Follow up"]],
              ["Shared", ["Work", "Evidence", "Business context", "Goals", "Outcomes"]],
            ].map(([t, items]) => (
              <div key={t as string} className="rounded-2xl border border-[#D9E4EF] bg-white p-6">
                <h3 className="font-semibold">{t}</h3>
                <ul className="mt-3 space-y-1 text-sm text-[#3C4A5A]">
                  {(items as string[]).map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center">Your Twin can change. Your model can change. Your tools can change. Your continuity should not.</p>
        </motion.div>
      </Section>

      {/* Connected execution */}
      <Section>
        <motion.div {...rise}>
          <SectionHeader
            headline="Keep your systems. Connect the work between them."
            body="SpineWorkspace brings authorized context and available capabilities around your existing systems. Those systems continue to perform the actions they own."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-[#3C4A5A]">CRM · Support · Billing · Communication · Documents · Engineering · Data · AI tools · MCP / plugins</p>
        </motion.div>
      </Section>

      {/* Governed loop */}
      <Section variant="muted">
        <motion.div {...rise}>
          <SectionHeader
            headline="Move work forward. Keep authority clear."
            body="AI prepares an action. A human or authorized policy grants authority. The connected system performs it. SpineWorkspace verifies the result and reconciles it with the business context. The next participant continues from the verified outcome."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center font-semibold">Know → Decide → Approve → Act → Verify → Continue</p>
          <p className="mx-auto mt-6 max-w-2xl text-center">Done does not mean the API returned 200. Done means the outcome was verified.</p>
          <p className="mt-2 text-center text-sm text-[#6B7A8D]">Proposed · Approved · Executed · Verified</p>
        </motion.div>
      </Section>

      {/* Continuity */}
      <Section>
        <motion.div {...rise}>
          <SectionHeader
            headline="Work should remember what happened."
            body="Preserve the decisions, evidence, handoffs, and outcomes that make the next step understandable. Personal context remains personal. Organizational knowledge becomes shared through governance. Changing models or agents should not force people to rebuild the story."
          />
          <p className="mx-auto mt-6 max-w-2xl text-center font-semibold">Models are replaceable. Business continuity is not.</p>
        </motion.div>
      </Section>

      {/* Solutions */}
      <Section variant="muted">
        <motion.div {...rise}>
          <SectionHeader headline="One workspace. Different work." body="Different teams need different work lenses—not disconnected versions of the business." />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {[
              ["Account Success", "/solutions/customer-success"],
              ["Sales", "/solutions/sales"],
              ["Finance", "/solutions/finance"],
              ["Support", "/solutions/customer-support"],
              ["RevOps", "/solutions/revops"],
              ["Marketing", "/solutions/marketing"],
              ["Product & Engineering", "/solutions/product-engineering"],
              ["Operations", "/solutions/operations"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-full border border-[#C9D7E6] bg-white px-4 py-2 text-sm text-[#3C4A5A] hover:border-[#0176D3]">{label}</Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#6B7A8D]">Operating lenses within one workspace—not independent products and not an exhaustive role list.</p>
          <p className="mt-2 text-center"><Link href="/solutions" className="text-[#0176D3]">View all solutions</Link></p>
        </motion.div>
      </Section>

      {/* Trust */}
      <Section id="trust">
        <motion.div {...rise}>
          <SectionHeader headline="Your context. Your authority. Your audit trail." />
          <ul className="mx-auto mt-8 grid max-w-3xl gap-2 text-[#3C4A5A] sm:grid-cols-2">
            <li>Tenant isolation</li>
            <li>Scoped access</li>
            <li>Explicit approval</li>
            <li>Evidence-backed execution</li>
            <li>Governed sharing</li>
            <li>Historical recall does not grant authority</li>
          </ul>
          <p className="mt-8 text-center"><Link href="/security" className="text-[#0176D3]">Explore security</Link></p>
        </motion.div>
      </Section>

      {/* Closing CTA */}
      <Section variant="muted">
        <motion.div {...rise} className="text-center">
          <h2 className="text-[length:min(2.25rem,var(--marketing-heading-size))]/[var(--tw-leading,1.1111111111)] font-bold">Stop rebuilding context every morning.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#3C4A5A]">Bring your tools, people, and AI together—and let work continue with the context it needs.</p>
          <div className="mt-8 flex justify-center gap-4">
            <EnterpriseButton href="/request-access">Start Workspace Free</EnterpriseButton>
            <EnterpriseButton href="/solutions" variant="secondary">Explore solutions</EnterpriseButton>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
