import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PrimaryLink } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation | Spine InnovTech" },
      { name: "description", content: "How evaluators understand Spine sources, permissions, views, proposals, decisions and continuity." },
    ],
  }),
  component: DocsPage,
});

const cards = [
  ["/technology", "Architecture overview", "The relationship between Fabric, Workbench, Twin, governed execution and Network."],
  ["/workspace", "Working surfaces", "How Dashboard and Canvas present context for different kinds of work."],
  ["/technology/fabric", "Context and sources", "Source relationships, lineage and permission-aware retrieval."],
  ["/technology/governance", "Authority and execution", "Identity, permissions, proposals, approvals and outcome verification."],
  ["/technology/network", "Host Connected", "Keep your AI host and your tools. Move the work and the context. A connection still needs authority."],
];

function DocsPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Documentation"
        title="Understand the system behind the workspace."
        lede="This map is for evaluators. It points at how Spine organizes business context, presents work, supports preparation and preserves authority. It is not a claim that every connector or host is ready."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-3 md:grid-cols-2">
          {cards.map(([to, title, body]) => (
            <a key={to} href={to} className="rounded-card border border-line p-6 hover:border-blue">
              <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Plan a technical evaluation</h2>
          <p className="mt-3 text-muted">
            Tell us which systems, hosts and workflows you need to evaluate. We can identify the relevant references and the setup those workflows actually require.
          </p>
          <div className="mt-6">
            <PrimaryLink to="/contact">Contact the technical team</PrimaryLink>
          </div>
        </div>
      </section>
    </Page>
  );
}
