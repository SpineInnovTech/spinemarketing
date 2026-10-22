import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformHubIntro } from "./hub"
import { PlatformFAQ } from "./faq"
import { PlatformStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Technology Architecture | Spine InnovTech",
  description:
    "Explore the Spine architecture: Fabric, Workbench, Twin, Runtime and connected capabilities for business-context collaboration.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Technology Architecture | Spine InnovTech",
    description: "Shared business context, role-aware work, context-aware AI and governed execution in one connected architecture.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace Platform" }],
  },
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
      ]} />
      <Header />
      <main id="main">
        <PlatformHubIntro />
        <PlatformStickyScroll />
        <PlatformFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
