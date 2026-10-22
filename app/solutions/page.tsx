import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionsContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { WorkspaceAuthActions } from "@/components/marketing/workspace-auth-actions"

export const metadata: Metadata = {
  title: "Solutions by Team & Industry | Spine InnovTech",
  description:
    "Explore SpineWorkspace features and workflows for sales, customer success, finance, operations, and industry-specific work. Sign up or sign in to your authorized workspace.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions by Team & Industry | Spine InnovTech",
    description: "Explore domain-specific features, connected context, and governed workflows by team and industry.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace Solutions" }],
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
      ]} />
      <Header />
      <main id="main">
        <SolutionsContent />
        <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8" aria-label="Enter SpineWorkspace">
          <h2 className="text-[length:min(1.5rem,var(--marketing-heading-size))]/[var(--tw-leading,1.3333333333)] font-semibold text-[#082B5E]">Bring your team’s work into SpineWorkspace.</h2>
          <WorkspaceAuthActions />
        </section>
        <StatsBar
          stats={[
            { value: 13, suffix: "", label: "Business domains" },
            { value: 151, suffix: "", label: "Workbench views" },
            { value: 65, suffix: "", label: "Connector configurations" },
            { value: 1, suffix: "", label: "Unified workspace" },
          ]}
        />
        <BenefitsGrid
          tag="Why SpineWorkspace"
          heading="Same Spine. Every context."
        />
        <TestimonialsSection
          heading="Illustrative solution scenarios"
          tag="Demonstration, not customer quotes"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
