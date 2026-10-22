import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { DayInLifeLayout } from "../_shared/DayInLifeLayout";

export function CustomerSuccessRoleContent() {
  return (
    <DayInLifeLayout
      domainFeatures={<SolutionDomainFeatures slug="customer-success" />}
      role="Customer Success & Account Managers"
      headline="Walk into every call already knowing what changed."
      subheadline="Your accounts, their health, their history — one calm view that tells you where to spend your time today."
      ctaLabel="See your command center →"
      ctaHref="/product"
      accentColor="rgba(45,212,191,0.5)"
      beforeAfter={[
        {
          before: "Monday morning. 35 accounts. You open Salesforce, then Zendesk, then Stripe, then Slack — piecing together who needs attention.",
          after: "Monday morning. One screen. Your top 5 at-risk accounts are ranked by urgency with full context. You know exactly where to start.",
        },
        {
          before: "A customer's champion left the company two weeks ago. You find out during the renewal call when nobody knows who you are.",
          after: "Champion silence detected in 48 hours. AI drafted a re-engagement email to the new stakeholder. You approved it last Tuesday.",
        },
        {
          before: "QBR prep: 2 hours of copy-pasting usage charts, support metrics, and billing data into slides.",
          after: "QBR prep: one click. Deck generated from real data — adoption trends, ticket resolution, feature usage, expansion signals.",
        },
        {
          before: "You escalate an account to your manager, but they don't have context. Another 30 minutes explaining the situation.",
          after: "Escalation includes the full evidence trail — support history, usage trends, payment status, communications. Everyone sees the same picture.",
        },
      ]}
      timeline={[
        { time: "8:00", title: "Morning Brief", desc: "Open SpineWorkspace. Your Signal Center shows 3 accounts that need attention today: one usage drop, one support spike, one payment delay. Everything else is green." },
        { time: "8:30", title: "Triage the usage drop", desc: "Acme Corp's daily active users dropped 30% last week. AI shows the evidence — the team stopped using the reporting module after their admin left. AI drafted an onboarding email to the new admin." },
        { time: "9:15", title: "Prepare for the 10am call", desc: "Meeting with GlobalTech in 45 minutes. One click generates a prep sheet: health score, recent tickets, feature adoption, contract details, last 5 email threads." },
        { time: "11:00", title: "Handle the support spike", desc: "NovaPay filed 4 tickets this week — all about the same integration issue. AI summarized the pattern and drafted an escalation to engineering with the evidence attached." },
        { time: "2:00", title: "Spot the expansion signal", desc: "DataFlow hit 95% of their seat limit and added 3 new team members last month. AI drafted an upgrade conversation. You review, tweak one line, and send." },
        { time: "4:00", title: "End-of-day review", desc: "Check the Signal Center. Two new signals queued for tomorrow. Everything else is handled. Go home knowing nothing was missed." },
      ]}
      capabilities={[
        { title: "Review renewal risk before the customer conversation", desc: "Relate usage changes, support issues, and payment signals to the available account context and evidence." },
        { title: "Expansion signals surfaced automatically", desc: "When a customer hits usage limits or adds team members, AI drafts the upgrade conversation." },
        { title: "QBR decks from real data", desc: "Stop spending hours assembling slides. One click generates a review deck from actual adoption and health data." },
        { title: "Escalations with full context", desc: "When you escalate, everyone sees the same picture — support history, usage, payment status, communications." },
      ]}
      governance="AI suggests what to do — you decide what actually happens. No customer action without your sign-off."
      connectors={["Salesforce", "HubSpot", "Zendesk", "Intercom", "Stripe", "Chargebee", "Segment", "Amplitude", "Slack", "Gmail"]}
      metrics={["Net Revenue Retention", "Gross Revenue Retention", "Time-to-Intervention", "Expansion Rate", "Renewal Forecast Accuracy"]}
      outcomes={[
        { stat: "15%", label: "Higher NRR" },
        { stat: "2 weeks", label: "Faster Renewal Cycle" },
        { stat: "3 hrs", label: "Saved per Week" },
        { stat: "90 days", label: "Earlier Risk Detection" },
      ]}
    />
  );
}
