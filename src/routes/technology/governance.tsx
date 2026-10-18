import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SecondaryLink } from "@/components/site/blocks";
import { GovernPlate } from "@/components/site/plates";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/technology/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Spine InnovTech" },
      { name: "description", content: "A proposal is not permission. Spine InnovTech keeps human authority attached to consequential action." },
    ],
  }),
  component: GovernancePage,
});

function GovernancePage() {
  return (
    <Page>
      <PageHero
        eyebrow="Governance and human control"
        title="A proposal is not permission."
        lede="The agent can ask. An authorized person allows it. Spine records what actually happened."
        scene={<GovernPlate />}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2">
        {[
          ["Understand before deciding", "Present the relevant context, the proposed next step and the evidence that is available."],
          ["Keep the decision visible", "Let the person review, revise, approve or decline where the workflow supports it."],
          ["Execute within the granted authority", "Check identity, access, policy and approval requirements before something proceeds."],
          ["Verify what happened", "Distinguish a request, a returned result, and confirmation of the expected outcome."],
          ["Preserve the decision", "Keep the relevant approval, result and unresolved work available for the next review."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-card border border-line p-6">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 text-muted">{body}</p>
          </article>
        ))}
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <SecondaryLink to="/technology">Explore the architecture</SecondaryLink>
          <SecondaryLink to="/security">Security stance</SecondaryLink>
        </div>
      </section>
    </Page>
  );
}
