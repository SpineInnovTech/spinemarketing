import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/shell";
import { offerings } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "What we build | Spine InnovTech" },
      { name: "description", content: "Spine Workspace is the flagship workspace. Fabric, Workbench, Twin, Governance, and Spine Network are part of the same company, not one product page." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <Page>
      <header className="border-b border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">Spine InnovTech</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">More than one workspace.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Spine Workspace is the flagship place to work. The company also builds the memory, the surfaces, the counterpart, and the governed path around it.
          </p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2">
        {offerings.map((item) => (
          <a key={item.href} href={item.href} className="rounded-card border border-line bg-paper p-6 hover:border-blue">
            <h2 className="text-xl font-semibold tracking-tight">{item.name}</h2>
            <p className="mt-2 text-sm text-muted">{item.line}</p>
          </a>
        ))}
      </section>
    </Page>
  );
}
