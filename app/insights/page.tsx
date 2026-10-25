import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { INSIGHTS_INDEX, INSIGHT_ARTICLES } from "@/lib/insights"

export const metadata: Metadata = {
  title: "Insights — Spine InnovTech",
  description:
    "Perspectives from Spine InnovTech on business context, who is allowed to act, and how work keeps its history across tools and AI apps.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights — Spine InnovTech",
    description:
      "Perspectives from Spine InnovTech on business context, who is allowed to act, and how work keeps its history across tools and AI apps.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Insights", url: absoluteUrl("/insights") },
        ]}
      />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-[1100px] px-6 pt-[160px] pb-[40px] md:px-16">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-primary">
              {INSIGHTS_INDEX.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[760px] text-[length:min(40px,var(--marketing-title-size))] font-semibold tracking-[-0.04em] leading-[1.12] text-[#032D60] sm:text-[length:min(48px,var(--marketing-title-size))]">
              {INSIGHTS_INDEX.headline}
            </h1>
            <p className="mt-5 max-w-[680px] text-[length:min(18px,var(--marketing-body-size))] font-medium leading-[1.6] text-[#33465B]">
              {INSIGHTS_INDEX.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 pb-16 md:px-16">
          <h2 className="text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">
            Featured articles
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHT_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group arvio-card flex flex-col p-6 transition-all hover:shadow-lg"
              >
                <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary">
                  {article.category}
                </span>
                <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.03em] leading-[1.3] text-[#032D60] transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.5] text-muted-foreground">
                  {article.cardSummary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                  Read the perspective
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-16">
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 text-center sm:p-12">
            <h2 className="text-[length:min(24px,var(--marketing-title-size))] font-semibold tracking-[-0.03em] text-[#032D60]">
              {INSIGHTS_INDEX.closing.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.6] text-[#33465B]">
              {INSIGHTS_INDEX.closing.body}
            </p>
            <Link
              href={INSIGHTS_INDEX.closing.cta.href}
              className="mt-6 inline-flex h-[42px] items-center rounded-xl px-6 text-[15px] font-semibold text-white"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              {INSIGHTS_INDEX.closing.cta.label}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
