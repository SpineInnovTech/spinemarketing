/** @deprecated Legacy source — used only by lib/content/legacy and scripts/migrate-blog-to-sanity. */
export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readTime: string
  tags: string[]
  category?: string
  body: string
}

export const posts: BlogPost[] = [
  {
    slug: "stop-being-the-human-api",
    title: "Stop being the translator between your tools",
    description:
      "Every founder, operator, and account manager starts their day the same way: open 12 tabs, copy-paste context, and lose an hour before real work begins.",
    date: "2026-04-12",
    author: "Spine InnovTech Team",
    readTime: "4 min read",
    tags: ["Product", "Workspace"],
    category: "Product",
    body: `Every founder, operator, and account manager starts their day the same way: open Salesforce, check Slack, look at Stripe, scan Jira, read emails, update the spreadsheet. By the time they have context, an hour is gone.

You are the bridge. The person who carries the story from one tool to the next. And it's exhausting.

## The problem isn't your tools

Your tools are fine individually. Salesforce tracks deals. Zendesk handles tickets. Stripe processes payments. The problem is that none of them talk to each other — and you're the one translating between them.

Every time you switch tabs, you lose context. Every time you copy-paste a customer name from one tool to another, you risk getting it wrong. Every time a new hire joins, they have to learn the same 12-tab dance from scratch.

## What if the story did not have to be rebuilt?

SpineWorkspace connects the tools, files, and conversations you already use. It does not create a new home for the record. The CRM, the desk, and the billing tool stay in charge. The workspace shows the view this role needs for the task in front of them.

## Twin prepares within authorized context

Twin reads permitted records, evidence for the task, and earlier decisions. Coworker can gather authorized context proactively. It prepares a proposal. Every claim points back to its source. Twin does not write the record.

A person allows it, changes it, or stops it. An accepted change is written back through the tool that owns the record. The workspace then shows the result.

## The difference

A tool does one thing. The workspace is where the record and the evidence for this task sit together, so a person can decide the next step without translating between tabs.`,
  },
  {
    slug: "why-ai-needs-your-approval",
    title: "Why AI needs your approval — every single time",
    description:
      "Most AI tools act first and ask questions later. We built Spine InnovTech the opposite way, and here's why that matters.",
    date: "2026-04-10",
    author: "Spine InnovTech Team",
    readTime: "3 min read",
    tags: ["AI", "Trust"],
    category: "Governance and trust",
    body: `You've used ChatGPT or Copilot. It sounds confident. But half the time it's wrong. It invents data, forgets what you told it, and gives different answers to the same question. You can't run a business on guesses.

## The confidence problem

AI is great at sounding right. It uses the same tone whether it's giving you a verified fact or a complete hallucination. And when it's wrong about your business — a customer commitment that doesn't exist, a revenue number that's off — the consequences are real.

## How Spine InnovTech handles this differently

Every insight comes with evidence — which data, from which tool, how recent. When Twin finds something, it proposes it first. You see what it found and where it came from. You allow it, change it, or stop it.

The proposal is not the record. It stays a proposal until a person accepts it, changes it, or rejects it.

That means:
- A claim points back to the tool it came from
- Twin does not invent a commitment the business has not accepted
- Approval and completion stay separate
- An accepted change is written back through the tool that owns the record

## The approval step isn't a speed bump

It's the product. Twin prepares the next step. A person decides. The tools that already hold the record stay in charge.`,
  },
  {
    slug: "spine-fabric-contextual-continuity-layer",
    title: "The tools keep the record. The workspace shows the work.",
    description:
      "Four kinds of information stay apart: the record, the evidence, the draft, and the person. Twin prepares within authorized context. Consequential actions need the right authority.",
    date: "2026-09-02",
    author: "Spine InnovTech Team",
    readTime: "5 min read",
    tags: ["Product", "The record", "The workspace"],
    category: "Business context",
    body: `The work is already in the tools you use. The customer is in the CRM. The ticket is in the desk. The bill is in billing. The promise is in email. The person who has to act is the one piecing that together.

SpineWorkspace does not create a new home for that record. It connects the tools, files, and conversations you already use, and it keeps four kinds of information apart.

## Four things, kept apart

**The record.** Customers, tickets, billing, contracts, and approvals. The tools that own them keep them.

**The evidence.** Email, notes, files, and conversations for this person and this task. Evidence is not the record.

**The draft.** What Twin suggests when someone asks. It is not the record until a person accepts it, changes it, or rejects it.

**The person.** Their role, their workspace, and their permission. A tool being open is not permission to use it.

## What happens when someone asks

The workspace shows the view this role needs. Sales sees the next customer step. Operations sees the handoff. Leadership sees the decision that is still waiting.

Twin reads permitted records, evidence, and earlier decisions to prepare a proposal. Coworker can gather authorized context proactively; preparation is distinct from execution authority. Every claim points back to its source. Twin does not write the record.

A person allows it, changes it, or stops it. An accepted change is written back through the tool that owns the record. The workspace then shows the result.

## Why this is the product

People should not have to rebuild the story every time they change tools. Twin should not invent a record the business has not accepted. And the tools you already trust should stay in charge.`,
  },
]
