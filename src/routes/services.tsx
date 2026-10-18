import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Spine InnovTech" },
      { name: "description", content: "Scoped architecture, context, and governed-AI work. Availability and terms are discussed per engagement. No fixed-price promise." },
    ],
  }),
  component: ServicesPage,
});

const areas = [
  ["Context", "How a workflow’s records, commitments, and decisions relate."],
  ["Architecture", "Where Fabric, Workbench, Twin, and governed execution fit the systems you already run."],
  ["Authority", "What an agent may prepare, and what still needs a person."],
  ["A bounded engagement", "One problem, named sources, and a result you can judge. Not a standing program."],
];

function ServicesPage() {
  return (
    <Page>
      <header className="border-b border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">Company</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Start with one business problem.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">Services are scoped conversations about architecture, context, and governed work. They are not a catalog of fixed packages, and they are not a promise of a price or a date.</p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2">
        {areas.map(([title, body]) => (
          <article key={title} className="rounded-card border border-line p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </article>
        ))}
        <Link to="/contact" search={{ topic: "technology" }} className="inline-flex h-11 items-center text-sm font-semibold text-deep md:col-span-2">
          Discuss a project
        </Link>
      </section>
    </Page>
  );
}
