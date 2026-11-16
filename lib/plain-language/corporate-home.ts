/** Corporate homepage T1 copy — layout-first (path B): locked hero H1/lead/CTAs preserved in hero-section. */

export const homeFourSteps = [
  { step: 1, title: "Your data stays with your tools.", href: "/platform/spine-fabric" },
  { step: 2, title: "AI gathers context from your tools.", href: "/business-context" },
  { step: 3, title: "You approve.", href: "/platform#governed-execution" },
  { step: 4, title: "AI executes.", href: "/product/approval-gate-twin" },
] as const;

export const homeProblems = {
  eyebrow: "Problem",
  headline: "What is hard today",
  items: [
    "Answers sit in many tools, so nobody sees the full picture.",
    "People copy facts from one app to another by hand, and details get lost.",
    "AI can draft work, but you can't see what it used, and you can't approve it first.",
  ],
} as const;

export const homeBento = {
  eyebrow: "Solution",
  headline: "Your tools. Your context. Your decisions.",
  lead: "Facts brought together. People in control. Ready for AI.",
  tiles: [
    {
      title: "Connect",
      description: "Link the tools you already use. Records stay where they belong.",
      href: "/platform/integrations",
      large: true,
    },
    {
      title: "See the full picture",
      description: "One view of a customer, project or goal with sources shown.",
      href: "/business-context",
      large: true,
    },
    {
      title: "Prepare with AI",
      description: "Spine Twin drafts the next step from facts you may use.",
      href: "/twin",
      large: false,
    },
    {
      title: "Approve before action",
      description: "People decide. Every important change is recorded.",
      href: "/governance",
      large: false,
    },
  ],
} as const;

export const homeFeatureTabs = {
  eyebrow: "Features",
  headline: "Built for everyday work",
  intro: "Four helpers that sit inside your real tools and records.",
  tabs: [
    {
      id: "twin",
      label: "Spine Twin",
      title: "Ask the Twin",
      body: "Summarise a situation, compare evidence and get a suggested next step—with reasons and sources.",
      href: "/twin",
    },
    {
      id: "coworker",
      label: "Spine Coworker",
      title: "Gather the facts first",
      body: "Before Twin suggests anything, Coworker collects the records and evidence you are allowed to use for that task.",
      href: "/twin#coworker",
    },
    {
      id: "triage",
      label: "Triage Bot",
      title: "Sort what just arrived",
      body: "New email, file or ticket—linked to the right work and flagged for a decision. Nothing changes in your apps.",
      href: "/triage-bot",
    },
    {
      id: "folder",
      label: "Folder Monitor",
      title: "Notice new files",
      body: "When a file is added or changed in your shared folders, see it next to the related work. The file stays in place.",
      href: "/folder-monitor",
    },
  ],
} as const;

export const homeFounderNote = {
  quote:
    "Before Spine InnovTech, I spent years connecting business systems. The tools were linked, but people making decisions still could not see the whole story. That gap is why we build SpineWorkspace.",
  attribution: "Nirmal Prince J",
  role: "Founder and CEO, Spine InnovTech",
  href: "/company#founder",
} as const;

export const homeFaq = {
  eyebrow: "FAQ",
  headline: "Common questions",
  intro: "Still have questions? Email us through Contact.",
  items: [
    {
      question: "Does SpineWorkspace replace our tools?",
      answer:
        "No. Your CRM, email, support desk and folders keep the official records. SpineWorkspace reads and writes only with permission.",
    },
    {
      question: "Does AI act on its own?",
      answer:
        "AI prepares suggestions. A person approves every important action first. The history of approvals is kept.",
    },
    {
      question: "What is Spine Twin?",
      answer:
        "Twin works from your business facts—not guesses—and shows why it suggested each step. Coworker gathers the evidence first.",
    },
    {
      question: "Who is it for first?",
      answer:
        "We built first for account and customer success teams running renewals, but sales, finance, support and operations use the same pattern.",
    },
    {
      question: "Where do I see pricing?",
      answer:
        "Plans and pricing live on the SpineWorkspace product site. The corporate site explains the technology and company.",
    },
  ],
} as const;

export const homeTrustLine = "Your tools keep the original records. Nothing runs until you approve.";
