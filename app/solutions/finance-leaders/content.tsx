import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { ExecutiveDashboardLayout } from "../_shared/ExecutiveDashboardLayout";

export function FinanceLeadersContent() {
  return (
    <ExecutiveDashboardLayout
      domainFeatures={<SolutionDomainFeatures slug="finance-leaders" />}
      role="Finance Leaders"
      headline="Know the answer before the board asks."
      subheadline="Collections, cash flow, and revenue risk — connected to what's actually happening with your customers, not just what's on the invoice."
      ctaLabel="See the workspace →"
      accentColor="rgba(45,212,191,0.5)"
      beforeAfter={[
        {
          label: "Collections",
          before: "Call customers sorted by days overdue. The biggest debtor gets called first — even if they're your happiest customer.",
          after: "Collections prioritized by customer health + payment history. Healthy customers get a gentle nudge; at-risk ones get a different conversation.",
        },
        {
          label: "Cash forecast",
          before: "Spreadsheet forecast based on invoice aging. Doesn't know that 3 of your top accounts are about to churn.",
          after: "AI-weighted forecast using customer health, engagement, and payment patterns. You see what's actually coming in.",
        },
        {
          label: "Quarter-end",
          before: "Two days reconstructing the decision trail for audit. 'Why did we write off that invoice? Who approved it?'",
          after: "Every write-off, adjustment, and collection action logged with full context from day one. Audit-ready always.",
        },
        {
          label: "Revenue protection",
          before: "Finance finds out about a customer's problems after CS does. The collection call is already awkward.",
          after: "Finance sees the same health signals as CS — in real time. Collections informed by the full customer picture.",
        },
      ]}
      dashboardCards={[
        { title: "Smart Collections Queue", desc: "Overdue invoices ranked by health and payment likelihood. AI drafts tone-appropriate messages. You approve before sending." },
        { title: "Revenue Leak Dashboard", desc: "Billed-not-delivered and delivered-not-billed gaps — surfaced in real time, not at reconciliation." },
        { title: "Cash Flow Intelligence", desc: "AI-weighted forecast using customer health, payment patterns, and engagement — not just invoice aging." },
        { title: "Write-Off Risk Panel", desc: "Accounts trending toward write-off flagged early with full context for informed decisions." },
        { title: "Dunning Governance", desc: "Every collection message reviewed and approved before sending. Tone matched to customer relationship and health." },
        { title: "Compliance Audit Trail", desc: "Every revenue decision logged — who proposed it, what data drove it, who approved it, when it executed." },
      ]}
      deepDives={[
        { title: "Collections that make sense", desc: "Stop chasing invoices by aging alone. See which customers are healthy (and will pay) versus which are at risk (and need a different approach)." },
        { title: "Revenue protection from day one", desc: "When billing and delivery are connected, you catch gaps immediately — before they become write-offs or audit findings." },
        { title: "Cash flow forecasts from real signals", desc: "AI-weighted forecasts that account for customer health and payment history — not just what the spreadsheet says." },
      ]}
      governance="Every dunning message and write-off requires your approval. AI recommends — you control what goes out."
      connectors={["QuickBooks", "NetSuite", "Sage", "Stripe", "Salesforce", "HubSpot", "Zendesk"]}
      metrics={["Days Sales Outstanding", "Bad Debt Rate", "Cash Forecast Accuracy", "Collection Efficiency"]}
      outcomes={[
        { stat: "12%", label: "Faster Cash Conversion" },
        { stat: "100%", label: "Audit-Ready" },
        { stat: "$250K+", label: "Saved per $10M ARR" },
        { stat: "0", label: "Rogue Write-Offs" },
      ]}
    />
  );
}
