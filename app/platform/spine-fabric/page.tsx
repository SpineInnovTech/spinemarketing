import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineFabricContent } from "./content"
import { SpineStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine Fabric — The contextual foundation | Spine InnovTech",
  description:
    "Spine Fabric relates authorized records, evidence, goals, decisions and outcomes into governed business context, while existing tools keep the record.",
  alternates: { canonical: "/platform/spine-fabric" },
  openGraph: {
    title: "Spine Fabric — The contextual foundation | Spine InnovTech",
    description:
      "Spine Fabric relates authorized records, evidence, goals, decisions and outcomes into governed business context, while existing tools keep the record.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function SpineFabricPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Technology", url: absoluteUrl("/platform") },
        { name: "Spine Fabric", url: absoluteUrl("/platform/spine-fabric") },
      ]} />
      <Header />
      <main id="main">
        <SpineFabricContent />
        <SpineStickyScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
