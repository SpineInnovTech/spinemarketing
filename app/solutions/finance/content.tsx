import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { ExecutiveDashboardLayout } from "../_shared/ExecutiveDashboardLayout";

export function FinanceIndustryContent() {
  return (
    <ExecutiveDashboardLayout
      domainFeatures={<SolutionDomainFeatures slug="finance" />}
      role="Finance & Revenue Operations"
      headline="Collect smarter. Not just harder."
      subheadline="Stop chasing invoices blindly. See which customers can pay, which need a conversation, and which are about to churn — all in one view."
      ctaLabel="See it with your data →"
      accentColor="rgba(45,212,191,0.5)"
      beforeAfter={[
        {
          label: "Collection priority",
          before: "Sorted by days overdue. The biggest debtor gets called first regardless of health.",
          after: "Sorted by likelihood to pay. Healthy customers with late invoices get a gentle nudge; at-risk ones get a different conversation.",
        },
        {
          label: "Revenue leakage",
          before: "Billed-not-delivered and delivered-not-billed gaps found at quarter-end.",
          after: "Gaps flagged in real time. Every mismatch surfaces as a signal before it becomes a write-off.",
        },
        {
          label: "Cash forecast",
          before: "Spreadsheet-based forecasts from invoice aging. Doesn't account for customer health.",
          after: "AI-weighted forecast using payment history, customer health, and engagement data.",
        },
        {
          label: "Audit readiness",
          before: "Scrambling at quarter-end to reconstruct the decision trail.",
          after: "Every revenue-impacting decision logged with full context from day one.",
        },
      ]}
      dashboardCards={[
        { title: "Collections Risk Panel", desc: "Overdue invoices ranked by customer health, not just aging. See who will pay and who needs escalation." },
        { title: "Revenue Leak Detector", desc: "Billed-not-delivered and delivered-not-billed gaps — surfaced automatically, updated in real time." },
        { title: "Cash Flow Forecast", desc: "AI-weighted forecasts based on health, payment history, and engagement — not just what's on the invoice." },
        { title: "Dunning Queue", desc: "AI-drafted collection messages with tone matched to customer relationship. Your approval required before sending." },
        { title: "Write-Off Risk", desc: "Accounts trending toward write-off flagged early. Full context for the decision — support history, usage, engagement." },
        { title: "Compliance Audit Log", desc: "Every AI-suggested action logged with who approved it, when, and the evidence that drove it." },
      ]}
      deepDives={[
        { title: "Collections based on who will actually pay", desc: "Prioritize follow-ups by customer health and payment history. AI drafts tone-appropriate messages for your approval." },
        { title: "Catch revenue leaks early", desc: "See billed-not-delivered and delivered-not-billed gaps instantly — before they become write-offs." },
        { title: "Forecast cash flow from real signals", desc: "AI predicts collection probability using customer health, not just invoice aging." },
      ]}
      governance="Dunning and write-off decisions require your approval. AI analyzes and recommends — you control what happens."
      connectors={["QuickBooks", "NetSuite", "Sage", "Stripe", "Salesforce", "HubSpot", "Zendesk"]}
      metrics={["Days Sales Outstanding", "Bad Debt Rate", "Cash Forecast Accuracy", "Collection Efficiency"]}
      outcomes={[
        { stat: "12%", label: "Lower DSO" },
        { stat: "$250K+", label: "Saved per $10M ARR" },
        { stat: "100%", label: "Audit-Ready" },
        { stat: "2×", label: "Faster Collections" },
      ]}
    />
  );
}
