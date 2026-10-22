import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AccountSuccessContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Account Success — One Customer, One Record | Spine InnovTech",
  description:
    "Detect churn signals across 4+ tools before it's too late. Cross-tool entity matching, confidence scoring, and human-approved merges. One customer. One record.",
  alternates: { canonical: "/account-success" },
  openGraph: {
    title: "Account Success — One Customer, One Record | Spine InnovTech",
    description:
      "Detect churn signals across 4+ tools before it's too late. Cross-tool entity matching with confidence scoring.",
    images: [{ url: "/images/campaign/Banner-AccountSuccess-A.jpg", width: 1584, height: 396, alt: "Spine Workspace Account Success" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Account Success — One Customer, One Record | Spine InnovTech",
    description: "Detect churn signals across 4+ tools before it's too late.",
    images: ["/images/campaign/Banner-AccountSuccess-A.jpg"],
  },
}

export default function AccountSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Account Success", url: absoluteUrl("/account-success") },
      ]} />
      <Header />
      <main id="main">
        <AccountSuccessContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
