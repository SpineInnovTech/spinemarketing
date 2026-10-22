import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine & Intelligence | Spine InnovTech",
  description:
    "Spine Workspace: the shared contextual layer under your business. Unifies every app. AI reasons with evidence. You approve.",
  alternates: { canonical: "/spine" },
  openGraph: {
    title: "Spine & Intelligence | Spine InnovTech",
    description: "Spine Workspace: the shared contextual layer under your business. Unifies every app. AI reasons with evidence. You approve.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Spine & Intelligence", url: absoluteUrl("/spine") },
      ]} />
      <Header />
      <main id="main">
        <SpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
