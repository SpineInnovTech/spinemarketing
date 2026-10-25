import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TwinContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine Twin — Context-aware AI within human authority | Spine InnovTech",
  description:
    "Spine Twin looks into things, prepares work and suggests next steps from the context it is allowed to use. Important actions wait for a person's approval.",
  alternates: { canonical: "/twin" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Spine Twin — Context-aware AI within human authority | Spine InnovTech",
    description:
      "Spine Twin looks into things, prepares work and suggests next steps from the context it is allowed to use. Important actions wait for a person's approval.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function TwinPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Technology", url: absoluteUrl("/platform") },
        { name: "Spine Twin", url: absoluteUrl("/twin") },
      ]} />
      <Header />
      <main id="main">
        <TwinContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
