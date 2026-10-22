import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RevOpsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "RevOps & Business Operations | Spine InnovTech",
  description:
    "Pipelines, headcount, projects, exceptions — connected and actionable.",
  alternates: { canonical: "/solutions/revops" },
  openGraph: {
    title: "RevOps & Business Operations | Spine InnovTech",
    description: "Pipelines, headcount, projects, exceptions — connected and actionable.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function RevOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "RevOps", url: absoluteUrl("/solutions/revops") },
      ]} />
      <Header />
      <main id="main">
        <RevOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
