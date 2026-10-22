import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionWorkspaceFooter } from "@/components/marketing/solution-workspace-footer"
import { IndividualContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Individual Professionals | Spine InnovTech",
  description:
    "Morning brief, session memory, task queue — your day, organized.",
  alternates: { canonical: "/solutions/individual" },
  openGraph: {
    title: "Individual Professionals | Spine InnovTech",
    description: "Morning brief, session memory, task queue — your day, organized.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Individual", url: absoluteUrl("/solutions/individual") },
      ]} />
      <Header />
      <main id="main">
        <IndividualContent />
        <SolutionWorkspaceFooter slug="individual" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
