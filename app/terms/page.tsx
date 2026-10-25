import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/marketing/page-hero"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { COMPANY_LEGAL_NAME } from "@/lib/company"

export const metadata: Metadata = {
  title: "Terms & Conditions | Spine InnovTech",
  description: "Terms of service for using SpineWorkspace.",
  alternates: { canonical: "/terms" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Terms & Conditions | Spine InnovTech",
    description: "Terms of service for using SpineWorkspace.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Terms & Conditions", url: absoluteUrl("/terms") },
      ]} />
      <Header />
      <main id="main">
        <PageHero
          badge="Trust & Legal"
          headline="Terms & Conditions"
          subhead={`${COMPANY_LEGAL_NAME} · Last updated: April 2026`}
          primaryCta={{ label: "Privacy Policy", href: "/privacy" }}
          secondaryCta={{ label: "Security overview", href: "/security" }}
        />
        <section className="mx-auto max-w-[800px] px-6 py-16 md:px-16">
          <div className="space-y-10 text-[15px] font-medium leading-[1.7] text-foreground/80">
            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">1. Acceptance of terms</h2>
              <p className="mt-3">By accessing or using SpineWorkspace, you agree to be bound by these terms. If you do not agree, do not use the service.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">2. Service description</h2>
              <p className="mt-3">SpineWorkspace is a business-context workspace that connects your business tools, organizes your data, and provides AI-assisted insights with human approval. The service is provided &quot;as is&quot; and we continuously improve it.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">3. Your account</h2>
              <p className="mt-3">You are responsible for maintaining the security of your account credentials. You must provide accurate information when creating an account. You are responsible for all activity under your account.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">4. Your data</h2>
              <p className="mt-3">You retain ownership of all data you connect to or create within SpineWorkspace. We do not claim ownership of your business data. You grant us a limited license to process your data solely to provide the service.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">5. Acceptable use</h2>
              <p className="mt-3">You agree not to use SpineWorkspace for any unlawful purpose, to attempt to gain unauthorized access to other accounts, or to interfere with the service&apos;s operation.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">6. Payment and billing</h2>
              <p className="mt-3">Paid plans are billed according to the pricing terms agreed at signup. We may change pricing with 30 days notice. Refunds are handled on a case-by-case basis.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">7. Limitation of liability</h2>
              <p className="mt-3">SpineWorkspace is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">8. Termination</h2>
              <p className="mt-3">Either party may terminate the agreement at any time. Upon termination, your data will be available for export for 30 days, after which it will be deleted.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">9. Contact</h2>
              <p className="mt-3">Questions about these terms? Contact us at <a href="mailto:connect@spineworkspace.com" className="text-primary hover:underline">connect@spineworkspace.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
