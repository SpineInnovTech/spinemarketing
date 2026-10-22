import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { SignalStoryLayout } from "../_shared/SignalStoryLayout";

export function SaasContent() {
  return (
    <SignalStoryLayout
      domainFeatures={<SolutionDomainFeatures slug="saas" />}
      category="SaaS & Subscription"
      headline="Stop finding out about churn at renewal."
      subheadline="Bring adoption, support, commercial commitments, and relationship changes together to prepare customer decisions before the contract review."
      ctaLabel="See it with your data →"
      ctaHref="/contact?intent=demo"
      accentColor="rgba(45,212,191,0.5)"
      beforeAfter={[
        {
          before: "You check product analytics, then CRM, then support — three tools, three stories, no single truth.",
          after: "One page shows usage, support tickets, billing status, and engagement — updated live, no tab-switching.",
        },
        {
          before: "A champion leaves the customer's company and nobody notices until the renewal call falls flat.",
          after: "AI detects champion silence and org changes 90 days out, flags the account, and drafts re-engagement.",
        },
        {
          before: "Churn risk surfaces when the customer asks to cancel — not when you could have saved them.",
          after: "Usage drop + support spike + payment delay = early warning. You intervene weeks before renewal.",
        },
        {
          before: "QBR decks take 2+ hours of copy-pasting from five different dashboards.",
          after: "One-click QBR deck generated from real adoption data. Ready in seconds, not hours.",
        },
      ]}
      signals={[
        { label: "Usage telemetry ingested", detail: "Product analytics from Mixpanel, Amplitude, or Segment flow into SpineWorkspace automatically." },
        { label: "Health score calculated", detail: "AI combines logins, feature adoption, support tickets, and payment history into one score." },
        { label: "Risk signal fires", detail: "When usage drops 30% and the champion hasn't replied, you see it in your Signal Center." },
        { label: "Evidence shown, action drafted", detail: "AI shows the exact data behind the alert and drafts the outreach email for you." },
        { label: "You approve, system executes", detail: "One click sends the email, updates the CRM, and creates the follow-up task." },
      ]}
      capabilities={[
        { title: "See who's actually using your product", desc: "Health scores built from real adoption data — logins, feature usage, and engagement — not guesswork." },
        { title: "Get warned before customers leave", desc: "When support tickets spike, payments slow, and usage drops — you know immediately, not at renewal." },
        { title: "Spot expansion opportunities automatically", desc: "AI identifies power users near their limits and drafts the upgrade conversation for your review." },
        { title: "Build QBR decks in seconds", desc: "One click generates a customer review deck from real adoption data. No more copy-pasting from five tools." },
      ]}
      governance="Every health score change shows you the source data. No message goes to a customer without your review and approval."
      connectors={["Salesforce", "HubSpot", "Stripe", "Chargebee", "Zendesk", "Segment", "Amplitude", "Mixpanel", "Slack", "GitHub"]}
      metrics={["Net Revenue Retention", "Logo Retention", "Time-to-Value", "Expansion Revenue", "Renewal Forecast Accuracy"]}
      outcomes={[
        { stat: "+12%", label: "Renewal Rate" },
        { stat: "6%", label: "Higher Expansion" },
        { stat: "75%", label: "Less Prep Time" },
        { stat: "30 days", label: "Earlier Warning" },
      ]}
    />
  );
}
