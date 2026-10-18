import { createFileRoute } from "@tanstack/react-router";
import { BentoCard, BentoGrid } from "@/components/magicui/bento";
import { Page } from "@/components/site/shell";
import { PRODUCT_SITE } from "@/lib/site";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Spine platform | Spine InnovTech" },
      { name: "description", content: "Spine Fabric is living business memory. Workbench is where people act. Twin prepares. Hermes coordinates governed execution." },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <Page>
      <header id="pillars" className="dot-field border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">Technology</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">One architecture. One Spine. Three pillars.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">The platform is the foundation under Spine Workspace. It is not a separate commercial product.</p>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <BentoGrid>
          <BentoCard className="md:col-span-2" eyebrow="One Auth" title="Entry" body="Identity, organization, workspace, role, host binding, and consent. One identity, governed everywhere it is supported." />
          <BentoCard eyebrow="Host Connected" title="Connection" body="Keep the AI host and the tools you already use. Authorized work meets in one ecosystem. Credentials do not hop hosts." />
          <BentoCard eyebrow="Spine Workbench" title="Control" body="My Work, inbox, tasks, approvals, communications, and verified outcomes. Role-aware. Organization-wide only where authorized." />
          <BentoCard eyebrow="Spine Fabric" title="Living memory" body="Governed context that is designed to connect, reconcile, and continue. Not a document store, and not a chat log." />
          <BentoCard eyebrow="Twin and Hermes" title="Prepare, then coordinate" body="Twin proposes from the memory. Hermes coordinates execution. Neither one is permission." />
        </BentoGrid>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-card border border-line p-6">
            <h2 className="text-xl font-semibold">Host-native path</h2>
            <p className="mt-2 text-sm text-muted">Authorized host capabilities retrieve permitted data live. Meaningful facts can be promoted into Fabric with provenance. No bulk copy.</p>
          </article>
          <article className="rounded-card border border-line p-6">
            <h2 className="text-xl font-semibold">Deterministic path</h2>
            <p className="mt-2 text-sm text-muted">Sensitive or AI-restricted data can move through connectors, a loader, and a normalizer without reaching a model, then promote under policy.</p>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PRODUCT_SITE} className="inline-flex h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">Explore Spine Workspace</a>
        </div>
      </section>
    </Page>
  );
}
