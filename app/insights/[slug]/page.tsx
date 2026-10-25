import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/site-url"
import { INSIGHT_ARTICLES, getInsightBySlug } from "@/lib/insights"

export function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) return { title: "Not Found" }

  const canonical = `/insights/${article.slug}`
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical },
    openGraph: {
      siteName: "Spine InnovTech",
      title: article.metaTitle,
      description: article.metaDescription,
      url: absoluteUrl(canonical),
      type: "article",
      images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
    },
  }
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) notFound()

  const articleUrl = absoluteUrl(`/insights/${article.slug}`)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Insights", url: absoluteUrl("/insights") },
          { name: article.title, url: articleUrl },
        ]}
      />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-[800px] px-6 pt-[160px] pb-[40px] md:px-16">
            <Link
              href="/insights"
              className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Insights
            </Link>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary">
                {article.category}
              </span>
            </div>
            <h1 className="mt-4 text-[length:min(36px,var(--marketing-title-size))] font-semibold tracking-[-0.04em] leading-[1.15] text-[#032D60] sm:text-[length:min(44px,var(--marketing-title-size))]">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] font-medium text-muted-foreground">
              <span>{article.byline}</span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-[800px] px-6 pb-16 md:px-16">
          {article.sections.map((section, index) => (
            <section key={index} className={index === 0 ? "" : "mt-10"}>
              {section.heading ? (
                <h2 className="text-[length:min(24px,var(--marketing-title-size))] font-semibold tracking-[-0.03em] leading-[1.25] text-[#032D60]">
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.7] text-[#33465B]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        <section className="mx-auto max-w-[800px] px-6 pb-16 md:px-16">
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 text-center">
            <Link
              href={article.cta.href}
              className="inline-flex h-[42px] items-center rounded-xl px-6 text-[15px] font-semibold text-white"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              {article.cta.label}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
