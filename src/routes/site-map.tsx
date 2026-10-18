import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/shell";
import { PRODUCT_SITE } from "@/lib/site";

export const Route = createFileRoute("/site-map")({
  head: () => ({
    meta: [
      { title: "All pages | Spine InnovTech" },
      { name: "description", content: "What the Spine InnovTech corporate site carries, and what stays on the product site or waits for a real publication." },
    ],
  }),
  component: SiteMapPage,
});

const kept = [
  ["Company", [["/", "Home"], ["/story", "Our story"], ["/company", "About"], ["/services", "Services"], ["/contact", "Contact"], ["/contact?topic=evaluation", "Evaluation and pricing inquiries"]]],
  ["Product and technology", [["/workspace", "Spine Workspace"], ["/technology/fabric", "Spine Fabric"], ["/technology#workbench", "Workbench"], ["/twin", "Twin"], ["/governance", "Governance and runtime"], ["/technology/network", "Host Connected"], ["/platform", "Technology overview"], ["/docs", "Docs and developers"]]],
  ["Insights", [["/blog", "Blog"], ["/faq", "Questions"]]],
  ["Trust", [["/security", "Trust and security"], ["/privacy", "Privacy"], ["/terms", "Website terms"]]],
] as const;

const held = [
  "Solution and industry journeys. Those now live on the product site.",
  "Folder Monitor and Triage Bot as separate products. They are capabilities, not a second company story.",
  "A changelog, portfolio, or proof gallery, until the entries are real and labeled.",
  "A pricing grid. Commercial plans stay on the product site. This site takes the inquiry.",
  "Article pages that have not been written here. The blog does not invent posts.",
];

function SiteMapPage() {
  return (
    <Page>
      <header className="border-b border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-deep">Company</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">What this site is for.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">The corporate site explains the firm, the architecture, and where the work applies. Feature depth, signup, and plans live on Spine Workspace.</p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        {kept.map(([heading, links]) => (
          <div key={heading}>
            <h2 className="text-lg font-semibold">{heading}</h2>
            <ul className="mt-3 space-y-2">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-deep hover:underline">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-2 rounded-card border border-line bg-ice p-6">
          <h2 className="text-lg font-semibold">Not a separate page yet</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {held.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={PRODUCT_SITE} className="mt-4 inline-flex text-sm font-semibold text-deep">Product site</a>
        </div>
      </section>
    </Page>
  );
}
