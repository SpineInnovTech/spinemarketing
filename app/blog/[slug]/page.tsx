import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContentRepository } from "@/lib/content"
import { absoluteUrl } from "@/lib/site-url"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ArticlePortableText } from "@/components/article-portable-text"
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/structured-data"

export async function generateStaticParams() {
  const repo = getContentRepository()
  const articles = await repo.listArticles({ kind: "blog", status: "published" })
  return articles.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const repo = getContentRepository()
  const post = await repo.getArticleBySlug(slug)
  if (!post) return { title: "Not Found" }

  const title = post.seo?.title ?? `${post.title} | SpineWorkspace Blog`
  const description = post.seo?.description ?? post.excerpt
  const canonical = post.seo?.canonicalPath ?? `/blog/${post.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    robots: post.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.heroImageUrl ? [{ url: post.heroImageUrl }] : [{ url: "/og.png", width: 1200, height: 630 }],
    },
  }
}

function formatDate(isoDate: string) {
  try {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return isoDate
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const repo = getContentRepository()
  const post = await repo.getArticleBySlug(slug)
  if (!post || post.kind !== "blog" || post.status !== "published") notFound()

  const articleUrl = absoluteUrl(`/blog/${post.slug}`)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
          { name: post.title, url: articleUrl },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={articleUrl}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        authorName={post.author.name}
        imageUrl={post.heroImageUrl}
      />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-[800px] px-6 pt-[160px] pb-[80px] md:px-16">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to blog
            </Link>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-[length:min(36px,var(--marketing-title-size))] font-semibold tracking-[-0.04em] leading-[1.15] text-[#032D60] sm:text-[length:min(44px,var(--marketing-title-size))]">
              {post.title}
            </h1>
            {post.subtitle ? (
              <p className="mt-3 text-[length:min(18px,var(--marketing-body-size))] font-medium text-[#33465B]">{post.subtitle}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] font-medium text-muted-foreground">
              <Link href={`/blog/authors/${post.author.slug}`} className="hover:text-primary hover:underline">
                {post.author.name}
              </Link>
              <span>·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.readingTimeLabel ? (
                <>
                  <span>·</span>
                  <span>{post.readingTimeLabel}</span>
                </>
              ) : null}
            </div>
          </div>
        </section>

        {post.heroImageUrl ? (
          <div className="mx-auto max-w-[800px] px-6 md:px-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.heroImageUrl}
              alt=""
              className="w-full rounded-2xl object-cover"
            />
          </div>
        ) : null}

        <article className="mx-auto max-w-[800px] px-6 py-16 md:px-16">
          <ArticlePortableText value={post.content} />
        </article>

        <section className="mx-auto max-w-[800px] px-6 pb-16 md:px-16">
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 text-center">
            <p className="text-[length:min(18px,var(--marketing-body-size))] font-semibold tracking-[-0.03em]">Ready to stop translating between your tools?</p>
            <p className="mt-2 text-[15px] font-medium text-muted-foreground">See SpineWorkspace in action.</p>
            <Link
              href="/contact?intent=demo"
              className="mt-4 inline-flex h-[42px] items-center rounded-xl px-6 text-[15px] font-semibold text-white"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              Book a demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
