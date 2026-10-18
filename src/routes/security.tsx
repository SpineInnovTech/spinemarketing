import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SecondaryLink } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security | Spine InnovTech" },
      { name: "description", content: "How Spine InnovTech approaches identity, least privilege, governed AI, source ownership and traceability. No certification is claimed here." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Trust by design"
        title="Useful AI requires clear boundaries and observable results."
        lede="Permission, provenance and accountability are part of the architecture. This page describes the approach. It is not a certification, an audit report, or a promise of a particular cipher, residency region or incident history."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2">
        {[
          ["Identity and tenancy", "A request should resolve the person, organization, workspace and access scope before context or a capability is exposed."],
          ["Least privilege", "A person or an AI counterpart receives the context and capabilities permitted for the work. Discovery is not authority."],
          ["Governed assistance", "Gathering context, writing a summary and proposing an action must stay distinguishable from an authorized change in a business system."],
          ["Source ownership", "Connected systems remain the authority for the records and actions they own. Context references evidence. It does not silently replace the source."],
          ["Traceability", "A meaningful action should be traceable from intent through authorization, execution, observation and reconciliation where that path is supported."],
          ["Outcome versus acknowledgement", "A system reply is not always business completion. The design distinguishes requested, returned, verified, divergent and reconciled states."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-card border border-line p-6">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </article>
        ))}
        <div className="md:col-span-2 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">How to evaluate, and how to report</h2>
          <p className="mt-3 text-muted">
            Teams evaluating SpineWorkspace can ask for the security documentation that actually exists: supported controls, data-flow description, and known limitations. If you believe you have found an issue, write privately. Include the domain, how to reproduce it, and the potential impact. Do not expose another organization’s data or run disruptive tests.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <SecondaryLink to="/contact">Ask a security question</SecondaryLink>
            <SecondaryLink to="/technology/governance">Governance architecture</SecondaryLink>
          </div>
        </div>
      </section>
    </Page>
  );
}
