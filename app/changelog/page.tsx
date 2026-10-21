import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/marketing/page-hero"
import { entries } from "@/content/changelog"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { EXPLORE_SPINEWORKSPACE_LABEL, PRODUCT_SITE_URL } from "@/lib/product-site"

export const metadata: Metadata = {
  title: "Changelog | Spine InnovTech",
  description: "What's new in SpineWorkspace — product updates, new connectors, and improvements.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog | Spine InnovTech",
    description: "What's new in SpineWorkspace — product updates, new connectors, and improvements.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Changelog", url: absoluteUrl("/changelog") },
      ]} />
      <Header />
      <main id="main">
        <PageHero
          badge="Product Changelog"
          headline="What's new in SpineWorkspace."
          subhead="The dated log of product updates, new connectors, and architecture improvements. Shorter buyer notes are on Updates."
          primaryCta={{ label: "Company updates", href: "/updates" }}
          secondaryCta={{ label: EXPLORE_SPINEWORKSPACE_LABEL, href: PRODUCT_SITE_URL }}
        />

        <section className="mx-auto max-w-[800px] px-6 py-16 md:px-16">
          <div className="space-y-16">
            {entries.map((entry) => (
              <div key={entry.date} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
                <div className="absolute left-0 top-1 h-2.5 w-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-primary" />
                <div className="text-[13px] font-semibold uppercase tracking-widest text-primary">{entry.date}</div>
                <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em]">{entry.title}</h2>
                <ul className="mt-4 space-y-2">
                  {entry.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] font-medium text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
