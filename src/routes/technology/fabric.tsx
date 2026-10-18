import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SecondaryLink } from "@/components/site/blocks";
import { FabricPlate } from "@/components/site/plates";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/technology/fabric")({
  head: () => ({
    meta: [
      { title: "Spine Fabric | Living memory | Spine InnovTech" },
      { name: "description", content: "Spine Fabric is the living business memory: governed context designed to connect, reconcile, and continue — not a document store or a chat history." },
    ],
  }),
  component: FabricPage,
});

function FabricPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Spine Fabric"
        title="Living memory, not a pile of what was retrieved."
        lede="Fabric is designed to evolve an understanding of the work: what is connected, what still holds, and what must be forgotten."
        scene={<FabricPlate />}
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-card border border-line p-6">
            <h2 className="text-xl font-semibold">Traditional memory</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Stores information</li>
              <li>Retrieves documents</li>
              <li>Remembers the last conversation</li>
              <li>Uses a fixed set of metrics</li>
              <li>Depends on the current chat</li>
              <li>Primarily answers questions</li>
            </ul>
          </article>
          <article className="rounded-card border border-blue bg-ice p-6">
            <h2 className="text-xl font-semibold">Spine living memory</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Maintains governed business context</li>
              <li>Connects entities, relationships, goals, and work</li>
              <li>Preserves decisions, commitments, and verified outcomes</li>
              <li>Adapts measures to actual activity</li>
              <li>Continues across sessions and authorized hosts</li>
              <li>Supports decisions and governed execution</li>
            </ul>
          </article>
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          An initial set of 71 KPI definitions is the foundation, not a scoreboard of customer results. Activating measures, proposing new ones, and proving the learning and retention loops are still implementation work.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Discover", "As applications, providers, MCP servers, tools, and workflows are connected, Fabric is designed to find new authorized context."],
            ["Understand", "Schema and context assembly identify entities, relationships, activity, goals, and what is relevant."],
            ["Connect", "Account, opportunity, contract, invoice, support, usage, and outcome can sit on one situation."],
            ["Forget with provenance", "Conflicting, outdated, or revoked information should not stay because it was once stored. Personal memory is not organizational truth."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-card border border-line p-6">
              <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 text-muted">{body}</p>
            </article>
          ))}
        </div>
        <div className="md:col-span-2 flex flex-wrap gap-3">
          <SecondaryLink to="/technology">Explore the architecture</SecondaryLink>
          <SecondaryLink to="/docs">Read the documentation map</SecondaryLink>
        </div>
      </section>
    </Page>
  );
}
