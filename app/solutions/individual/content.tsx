import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { DayInLifeLayout } from "../_shared/DayInLifeLayout";

export function IndividualContent() {
  return (
    <DayInLifeLayout
      domainFeatures={<SolutionDomainFeatures slug="individual" />}
      role="Individual Professionals"
      headline="Your day, organised. Your context, remembered."
      subheadline="One calm view of today's priorities — with an AI that remembers what you discussed yesterday and picks up where you left off."
      ctaLabel="Try Personal Ops →"
      ctaHref="/personal-ops"
      accentColor="rgba(139,92,246,0.5)"
      beforeAfter={[
        {
          before: "8:15am. Open email (47 unread). Open Slack (12 channels with notifications). Open Jira (8 tickets). Open calendar (5 meetings). Where do you start?",
          after: "8:15am. Open SpineWorkspace. Morning Brief: 3 things that need your attention today, ranked by urgency. Everything else can wait.",
        },
        {
          before: "You had an important conversation last Thursday about a client issue. What was the context? Scroll through Slack, email, and Notion for 15 minutes.",
          after: "Ask the AI: 'What did I discuss about the Acme issue last week?' It pulls up the full context in 5 seconds.",
        },
        {
          before: "Writing a client email. You need the latest project status, the billing detail, and what support said. Three tabs, ten minutes of copy-pasting.",
          after: "AI drafts the email using data from all connected tools. Project status, billing, support — all there. You edit one line and approve.",
        },
      ]}
      timeline={[
        { time: "8:00", title: "Morning Brief", desc: "Open SpineWorkspace. Your personal Signal Center shows 3 things that need attention: a deadline today, a follow-up from yesterday, and a client who responded overnight." },
        { time: "8:30", title: "Context recall", desc: "Yesterday's strategy discussion about the Q3 roadmap? Ask the AI. It pulls up your notes, the decisions made, and the follow-ups assigned to you." },
        { time: "10:00", title: "Meeting prep", desc: "Client call in 30 minutes. One click generates a prep sheet: latest project status, recent emails, support tickets, and your notes from the last meeting." },
        { time: "12:30", title: "Smart drafting", desc: "Need to update three stakeholders on different projects. AI drafts each email with context from the relevant tools. You review, tweak, and send." },
        { time: "3:00", title: "Task triage", desc: "Tasks from Jira, follow-ups from email, action items from meeting notes — all ranked by impact and deadline in one view." },
        { time: "5:00", title: "Tomorrow's setup", desc: "Check the Signal Center. Two items queued for tomorrow. Everything else handled. Close your laptop knowing nothing was forgotten." },
      ]}
      capabilities={[
        { title: "Everything in one morning view", desc: "Tasks from Jira, emails, Slack messages, calendar events — ranked by what actually matters today." },
        { title: "An AI that remembers your context", desc: "Ask a question today and it knows what you discussed last week. No re-explaining, no searching through old threads." },
        { title: "Emails drafted with full context", desc: "AI writes drafts using data from all your connected tools. You review, edit, and send — nothing goes out without your approval." },
        { title: "Two-minute morning briefing", desc: "AI filters the noise and gives you a focused summary of what changed overnight and what needs your attention first." },
      ]}
      governance="The AI cannot send, update, or change anything without your explicit approval. You're always in control."
      connectors={["Gmail", "Outlook", "Slack", "Salesforce", "HubSpot", "Notion", "Asana", "Jira", "Google Calendar", "Zoom"]}
      metrics={["Response Time", "Task Completion", "Meeting Preparation", "Context-Switching Reduction"]}
      outcomes={[
        { stat: "2 hrs", label: "Saved Weekly" },
        { stat: "81%", label: "Less Context Loss" },
        { stat: "2 min", label: "Morning Brief" },
        { stat: "5 sec", label: "Context Recall" },
      ]}
    />
  );
}
