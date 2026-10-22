/**
 * Insights articles — corporate perspectives published at /insights.
 *
 * Content is verbatim from the Spine InnovTech Corporate Website Content Master
 * (Final), Section 10 (INSIGHTS index) and 10A–10C (the three articles), with
 * routes, browser titles and meta descriptions from Section 13.C. The master
 * gives no publication date or named author for these articles, so none is
 * invented here: each carries only the master's byline ("Spine InnovTech") and
 * no date or reading time. Add real publication dates when authorized.
 *
 * These pages are the canonical Insights articles at /insights/<slug>. /blog
 * remains the legacy article alias and is not referenced from here.
 */

export type InsightSection = {
  /** H2 section heading. Omit for an opening lede with no heading. */
  heading?: string
  /** Body paragraphs under the heading, verbatim. */
  paragraphs: string[]
}

export type InsightArticle = {
  slug: string
  /** H1, verbatim. */
  title: string
  /** Browser title (Section 13.C). */
  metaTitle: string
  /** Meta description (Section 13.C). */
  metaDescription: string
  /** Category label, verbatim. */
  category: string
  /** Byline, verbatim. The master gives no dates. */
  byline: string
  /** Short card summary shown on the /insights index, verbatim. */
  cardSummary: string
  /** Verbatim body sections, in order. */
  sections: InsightSection[]
  /** Closing CTA from the article, verbatim. */
  cta: { label: string; href: string }
}

