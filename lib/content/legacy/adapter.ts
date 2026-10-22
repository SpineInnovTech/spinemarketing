import { posts } from "@/content/blog"
import { markdownToPortableText } from "@/lib/content/markdown-to-blocks"
import type { ContentRepository } from "@/lib/content/repository"
import type {
  Article,
  ArticleKind,
  ArticleSummary,
  Author,
  ContentStatus,
  ListArticlesParams,
} from "@/lib/content/types"

const DEFAULT_AUTHOR: Author = {
  slug: "spine-innovlabs-team",
  name: "Spine InnovTech Team",
}

function mapPostToSummary(post: (typeof posts)[number]): ArticleSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    kind: "blog" satisfies ArticleKind,
    status: "published" satisfies ContentStatus,
    publishedAt: post.date,
    author: { ...DEFAULT_AUTHOR, name: post.author },
    category: post.category
      ? { slug: slugify(post.category), title: post.category }
      : undefined,
    topics: [],
    tags: post.tags,
    featured: post.slug === "stop-being-the-human-api",
    readingTimeLabel: post.readTime,
  }
}

function mapPostToArticle(post: (typeof posts)[number]): Article {
  const summary = mapPostToSummary(post)
  return {
    ...summary,
    content: markdownToPortableText(post.body),
    seo: {
      title: `${post.title} | SpineWorkspace Blog`,
      description: post.description,
    },
  }
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export class LegacyContentRepository implements ContentRepository {
  async listArticles(params?: ListArticlesParams): Promise<ArticleSummary[]> {
    let list = posts.map(mapPostToSummary)
    if (params?.kind) list = list.filter((a) => a.kind === params.kind)
    if (params?.status) list = list.filter((a) => a.status === params.status)
    if (params?.featured === true) list = list.filter((a) => a.featured)
    if (params?.categorySlug) {
      list = list.filter((a) => a.category?.slug === params.categorySlug)
    }
    list.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    if (params?.limit) list = list.slice(0, params.limit)
    return list
  }

  async getArticleBySlug(slug: string): Promise<Article | null> {
    const post = posts.find((p) => p.slug === slug)
    return post ? mapPostToArticle(post) : null
  }
}
