import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PrimaryLink, SecondaryLink } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our story | Spine InnovTech" },
      { name: "description", content: "Why Spine InnovTech moved from connected records to shared understanding, shared work and continuity with boundaries." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Our story"
        title="Connecting systems is only part of the work."
        lede="A record can move successfully between applications while the person making a decision still lacks the whole situation."
      />
      <section className="mx-auto max-w-3xl space-y-10 px-5 py-16">
        <p className="text-lg text-muted">
          What happened before? Which commitment matters? Who owns the next step? What is AI proposing, and what is it allowed to do? Those questions shaped Spine InnovTech.
        </p>
        {[
          ["From connected records to shared understanding", "We organize information around the business and the work — not only around the application that stores it. A customer, an issue, an opportunity and a decision are more useful when their relationships stay visible."],
          ["From assistance to shared work", "AI can help gather information and prepare a proposal. The person needs a place to inspect that preparation, add judgment and direct what happens next. That is the role of Spine Workspace."],
          ["From individual sessions to continuity", "Work spans people, applications and AI environments. Spine Network is designed to help relevant context and work state continue across those boundaries, subject to the authority available in each environment."],
          ["What comes next", "The direction stays the same: reduce the burden of preparation, make shared context usable, and preserve human control."],
        ].map(([title, body]) => (
          <article key={title}>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{body}</p>
          </article>
        ))}
        <div className="flex flex-wrap gap-3">
          <PrimaryLink to="/technology">Explore our technology</PrimaryLink>
          <SecondaryLink to="/workspace">Meet Spine Workspace</SecondaryLink>
        </div>
      </section>
    </Page>
  );
}
