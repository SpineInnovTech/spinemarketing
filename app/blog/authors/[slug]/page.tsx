import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContentRepository } from "@/lib/content"
import { absoluteUrl } from "@/lib/site-url"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export async function generateStaticParams() {
  const repo = getContentRepository()
  const articles = await repo.listArticles({ kind: "blog", status: "published" })
  const slugs = new Set(articles.map((a) => a.author.slug))
  return [...slugs].map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const repo = getContentRepository()
  const articles = await repo.listArticles({ kind: "blog", status: "published" })
  const author = articles.find((a) => a.author.slug === slug)?.author
  if (!author) return { title: "Not Found" }
  return {
    title: `${author.name} | SpineWorkspace Blog`,
    description: author.bio ?? `Articles by ${author.name}.`,
    alternates: { canonical: `/blog/authors/${slug}` },
  }
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const repo = getContentRepository()
  const articles = await repo.listArticles({ kind: "blog", status: "published" })
  const byAuthor = articles.filter((a) => a.author.slug === slug)
  const author = byAuthor[0]?.author
  if (!author) notFound()

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
          { name: author.name, url: absoluteUrl(`/blog/authors/${slug}`) },
        ]}
      />
      <Header />
      <main id="main" className="mx-auto max-w-[800px] px-6 pt-[160px] pb-24 md:px-16">
        <h1 className="text-[length:min(36px,var(--marketing-title-size))] font-semibold tracking-[-0.04em] text-[#032D60]">{author.name}</h1>
        {author.role ? <p className="mt-2 text-[15px] font-medium text-muted-foreground">{author.role}</p> : null}
        {author.bio ? <p className="mt-4 text-[16px] leading-relaxed text-[#33465B]">{author.bio}</p> : null}
        <h2 className="mt-12 text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">Articles</h2>
        <ul className="mt-4 space-y-4">
          {byAuthor.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-[17px] font-semibold text-primary hover:underline">
                {post.title}
              </Link>
              <p className="mt-1 text-[14px] text-muted-foreground">{post.excerpt}</p>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="mt-10 inline-block text-[14px] font-medium text-primary hover:underline">
          ← Back to blog
        </Link>
      </main>
      <Footer />
    </div>
  )
}
