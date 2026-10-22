import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionWorkspaceFooter } from "@/components/marketing/solution-workspace-footer"
import { FinanceIndustryContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Finance | Spine InnovTech",
  description:
    "Revenue, risk, collections, cash — the financial picture that finance leaders actually need to run the business.",
  alternates: { canonical: "/solutions/finance" },
  openGraph: {
    title: "Finance | Spine InnovTech",
    description: "Revenue, risk, collections, cash — the financial picture that finance leaders actually need to run the business.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Finance", url: absoluteUrl("/solutions/finance") },
      ]} />
      <Header />
      <main id="main">
        <FinanceIndustryContent />
        <SolutionWorkspaceFooter slug="finance" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
