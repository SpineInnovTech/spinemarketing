import { createFileRoute } from "@tanstack/react-router";
import { Capture, CaptureNote, PageHero, SecondaryLink } from "@/components/site/blocks";
import { WorkspacePlate } from "@/components/site/plates";
import { Page } from "@/components/site/shell";
import { WorkbenchShell, workbenchModes } from "@/components/site/workbench-shell";
import { PRODUCT_SITE } from "@/lib/site";
import { referralUrl, SITE_LINKS } from "@/lib/site-links";

export const Route = createFileRoute("/workspace")({
  head: () => ({
    meta: [
      { title: "Spine Workspace | Keep your AI. Keep your tools." },
      {
        name: "description",
        content: "Spine Workspace does not replace your AI host or your tools. It connects the ecosystem you already use and gives the work a shared context and living memory.",
      },
    ],
  }),
  component: WorkspacePage,
});

const modes = workbenchModes;

function WorkspacePage() {
  return (
    <Page>
      <PageHero
        eyebrow="Spine Workspace"
        title="Keep your AI. Keep your tools. Connect your work."
        lede="One connected ecosystem. One living memory. Work that moves with you. Spine Workspace is not another assistant competing for attention."
        scene={<WorkspacePlate />}
      >
        <a
          href={PRODUCT_SITE}
          className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper"
        >
          Visit Spine Workspace
        </a>
        <SecondaryLink to="/contact">Discuss an evaluation</SecondaryLink>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["01", "Keep your AI host", "ChatGPT, Claude, Perplexity, Cursor, or the host you already prefer. Spine connects through a supported integration. You do not have to leave that experience."],
            ["02", "Keep your tools", "CRM, mail, calendar, projects, code, and documents stay where they are. Spine discovers the capabilities an authorized connection can expose."],
            ["03", "One ecosystem", "Enter the workspace and work across what is already authorized. You should not have to rebuild the same situation in every app."],
            ["04", "Move the work", "Start in a host. Continue in the workspace. Resume in another connected host. Fabric carries the goals, decisions, and verified outcomes."],
          ].map(([n, title, body]) => (
            <article key={n} className="rounded-card border border-line bg-ice p-6">
              <p className="text-xs font-semibold text-deep">{n}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          A simple sign-in is not access to every private tool inside a host. Spine discovers what that host is authorized and able to expose, and asks again when more consent is required.
        </p>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
          <ol className="space-y-2">
            {[
              "Your AI host",
              "Connect Spine Workspace",
              "One Auth and consent",
              "Discover apps, tools, MCPs, agents, and models",
              "One ecosystem",
              "Spine Fabric, the living memory",
              "Workbench and Twin",
              "Continue across hosts",
            ].map((step, index) => (
              <li key={step} className="flex items-center gap-3 rounded-card border border-line px-4 py-3">
                <span className="text-xs font-semibold text-deep">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
          <div className="grid content-start gap-4">
            <article className="rounded-card border border-line p-6">
              <h2 className="font-semibold">Without a shared memory</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Context sits in separate apps.</li>
                <li>Each assistant starts from its own prompt.</li>
                <li>People explain the work again.</li>
                <li>A decision is easy to lose from the execution.</li>
              </ul>
            </article>
            <article className="rounded-card border border-blue bg-ice p-6">
              <h2 className="font-semibold">With Spine Workspace</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Authorized context is connected.</li>
                <li>Continuity can cross supported hosts.</li>
                <li>Living memory assembles what is relevant.</li>
                <li>Decisions, execution, and verified outcomes stay distinct and linked.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">Why this, and not another chat.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["No replacement", "Keep the AI hosts and the applications you prefer."],
            ["No disconnected work", "Authorized capabilities meet around one business context."],
            ["No starting over", "Living memory is what lets the work continue in the next host."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-card border border-line bg-ice p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold text-deep">Workbench</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight">Nine entries in the shell. Eight ways to see the same work.</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            This is the target sidebar. Domain views are not another global menu. Thirteen canonical domains open inside the authorized workbench. The catalog is specified. It is not a verified live runtime.
          </p>
          <div className="mt-8 grid items-start gap-4 lg:grid-cols-12">
            <WorkbenchShell className="lg:col-span-4" />
            <div className="grid gap-4 lg:col-span-8">
              <article className="rounded-card border border-line bg-paper p-6">
                <h3 className="text-lg font-semibold">My Work</h3>
                <p className="mt-2 text-sm text-muted">The execution entry. You start on your own work. Team and Organization are scopes, not extra products.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["You", "Inbox, tasks, queue, approvals, and notifications."],
                    ["My Team", "The same work, at the scope you are allowed to see."],
                    ["Organization", "Cross-domain only where that authority exists."],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-xl bg-ice p-4">
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-muted">{body}</p>
                    </div>
                  ))}
                </div>
              </article>
              <div className="grid gap-3 sm:grid-cols-2">
                {modes.map(([title, body]) => (
                  <article key={title} className="rounded-card border border-line bg-paper p-4">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              ["Recents", "Recent work and what you pinned. History is not a second inbox."],
              ["Personal", "Notes, knowledge, bookmarks, and brainstorming. Private until you share it."],
              ["Communications", "Mail, calendar, meetings, chat, calls, and shared documents. The provider still owns the record."],
              ["My Twin", "The counterpart on the same account and the same work. A different identity, and no inherited permission."],
              ["Platform", "One entry for connections, capabilities, memory, automation, and trust. Operators do not manage it from My Work."],
              ["Admin", "Organizations, people, roles, and policy. Hidden unless that permission exists. Profile is not billing administration."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-line bg-paper p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Two of the modes, as fixtures.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Capture src="/media/dashboard.webp" kicker="Workbench" alt="QA fixture of a workbench queue. Not live customer telemetry." />
          <Capture src="/media/canvas.webp" kicker="Canvas" alt="QA fixture of a canvas plan. A layout is not the source record." />
        </div>
        <div className="mt-4 max-w-3xl">
          <CaptureNote />
          <p className="mt-2 text-sm text-muted">
            Ready-built views depend on supported connections and permission. A canvas is not the record. The architecture can project thirteen canonical domains over one Fabric. That is not unrestricted access, and it is not a second sidebar.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-ice">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Understand what AI brings you.</h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>What is being proposed?</li>
              <li>Which context supports it?</li>
              <li>What is missing or uncertain?</li>
              <li>What will happen if it proceeds?</li>
              <li>What authority is required?</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Stay in control.</h2>
            <p className="mt-4 text-muted">
              Review the preparation. Make changes. Ask for a revision. Approve or decline the next step where the workflow supports those actions. An available tool does not, by itself, grant permission to use it.
            </p>
            <p className="mt-3 text-muted">
              Spine Workspace builds on supported business tools and authorized connections. Spine Network extends continuity into compatible AI environments. It does not replace the tools that own the records.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Why evaluate it?</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Evaluate Spine Workspace when your team spends substantial effort assembling context, repeating handoffs, or turning AI output into reviewable business work.
        </p>
        <div className="mt-8 max-w-xl rounded-card border border-line p-6">
          <p className="text-sm font-semibold text-deep">Plans and evaluation</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">Find the right product plan</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Current pricing and commercial terms live on the Spine Workspace product site. Start with the workflow you intend to run, then review the product plan and any implementation needs.
          </p>
          <a href={referralUrl(SITE_LINKS.productPricing)} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
            View product pricing
          </a>
        </div>
      </section>
    </Page>
  );
}
