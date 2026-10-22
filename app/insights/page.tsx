import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InsightsIndex } from "@/components/marketing/insights-index"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Insights | Spine InnovTech",
  description:
    "Perspectives on connected workspaces, AI governance, and operational continuity from Spine InnovTech.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Spine InnovTech",
    description:
      "Perspectives on connected workspaces, AI governance, and operational continuity from Spine InnovTech.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
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
        <InsightsIndex />
      </main>
      <Footer />
    </div>
  )
}
