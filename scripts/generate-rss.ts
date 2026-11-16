// Run with: npx tsx scripts/generate-rss.ts
// Or add to build: "build": "tsx scripts/generate-rss.ts && next build"
import { writeFileSync } from "fs"

try {
  process.loadEnvFile(".env.local")
} catch {}

import { getContentRepository } from "../lib/content"
import { absoluteUrl } from "../lib/site-url"

async function main() {
  const repo = getContentRepository()
  const posts = await repo.listArticles({ kind: "blog", status: "published" })

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Spine InnovTech Blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Insights on connected workspaces, people approving AI, and work that continues.</description>
    <language>en</language>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${absoluteUrl(`/blog/${p.slug}`)}</link>
      <guid>${absoluteUrl(`/blog/${p.slug}`)}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`

  writeFileSync("public/rss.xml", rss)
  console.log("✓ RSS feed generated at public/rss.xml")
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
