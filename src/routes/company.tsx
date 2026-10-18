import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PrimaryLink, SecondaryLink } from "@/components/site/blocks";
import { HomePlate } from "@/components/site/plates";
import { Page } from "@/components/site/shell";
import { principles, LEGAL } from "@/lib/site";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company | Spine InnovTech" },
      {
        name: "description",
        content: "Spine InnovTech builds a better working relationship between people and AI: shared business context, with the person in control.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <Page>
      <PageHero
        eyebrow={LEGAL}
        title="Building a better working relationship between people and AI."
        lede="We build the working relationship: shared context, an AI agent as the counterpart, and a decision that stays with a person."
        scene={<HomePlate />}
      >
        <PrimaryLink to="/workspace">Explore Spine Workspace</PrimaryLink>
        <SecondaryLink to="/story">Our story</SecondaryLink>
      </PageHero>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Our purpose</h2>
            <p className="mt-3 text-muted">Make AI useful within the reality of business work.</p>
            <p className="mt-3 text-muted">
              Business work carries history, responsibilities, commitments and consequences. Useful assistance needs that context. People need a way to inspect it, guide the work and understand what happened. We build around both needs.
            </p>
            <p className="mt-3 text-muted">
              Our focus is the relationship between information, work and authority: what you need to understand, what AI can prepare, and what must be decided before action proceeds.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              ["Spine Workspace", "The flagship workspace where people and AI work from shared business context."],
              ["Spine technology", "The architecture for organizing context, projecting views, preparing proposals, governing actions and preserving continuity."],
              ["Host Connected", "Keep the AI host and the tools you already use. Move the work and the context. Do not replace either."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-line p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">Our principles</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-card bg-ice p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
