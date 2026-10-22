import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { ExecutiveDashboardLayout } from "../_shared/ExecutiveDashboardLayout";

export function FoundersContent() {
  return (
    <ExecutiveDashboardLayout
      domainFeatures={<SolutionDomainFeatures slug="founders" />}
      role="Founders & CXOs"
      headline="One screen. Every red flag. Full context."
      subheadline="Stop asking five people for the same number. See your forecast, your biggest risks, and what needs your attention — updated live, not in a weekly report."
      ctaLabel="See the executive view →"
      accentColor="rgba(251,191,36,0.5)"
      beforeAfter={[
        {
          label: "Monday morning",
          before: "Open Slack, email, CRM, billing dashboard. Ask 3 people for the latest numbers. Get 3 different answers.",
          after: "Open SpineWorkspace. One screen: top 10 at-risk accounts, forecast drift, cash runway, pipeline health — all live.",
        },
        {
          label: "Board prep",
          before: "Three days of slide-building. CFO sends one version, CRO sends another. Numbers don't match. Scramble to reconcile.",
          after: "One click. Board deck generated from live data — NRR, burn rate, pipeline coverage, top risks — with evidence links.",
        },
        {
          label: "Escalation",
          before: "VP of CS tells you a big account is at risk. You ask 4 follow-up questions. Nobody has the full picture.",
          after: "You see the account's full story: usage trends, support history, payment status, recent communications. Act in minutes, not days.",
        },
        {
          label: "Strategic decisions",
          before: "Gut feel plus a spreadsheet. 'I think we're losing enterprise customers but I'm not sure why.'",
          after: "Evidence-backed signals: 'Enterprise churn correlates with onboarding stalls in month 2. Here are the 8 accounts at risk.'",
        },
      ]}
      dashboardCards={[
        { title: "Red-Flag Accounts", desc: "Your top accounts ranked by risk and revenue. Click any one and see the full picture — usage, support, payments, communications." },
        { title: "Forecast Drift", desc: "Pipeline coverage, deal slippage, and renewal risk — compared to last week. You see what moved and why." },
        { title: "Cash Runway", desc: "Burn rate, collections forecast, and revenue trajectory — connected to actual customer health, not just projections." },
        { title: "Monday Brief", desc: "A single-screen summary of what changed this week. Auto-generated every Monday with evidence links." },
        { title: "Escalation Queue", desc: "Critical signals from across the org — flagged for executive review with full context and recommended actions." },
        { title: "Team Pulse", desc: "Cross-functional signal activity: how many risks surfaced, how many actions approved, how fast things are moving." },
      ]}
      deepDives={[
        { title: "Board-ready in seconds, not days", desc: "NRR, burn rate, cash runway, and pipeline coverage — pulled from your actual systems. One click, not three days of prep." },
        { title: "Decisions backed by evidence", desc: "Every signal shows you the exact data behind it. When you act, you know why. When you share it with the board, they can verify." },
        { title: "Full audit trail across the org", desc: "See every AI-suggested action — what was proposed, who approved it, what happened. Governance you can actually verify." },
      ]}
      governance="You see what changed and why. No critical action happens without executive visibility. Full audit trail."
      connectors={["Salesforce", "HubSpot", "Stripe", "QuickBooks", "Zendesk", "Jira", "Asana", "Slack"]}
      metrics={["Net Revenue Retention", "Burn Rate", "Cash Runway", "Pipeline Coverage", "At-Risk Revenue"]}
      outcomes={[
        { stat: "30%", label: "Less Board Prep" },
        { stat: "2×", label: "Decision Speed" },
        { stat: "5%", label: "ARR Saved" },
        { stat: "100%", label: "Audit-Ready" },
      ]}
    />
  );
}
