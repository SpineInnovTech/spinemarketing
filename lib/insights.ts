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
          "At Spine InnovTech, this is the foundation we are working on: context that people and AI can use together, within clear limits on who can see what and who can act, while your existing tools keep the record.",
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
      "Explore the line between finding a connected tool and giving a person or AI permission to use it for business work.",
    category: "Who decides",
    byline: "Spine InnovTech",
    cardSummary:
      "How to think about the line between finding a tool and giving a person or AI permission to use it.",
    sections: [
      {
        paragraphs: [
          "A connected tool may offer something useful: read an account, look at an incident, prepare a message or update a record.",
          "Finding it can show that the tool exists. It still leaves several questions open. Who may use it? Which information may it reach? For which account? With whose permission? With what approval?",
          "Those questions matter even more when AI can pick tools and prepare actions across many tools.",
        ],
      },
      {
        heading: "What a tool can do is only part of the story",
        paragraphs: [
          "A tool shows what it can do and what it needs to do it. Seeing it in an app or list can help a system work out how to ask for that action.",
          "Permission needs a different set of facts: who the person is, the company's limits, their role, what they have been allowed to do, the action asked for and the rules that apply.",
          "One broad connection can serve people with very different jobs. What each person is allowed to do must stay clear.",
        ],
      },
      {
        heading: "Preparing and doing are different jobs",
        paragraphs: [
          "Suppose an AI finds an unresolved customer commitment and prepares a suggested follow-up.",
          "Gathering the context it is allowed to use, drafting the follow-up, approving it and sending it are separate steps. A good system should keep that separation as the work goes on.",
          "Where approval is needed, the reviewer needs enough to understand the action and what it would do. The action itself should stay tied to the permission that allowed it.",
        ],
      },
      {
        heading: "Moving between tools should keep the line clear",
        paragraphs: [
          "Work may move from a shared workspace into an AI app or a developer tool. The tools there may be different. The tool picking up the work still needs to set the permission that work requires.",
          "Carrying work forward can bring the decision and its evidence along. Each tool must check for itself who the person is, what they can see and what they can do, against its own rules. An earlier approval or an available tool does not grant permission by itself.",
          "At Spine InnovTech, we treat this separation as a foundation of accountable human and AI teamwork: find what is available, set what is allowed, and keep a record of what happened.",
        ],
      },
    ],
    cta: { label: "Read our approach to trust", href: "/trust" },
  },
  {
    slug: "work-continuity",
    title: "Work should retain its history.",
    metaTitle: "Work Should Retain Its History — Spine InnovTech",
    metaDescription:
      "What keeping work's history needs to hold onto as customer issues, commitments and decisions move between people, tools and AI apps.",
    category: "Work continuity",
    byline: "Spine InnovTech",
    cardSummary:
      "What keeping the history needs to hold onto when a customer issue, commitment or decision moves between people, tools and AI apps.",
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
          "The next place may have different rules about who can see what. A customer-facing team, an engineering team and an outside AI app may each be allowed to use different parts of the same work history.",
          "So a good handoff needs to keep both the meaning and the limits. It should pass on enough for the next person's job while respecting the limits on the original information.",
        ],
      },
      {
        heading: "The result belongs to the history too",
        paragraphs: [
          "Keeping the history does not end when an action is asked for. The work needs a record of whether it finished, failed or still needs to be checked and put right.",
          "That result shapes the next decision. Without it, the next person may repeat an action or assume a promise has been kept.",
          "This is why Spine InnovTech treats keeping the history as an engineering job across people, tools and AI apps. The aim is simple to say: help the next person carry on with the evidence and understanding they need to take responsibility.",
        ],
      },
    ],
    cta: { label: "Learn how continuity fits the foundation", href: "/platform" },
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug)
}
