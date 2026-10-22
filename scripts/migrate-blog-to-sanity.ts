/**
 * One-time migration: legacy content/blog → Sanity article documents.
 *
 * Requires: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_WRITE_TOKEN
 * Run: npx tsx scripts/migrate-blog-to-sanity.ts
 */
import { createClient } from "@sanity/client"
import { posts } from "../content/blog"
import { markdownToPortableText } from "../lib/content/markdown-to-blocks"

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET ?? "production"
const token = process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error("Set SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN (or SANITY_API_TOKEN with write access).")
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
})

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

async function ensureAuthor() {
  const id = "author-spine-innovlabs-team"
  await client.createIfNotExists({
    _id: id,
    _type: "author",
    name: "Spine InnovTech Team",
    slug: { _type: "slug", current: "spine-innovlabs-team" },
  })
  return { _type: "reference" as const, _ref: id }
}

async function ensureCategory(title: string | undefined) {
  if (!title) return undefined
  const slug = slugify(title)
  const id = `category-${slug}`
  await client.createIfNotExists({
    _id: id,
    _type: "category",
    title,
    slug: { _type: "slug", current: slug },
    pillar:
      title === "Product"
        ? "product"
        : title === "Governance and trust"
          ? "governance-trust"
          : title === "Business context"
            ? "business-context"
            : undefined,
  })
  return { _type: "reference" as const, _ref: id }
}

async function migratePost(
  post: (typeof posts)[number],
  authorRef: { _type: "reference"; _ref: string },
) {
  const categoryRef = await ensureCategory(post.category)
  const id = `article-${post.slug}`

  await client.createOrReplace({
    _id: id,
    _type: "article",
    title: post.title,
    slug: { _type: "slug", current: post.slug },
    excerpt: post.description,
    content: markdownToPortableText(post.body),
    status: "published",
    kind: "blog",
    publishedAt: post.date,
    author: authorRef,
    category: categoryRef,
    tags: post.tags,
    readingTimeLabel: post.readTime,
    featured: post.slug === "stop-being-the-human-api",
    seo: {
      title: `${post.title} | SpineWorkspace Blog`,
      description: post.description,
    },
  })

  console.log(`✓ ${post.slug}`)
}

async function main() {
  const authorRef = await ensureAuthor()
  for (const post of posts) {
    await migratePost(post, authorRef)
  }
  console.log("Migration complete.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
