import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InsightsIndex } from "@/components/marketing/insights-index"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Insights & Articles | Spine InnovTech",
  description: "Insights on connected workspaces, people approving AI, and work that continues.",
  // Insights lives canonically at /insights; /blog is the article alias that
  // continues to host /blog/<slug> permalinks. Point the index canonical at /insights.
  alternates: { canonical: "/insights" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Insights & Articles | Spine InnovTech",
    description: "Insights on connected workspaces, people approving AI, and work that continues.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function BlogPage() {
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
        <InsightsIndex />
      </main>
      <Footer />
    </div>
  )
}
