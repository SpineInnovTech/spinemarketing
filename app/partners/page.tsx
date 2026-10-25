import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { PartnersContent } from "./content"

export const metadata: Metadata = {
  title: "Partnerships — Spine InnovTech",
  description:
    "Explore working with Spine InnovTech across technology and AI tools, integration expertise, business workflows and engineering research.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partnerships — Spine InnovTech",
    description:
      "Explore working with Spine InnovTech across technology and AI tools, integration expertise, business workflows and engineering research.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Partnerships", url: absoluteUrl("/partners") },
        ]}
      />
      <Header />
      <main id="main">
        <PartnersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
