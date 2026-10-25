import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/marketing/page-hero"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { COMPANY_LEGAL_NAME } from "@/lib/company"

export const metadata: Metadata = {
  title: "Privacy Policy | Spine InnovTech",
  description: "How SpineWorkspace collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Privacy Policy | Spine InnovTech",
    description: "How SpineWorkspace collects, uses, and protects your data.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Privacy Policy", url: absoluteUrl("/privacy") },
      ]} />
      <Header />
      <main id="main">
        <PageHero
          badge="Trust & Legal"
          headline="Privacy Policy"
          subhead={`${COMPANY_LEGAL_NAME} · Last updated: April 2026`}
          primaryCta={{ label: "Security overview", href: "/security" }}
          secondaryCta={{ label: "Terms & Conditions", href: "/terms" }}
        />
        <section className="mx-auto max-w-[800px] px-6 py-16 md:px-16">
          <div className="space-y-10 text-[15px] font-medium leading-[1.7] text-foreground/80">
            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">1. Information we collect</h2>
              <p className="mt-3">We collect information you provide directly: name, email, company name, and any messages you send through our contact form. When you use SpineWorkspace, we collect usage data including connected tools, workspace activity, and feature usage to improve the product.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">2. How we use your information</h2>
              <p className="mt-3">We use your information to provide and improve SpineWorkspace, communicate with you about your account, send product updates (with your consent), and ensure security and prevent fraud. We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">3. Data from connected tools</h2>
              <p className="mt-3">When you connect third-party tools, we access data necessary to provide the service. Your workspace data is isolated at the database level — no other customer can access it. Connector tokens are encrypted at rest. We do not use your business data to train AI models.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">4. Data retention</h2>
              <p className="mt-3">We retain your data for as long as your account is active. When you delete your account, we remove your workspace data within 30 days. Some data may be retained longer for legal or compliance purposes.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">5. Security</h2>
              <p className="mt-3">We use industry-standard security measures including encryption in transit and at rest, database-level tenant isolation, and regular security audits. Every action in your workspace is logged for audit purposes.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">6. Your rights</h2>
              <p className="mt-3">You can request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:connect@spineworkspace.com" className="text-primary hover:underline">connect@spineworkspace.com</a>.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">7. Cookies and analytics</h2>
              <p className="mt-3">We use Firebase Analytics to understand how visitors use our website. This collects anonymous usage data. We do not use advertising cookies or trackers.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">8. Contact</h2>
              <p className="mt-3">For privacy-related questions, contact us at <a href="mailto:connect@spineworkspace.com" className="text-primary hover:underline">connect@spineworkspace.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
