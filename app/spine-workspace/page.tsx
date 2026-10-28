import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { SpineWorkspaceOverviewContent } from "./content"

export const metadata: Metadata = {
  title: "SpineWorkspace — A Product by Spine InnovTech",
  description:
    "SpineWorkspace is the workspace where people and AI share one view of the business, while your existing tools keep the record.",
  alternates: { canonical: "/spine-workspace" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "SpineWorkspace — A Product by Spine InnovTech",
    description:
      "SpineWorkspace is the workspace where people and AI share one view of the business, while your existing tools keep the record.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function SpineWorkspaceOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "SpineWorkspace", url: absoluteUrl("/spine-workspace") },
        ]}
      />
      <Header />
      <main id="main">
        <SpineWorkspaceOverviewContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
