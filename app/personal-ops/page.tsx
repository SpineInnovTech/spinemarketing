import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PersonalOpsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Personal Ops — Your Morning, Auto-Organized | Spine InnovTech",
  description:
    "Replace 45 minutes of app-hopping with a single morning brief. A calm workspace above all your apps — connect, surface insights, approve what happens.",
  alternates: { canonical: "/personal-ops" },
  openGraph: {
    title: "Personal Ops — Your Morning, Auto-Organized | Spine InnovTech",
    description: "Replace 45 minutes of app-hopping with a single morning brief. A calm workspace above all your apps.",
    images: [{ url: "/images/campaign/Banner-PersonalOps-A.jpg", width: 1584, height: 396, alt: "Spine Workspace Personal Ops" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Ops — Your Morning, Auto-Organized | Spine InnovTech",
    description: "Replace 45 minutes of app-hopping with a single morning brief.",
    images: ["/images/campaign/Banner-PersonalOps-A.jpg"],
  },
}

export default function PersonalOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Personal Ops", url: absoluteUrl("/personal-ops") },
      ]} />
      <Header />
      <main id="main">
        <PersonalOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
