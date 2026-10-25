import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { CareersContent } from "./content"

export const metadata: Metadata = {
  title: "Careers — Spine InnovTech",
  description:
    "Explore the problems Spine InnovTech works on and introduce yourself if you care about business context, integration and responsible AI.",
  alternates: { canonical: "/careers" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Careers — Spine InnovTech",
    description:
      "Explore the problems Spine InnovTech works on and introduce yourself if you care about business context, integration and responsible AI.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Careers", url: absoluteUrl("/careers") },
        ]}
      />
      <Header />
      <main id="main">
        <CareersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