/** /insights index hero and closing invitation, verbatim (Section 10). */
export const INSIGHTS_INDEX = {
  eyebrow: "IDEAS FROM SPINE INNOVTECH",
  headline: "Perspectives on context, authority and connected work.",
  intro:
    "We write about the engineering questions behind business understanding: how information gains meaning, how AI participates responsibly and how work retains its history across systems.",
  closing: {
    heading: "Working on a related problem?",
    body: "We welcome thoughtful questions and different perspectives from people building and operating business systems.",
    cta: { label: "Join the conversation", href: "/contact?topic=research" },
  },
} as const

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "connected-software-shared-understanding",
    title: "Software is connected. Business understanding is still fragmented.",
    metaTitle: "Connected Software, Shared Understanding — Spine InnovTech",
    metaDescription:
      "Why moving information between business applications still leaves people responsible for reconstructing context, evidence and decisions.",
    category: "Business context",
    byline: "Spine InnovTech",
    cardSummary:
      "Why moving information between applications leaves an important question unresolved: how people understand the situation and decide what to do next.",
    sections: [
      {
        paragraphs: [
          "A customer account can be well documented and still be difficult to understand.",
          "The CRM holds stakeholders and commercial history. Support systems hold incidents. Documents explain obligations. Conversations record decisions. Engineering systems track the work needed to resolve a technical problem.",
          "Each system can be doing its job correctly while the person responsible for the account still has to reconstruct the situation.",
        ],
      },
      {
        heading: "Information can move while meaning is lost",
        paragraphs: [
          "Integration helps information cross application boundaries. Business understanding also depends on relationships that may cross those same boundaries: which incident threatens a commitment, which commitment supports a customer goal and which person is responsible for the next step.",
          "Consider a technical escalation ahead of an account review. The incident status matters, but so do the customer's affected objective, an earlier promise, the engineering dependency and the most recent decision about timing.",
          "The useful unit of understanding is the relationship between those facts.",
        ],
      },
      {
        heading: "Shared context needs evidence",
        paragraphs: [
          "Assembling a narrative is only part of the work. A person needs to know where that narrative came from, whether its sources are current and where the evidence disagrees.",
          "An AI-generated account summary may be helpful, but confidence in it should depend on the underlying sources and the review of its conclusions. The summary does not establish authority to act.",
          "We believe shared business context needs to preserve source identity, relationships, uncertainty and the decisions already made. It should help people inspect an understanding before acting on it.",
        ],
      },
      {
        heading: "The next step needs an owner",
        paragraphs: [
          "Context becomes useful when it supports a responsibility. Someone needs to decide whether to change the plan, contact the customer, escalate the incident or accept the risk.",
          "That decision should retain its evidence and become part of the continuing work. Otherwise the organization will need to reconstruct the reasoning at the next handoff.",
          "At Spine InnovTech, this is the foundation we are working on: context that people and AI can use together, within clear access and authority boundaries, while existing tools remain the systems of record.",
        ],
      },
    ],
    cta: { label: "Explore our technology approach", href: "/platform" },
  },
  {
    slug: "connection-and-authority",
    title: "Connection is not permission.",
    metaTitle: "Connection Is Not Permission — Spine InnovTech",
    metaDescription:
      "Explore the boundary between discovering a connected capability and authorizing a person or AI to use it for business work.",
    category: "Governance",
    byline: "Spine InnovTech",
    cardSummary:
      "How to think about the boundary between discovering a capability and authorizing a person or AI to use it.",
    sections: [
      {
        paragraphs: [
          "A connected environment may expose a useful capability: read an account, inspect an incident, prepare a message or update a record.",
          "Discovery can establish that the capability exists. It still leaves several questions open. Who may use it? Which information may it access? For which account? Under whose authority? With what approval?",
          "Those questions become especially important when AI can select tools and prepare actions across multiple systems.",
        ],
      },
      {
        heading: "Capability describes what is possible",
        paragraphs: [
          "A tool's interface tells us what operation it can perform and what inputs it expects. Its presence in a host or catalog can help a system understand how to request that operation.",
          "Authorization needs a different set of facts: identity, organizational boundaries, role, delegated scope, the requested operation and relevant policy.",
          "A broadly capable connection can serve people with very different responsibilities. The scope of each person's permitted work must remain explicit.",
        ],
      },
      {
        heading: "Preparation and execution carry different responsibilities",
        paragraphs: [
          "Suppose an AI finds an unresolved customer commitment and prepares a proposed follow-up.",
          "Gathering the permitted context, drafting the follow-up, approving it and sending it are distinct steps. A useful system should preserve that distinction as the work proceeds.",
          "Where approval is required, the reviewer needs enough information to understand the intended action and its implications. The eventual operation should remain tied to the authority that permitted it.",
        ],
      },
      {
        heading: "Changing environments should preserve the boundary",
        paragraphs: [
          "Work may move from a shared workspace into an AI host or development environment. The tools available there may differ. The receiving environment still needs to establish the authority required for that work.",
          "Continuity can carry the decision and its evidence. Each environment must independently verify identity, access and execution authority against its own requirements. An earlier approval or visible capability cannot grant permission by itself.",
          "At Spine InnovTech, we treat this separation as a foundation of accountable human and AI collaboration: discover what is available, establish what is permitted, and retain evidence of what happened.",
        ],
      },
    ],
    cta: { label: "Read our approach to trust and governance", href: "/trust" },
  },
  {
    slug: "work-continuity",
    title: "Work should retain its history.",
    metaTitle: "Work Should Retain Its History — Spine InnovTech",
    metaDescription:
      "What work continuity needs to preserve as customer issues, commitments and decisions move between people, systems and AI environments.",
    category: "Work continuity",
    byline: "Spine InnovTech",
    cardSummary:
      "What continuity needs to preserve when a customer issue, commitment or decision moves between people, tools and AI environments.",
    sections: [
      {
        paragraphs: [
          "A handoff often transfers the task while leaving its reasoning behind.",
          "The next person receives a ticket or a message. They still need to find out why the task exists, which options were discussed, what the customer was promised and which decision led to the current plan.",
          "The information may be available. Reconstructing it still takes work, and important details may be missed.",
        ],
      },
      {
        heading: "Continuity begins with the identity of the work",
        paragraphs: [
          "A customer commitment can appear in a meeting note, a support thread, an engineering issue and an account plan. Those references describe parts of the same responsibility.",
          "Preserving that relationship makes it easier to understand what has changed and whether the commitment is still on track.",
          "Continuity needs to retain the work's identity, relevant sources, decisions, ownership and remaining steps. A conversation transcript alone may contain too much irrelevant material while still leaving those relationships unclear.",
        ],
      },
      {
        heading: "Context must travel within permission",
        paragraphs: [
          "The next environment may have different access rules. A customer-facing team, an engineering team and an external AI host may each be allowed to use different parts of the same work history.",
          "A useful handoff therefore needs to preserve both meaning and scope. It should communicate enough context for the recipient's responsibility while respecting the boundaries of the source information.",
        ],
      },
      {
        heading: "The result belongs to the history too",
        paragraphs: [
          "Continuity does not end when an action is requested. The work needs a record of whether the operation completed, failed or still needs reconciliation.",
          "That outcome informs the next decision. Without it, the next person may repeat an action or assume a commitment has been met.",
          "This is why Spine InnovTech treats continuity as an engineering concern across people, systems and AI environments. The aim is simple to state: help the next person continue with the evidence and understanding needed to take responsibility.",
        ],
      },
    ],
    cta: { label: "Learn how continuity fits the foundation", href: "/platform" },
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug)
}
