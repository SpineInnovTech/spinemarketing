import { Link } from "@tanstack/react-router";
import { BentoCard, BentoGrid } from "@/components/magicui/bento";
import { PreviewPrinciples, WorkspacePreview } from "@/components/site/workspace-preview";
import { PRODUCT_SITE } from "@/lib/site";

const flow = ["Connect", "Authorize", "Assemble", "Work", "Approve", "Execute", "Verify", "Continue"];

const memory = [
  ["Discover", "New authorized sources, as you connect them."],
  ["Understand", "Entities, relationships, activity, and goals."],
  ["Connect", "Isolated records become one situation."],
  ["Measure", "KPI coverage follows real activity."],
  ["Learn", "Verified decisions improve the next assembly."],
  ["Adapt", "Views and workflows follow the organization."],
  ["Continue", "The situation is still there, later, on another host."],
];

const chain = ["Account", "Opportunity", "Contract", "Invoice", "Support ticket", "Product usage", "Outcome"];

const questions = [
  ["Does shared context mean everyone can see everything?", "No. Context stays subject to identity, organization, workspace, and role. Personal memory and organizational truth stay distinct."],
  ["Does an AI agent decide what happens?", "No. Twin prepares and proposes. Hermes coordinates execution only inside policy and human approval."],
  ["Is Fabric just retrieval, or a store of old chats?", "No. Living memory is designed to connect entities, decisions, and verified outcomes — and to drop what is outdated, conflicting, or no longer permitted."],
  ["Is an agent’s “done” a verified outcome?", "No. A claimed result is reconciled against the source. A timeout or a model’s statement is not completion."],
  ["Where do product plans live?", "On Spine Workspace. This site explains the company and the architecture, not a checkout."],
];

