import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"
import { getContentRepository } from "@/lib/content"
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy"
import { SITEMAP_EXCLUSIONS } from "@/lib/route-policy"
import { INSIGHT_ARTICLES } from "@/lib/insights"
import { absoluteUrl, publicSiteUrl } from "@/lib/site-url"

export const dynamic = "force-static"

const PRIORITY_MAP: Record<string, number> = {
  "/": 1.0,
  "/spineworkspace": 0.95,
  "/twin": 0.9,
  "/business-context": 0.9,
  "/proof": 0.9,
  "/solutions": 0.92,
  "/platform": 0.85,
  "/developers": 0.85,
  "/pricing": 0.8,
  "/integrations": 0.85,
  "/governance": 0.85,
}

const CHANGE_FREQ_MAP: Record<string, "weekly" | "monthly" | "yearly"> = {
  "/": "weekly",
  "/pricing": "weekly",
  "/blog": "weekly",
  "/changelog": "weekly",
  "/privacy": "yearly",
  "/terms": "yearly",
}

function assertPublishable(route: string) {
  if (route.includes("(") || route.includes(")") || route.includes("[") || route.includes("]")) {
    throw new Error(`Sitemap route is unresolved: ${route}`)
  }
}

function discoverRoutes(dir: string, basePath = ""): string[] {
  const routes: string[] = []
  if (!fs.existsSync(dir)) return routes
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith("_") || entry.name.startsWith(".") || entry.name.startsWith("[")) continue

    const fullPath = path.join(dir, entry.name)
    const isGroup = entry.name.startsWith("(") && entry.name.endsWith(")")
    const routePath = isGroup ? basePath : `${basePath}/${entry.name}`

    if (!isGroup) {
      const hasPage = fs.existsSync(path.join(fullPath, "page.tsx")) || fs.existsSync(path.join(fullPath, "page.ts"))
      if (hasPage) routes.push(routePath)
    }

    routes.push(...discoverRoutes(fullPath, routePath))
  }

  return routes
}

function getPriority(route: string): number {
  if (PRIORITY_MAP[route] !== undefined) return PRIORITY_MAP[route]
  const depth = route.split("/").filter(Boolean).length
  if (depth === 1) return 0.8
  if (depth === 2) return 0.7
  return 0.5
}

function getChangeFrequency(route: string): "weekly" | "monthly" | "yearly" {
  return CHANGE_FREQ_MAP[route] || "monthly"
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), "app")
  const routes = new Set<string>()

  if (fs.existsSync(path.join(appDir, "page.tsx")) || fs.existsSync(path.join(appDir, "page.ts"))) {
    routes.add("/")
  }

  for (const route of discoverRoutes(appDir)) routes.add(route)
  for (const solution of PUBLIC_SOLUTIONS) routes.add(marketingPathForSolution(solution.slug))

  for (const route of [...routes]) {
    if (SITEMAP_EXCLUSIONS.has(route)) routes.delete(route)
  }

  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>()

  for (const route of routes) {
    assertPublishable(route)
    const url = route === "/" ? publicSiteUrl : absoluteUrl(route)
    byUrl.set(url, {
      url,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    })
  }

  const repo = getContentRepository()
  const articles = await repo.listArticles({ kind: "blog", status: "published" })
  for (const post of articles) {
    const route = `/blog/${post.slug}`
    assertPublishable(route)
    const url = absoluteUrl(route)
    byUrl.set(url, {
      url,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  for (const article of INSIGHT_ARTICLES) {
    const route = `/insights/${article.slug}`
    assertPublishable(route)
    const url = absoluteUrl(route)
    byUrl.set(url, {
      url,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  return [...byUrl.values()]
}
