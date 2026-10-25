import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionWorkspaceFooter } from "@/components/marketing/solution-workspace-footer"
import { FoundersContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Founders & CXOs | Spine InnovTech",
  description:
    "Monday brief. Revenue movement. Board pack — ready when you are.",
  alternates: { canonical: "/solutions/founders" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Founders & CXOs | Spine InnovTech",
    description: "Monday brief. Revenue movement. Board pack — ready when you are.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Founders & CXOs", url: absoluteUrl("/solutions/founders") },
      ]} />
      <Header />
      <main id="main">
        <FoundersContent />
        <SolutionWorkspaceFooter slug="founders" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