export function SaasHome() {
  return (
    <>
      <section className="dot-field relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <p className="inline-flex rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold tracking-wide text-deep">
            Spine InnovTech · the company behind Spine Workspace
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Building the business-context layer for the agentic era.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Your organization runs on many systems and, increasingly, many AI assistants. The work crosses all of them. The context doesn’t.
          </p>
          <p className="mt-4 text-sm font-semibold">Truth and context you own. AI you rent. Approval in between.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={PRODUCT_SITE} className="inline-flex h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
              Explore Spine Workspace
            </a>
            <a href="/platform" className="inline-flex h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold">
              Discover the architecture
            </a>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <WorkspacePreview />
            <PreviewPrinciples />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold text-deep">The problem</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Your tools know the pieces. Who carries the meaning?</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Fragmented truth", "A commitment in email. A blocker in a ticket. A reason in a meeting note. Each source can be accurate, and still no one holds the situation."],
            ["People as the integration", "Teams search, copy, and explain the same story at every handoff. Connecting systems did not connect understanding."],
            ["A confident “done”", "An agent can finish a sentence without the business outcome happening. Reported completion is not verification."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-card border border-line bg-ice p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pillars" className="border-y border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">The product</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">One organization. One Spine. Three pillars.</h2>
          <div className="mt-8">
            <BentoGrid>
              <BentoCard
                className="md:col-span-2"
                eyebrow="01 · Entry"
                title="One Auth"
                body="One governed entry: identity, organization, workspace, role, and consent, across the web and supported AI hosts."
              />
              <BentoCard
                eyebrow="02 · Connection"
                title="Host Connected"
                body="Keep the AI host and the tools you already use. No connection silo. The work and the context move. The host is not replaced."
              />
              <BentoCard
                className="md:col-span-2"
                eyebrow="03 · Control"
                title="Spine Workbench"
                body="The human control center: priorities, communications, tasks, approvals, agent activity, and outcomes checked against the source."
              />
              <BentoCard
                eyebrow="Foundation"
                title="One Spine"
                body="Workbenches are projections of the same Fabric. The solution journeys live on the product site."
              />
            </BentoGrid>
          </div>
          <a href="/platform" className="mt-6 inline-flex h-11 items-center text-sm font-semibold text-deep">
            Explore the Spine platform
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold text-deep">How it works</p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight">From a permitted source to a verified continuation.</h2>
        <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {flow.map((step, index) => (
            <li key={step} className="rounded-card border border-line bg-paper p-4">
              <p className="text-xs font-semibold text-deep">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-6 text-lg font-semibold">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Source systems stay authoritative. Sensitive data can stay on an AI-free path. Every consequential action passes policy and a person. “Done” is reconciled, not merely reported.
        </p>
      </section>

      <section className="border-y border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">Spine Fabric</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Living memory. Not a longer archive.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Spine does not only remember what happened. It is designed to keep an evolving understanding of what matters, why it matters, and what can happen next.
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {memory.map(([title, body], index) => (
              <li key={title} className="rounded-card border border-line bg-paper p-4">
                <p className="text-xs font-semibold text-deep">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 font-semibold">{title}</p>
                <p className="mt-1 text-sm text-muted">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {chain.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-sm font-medium">{item}</span>
                {index < chain.length - 1 ? <span className="text-deep" aria-hidden="true">→</span> : null}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-card border border-line bg-paper p-6">
              <h3 className="font-semibold">What it keeps</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Governed business context: relationships, commitments, decisions, and outcomes that were actually verified.</p>
            </article>
            <article className="rounded-card border border-line bg-paper p-6">
              <h3 className="font-semibold">What it must be able to forget</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Outdated facts, conflicting records, revoked permissions, and personal memory that is not organizational truth. Growth is useful understanding, not a larger pile.</p>
            </article>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            That is the design. Making the learning, reconciliation, retention, and adaptation loops operational and measurable is still the work — not a claim of a finished result.
          </p>
          <a href="/technology/fabric" className="mt-4 inline-flex h-11 items-center text-sm font-semibold text-deep">
            How Fabric differs from retrieval
          </a>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">Under the pillars</p>
          <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight">Architecture, not a second product catalogue.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Spine Fabric", "The living business memory. It connects what is authorized, keeps provenance, and is designed to reconcile what no longer holds."],
              ["Workbench", "Where people see that context and act. Projections follow the role, not a second database."],
              ["Twin", "The context-aware counterpart. It prepares from the memory. It does not inherit permission."],
              ["Hermes", "Coordinates governed execution: ask, approve, run, observe, reconcile. A report of “done” is not the outcome."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-line p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ice text-navy">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-sm font-semibold text-deep">What we believe</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Truth and context you own. AI you rent. Approval in between.</p>
          <p className="mt-4 text-muted">Intelligence is becoming a rented commodity. Organization-owned business context is not.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold text-deep">Why Spine</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Not another assistant. The context the assistants share.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Keep the host", "Most products ask you to leave ChatGPT, Claude, or Cursor. Spine Workspace connects the host you already use."],
            ["One spine, not a prompt", "A wrapper remembers a chat. Spine is built to hold tenant-scoped business context, with identity and consent in front of it."],
            ["A person still decides", "“Please ask first” is not a control. A consequential action is proposed, approved, or declined. Approval is not the same as execution."],
            ["Done is checked", "An agent’s report, a queue receipt, and a provider acknowledgement are not the outcome. The design reads the source back before it calls the work reconciled."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-card border border-line p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          The first thing to evaluate is one workflow: the host you use, the records you are allowed to see, and whether the next step stays with you. Breadth of domains is the expansion, not the promise of day one.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold text-deep">Flagship product</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Keep your AI. Keep your tools. Connect your work.</h2>
          <p className="mt-4 text-muted">
            Spine Workspace does not replace the host or the applications you already use. It connects that ecosystem and gives the work one living memory. Your AI. Your tools. Your ecosystem.
          </p>
          <a href="/workspace" className="mt-6 inline-flex h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
            See Spine Workspace
          </a>
        </div>
        <img src="/media/canvas.webp" alt="QA fixture of a Canvas view assembling a working plan." className="rounded-card border border-line" />
      </section>

      <section className="border-t border-line bg-ice">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Questions worth asking first.</h2>
          <div className="mt-6 divide-y divide-line rounded-card border border-line bg-paper">
            {questions.map(([q, a]) => (
              <details key={q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Company, not a blog of invented posts.</h2>
          <Link to="/insights" className="text-sm font-semibold text-deep">
            Insights
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Our story", "The systems were connected. The business story was not.", "/story"],
            ["Principles", "Context over fragments. Evidence before confidence. Authority before execution.", "/company#principles"],
            ["Services", "Scoped work on one business problem. No fixed-price promise.", "/services"],
          ].map(([title, body, href]) => (
            <a key={title} href={href} className="rounded-card border border-line p-5 hover:border-blue">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight">Work should move with its context intact.</h2>
            <p className="mt-3 max-w-lg text-muted">Explore the workspace, or tell us the workflow you are trying to make possible.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PRODUCT_SITE} className="inline-flex h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
              Explore Spine Workspace
            </a>
            <Link to="/contact" search={{ topic: "general" }} className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-semibold">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
