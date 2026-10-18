import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Blog | Spine InnovTech" },
      { name: "description", content: "Spine InnovTech writing on shared business context, agent preparation, human authority and continuity. No invented posts." },
    ],
  }),
  component: InsightsPage,
});

const topics = [
  "Shared business context",
  "Human direction and AI preparation",
  "Ready-to-work workspaces",
  "Connection reuse and interoperability",
  "Governance and verification",
  "Continuity across people and hosts",
];

function InsightsPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Blog"
        title="Ideas behind shared human–AI work."
        lede="How business context, agent preparation, human authority and continuity fit together — without treating a demo as a measured result."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <li key={topic} className="rounded-card border border-line px-5 py-4 font-medium">
              {topic}
            </li>
          ))}
        </ul>
        <article className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold text-deep">Featured introduction</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Useful AI needs more than access to information.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            It needs relevant context, a place to contribute to the work, and clear boundaries around what it may do. Spine InnovTech publishes thinking on those pieces. Longer essays stay tied to a claim we can stand behind — not to a percentage we have not measured.
          </p>
        </article>
      </section>
    </Page>
  );
}
