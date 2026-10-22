import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PageHero } from "@/components/marketing/page-hero"
import { getContentRepository } from "@/lib/content"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Insights & Articles | Spine InnovTech",
  description: "Insights on connected workspaces, AI governance, and operational intelligence.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights & Articles | Spine InnovTech",
    description: "Insights on connected workspaces, AI governance, and operational intelligence.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

function ArticleCard({ post }: { post: Awaited<ReturnType<ReturnType<typeof getContentRepository>["listArticles"]>>[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group arvio-card flex flex-col p-6 transition-all hover:shadow-lg"
    >
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mt-4 text-[20px] font-semibold tracking-[-0.03em] leading-[1.3] group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.5] text-muted-foreground">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[13px] font-medium text-muted-foreground">
          <span>{post.author.name}</span>
          {post.readingTimeLabel ? (
            <>
              <span>·</span>
              <span>{post.readingTimeLabel}</span>
            </>
          ) : null}
        </div>
        <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  )
}

export default async function BlogPage() {
  const repo = getContentRepository()
  const published = await repo.listArticles({ kind: "blog", status: "published" })
  const featured = published.filter((p) => p.featured)
  const latest = published.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
        ]}
      />
      <Header />
      <main id="main">
        <PageHero
          badge="Insights & Articles"
          headline="Product thinking and business context."
          subhead="Articles on connected workspaces, AI governance, and operational continuity from Spine InnovTech."
          primaryCta={{ label: "Company updates", href: "/updates" }}
          secondaryCta={{ label: "Product changelog", href: "/changelog" }}
        />

        {featured.length > 0 ? (
          <section className="mx-auto max-w-[1100px] px-6 pb-8 md:px-16">
            <h2 className="text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">Featured</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {featured.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-16">
          {latest.length > 0 ? (
            <>
              {featured.length > 0 ? (
                <h2 className="mb-6 text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">Latest</h2>
              ) : null}
              <div className="grid gap-6 sm:grid-cols-2">
                {(featured.length > 0 ? latest : published).map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground">No articles published yet.</p>
          )}
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
