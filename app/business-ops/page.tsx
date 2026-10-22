import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BusinessOpsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Business Ops — 12 Tabs → One Workspace | Spine InnovTech",
  description:
    "Stop toggling between 12 tabs to find context. Cross-system visibility with AI that handles the busywork — with your approval. Zero context lost.",
  alternates: { canonical: "/business-ops" },
  openGraph: {
    title: "Business Ops — 12 Tabs → One Workspace | Spine InnovTech",
    description: "Stop toggling between 12 tabs to find context. Cross-system visibility with AI that handles the busywork.",
    images: [{ url: "/images/campaign/Banner-BusinessOps-A.jpg", width: 1584, height: 396, alt: "SpineWorkspace Business Ops" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Ops — 12 Tabs → One Workspace | Spine InnovTech",
    description: "Stop toggling between 12 tabs to find context. Zero context lost.",
    images: ["/images/campaign/Banner-BusinessOps-A.jpg"],
  },
}

export default function BusinessOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Business Ops", url: absoluteUrl("/business-ops") },
      ]} />
      <Header />
      <main id="main">
        <BusinessOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
