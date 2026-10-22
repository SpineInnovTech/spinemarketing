import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine — The foundation for connected business work | Spine InnovTech",
  description:
    "Spine is the foundation Spine InnovTech builds so humans and AI can share one governed view of the business, while existing tools keep the record.",
  alternates: { canonical: "/spine" },
  openGraph: {
    title: "Spine — The foundation for connected business work | Spine InnovTech",
    description:
      "Spine is the foundation Spine InnovTech builds so humans and AI can share one governed view of the business, while existing tools keep the record.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Spine", url: absoluteUrl("/spine") },
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
