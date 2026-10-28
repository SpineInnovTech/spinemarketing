import { DOCS_URL } from "@/lib/navigation";

export type CtaLink = { label: string; href: string };

export type PageHeroCopy = {
  badge?: string;
  headline: string;
  subhead?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  principle?: string;
};

export type ContentSectionCopy = {
  id?: string;
  label?: string;
  headline: string;
  body?: string;
  items?: string[];
  cards?: { title: string; description: string; href?: string }[];
  comparison?: { left: { title: string; items: string[] }; right: { title: string; items: string[] } };
};

export type ProofCardCopy = { title: string; description: string; metric?: string };

export type HubCardCopy = { title: string; description: string; href: string };

export type NarrativePageCopy = {
  meta: { title: string; description: string; path: string };
  hero: PageHeroCopy;
  sections: ContentSectionCopy[];
  crossLinks?: { prev?: CtaLink; next?: CtaLink; related?: CtaLink[] };
  scenario?: { headline: string; body: string; steps?: string[] };
  finalCta?: { headline: string; primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type UseCasePageCopy = NarrativePageCopy & {
  topics: { title: string; description: string }[];
};

export const pages = {
  spineworkspace: {
    meta: {
      title: "SpineWorkspace — One Fabric, 13 Domain Workspaces",
      description:
        "SpineWorkspace brings the record from your tools together with the facts this task needs. Those tools keep the record.",
      path: "/spineworkspace",
    },
    hero: {
      badge: "SpineWorkspace · Business Context Workbench",
      headline: "One business context. Every domain. Ready to work.",
      subhead:
        "SpineWorkspace connects the records you are allowed to see into Spine Fabric, the shared view of records from the tools you already use. It shows a view for each job and includes ready-built workflows. Those tools keep the record.",
      primaryCta: { label: "See a workflow", href: "/product#how-it-works" },
      secondaryCta: { label: "Book a tailored demo", href: "/contact?intent=demo" },
    },
    sections: [
      {
        headline: "A workspace for the business, not another tool in the stack.",
        body:
          "SpineWorkspace sits above your existing systems. It does not replace your CRM, email, or project tools. It brings their truth together with the context for the current task. SpineWorkspace and Spine Workbench are the same offering.",
      },
      {
        headline: "Everything that matters to how work gets done.",
        items: ["Goals", "KPIs", "Customers", "Relationships", "Work", "Decisions", "Memory", "Evidence", "Outcomes"],
      },
      {
        headline: "Understand. Coordinate. Preserve. Reconcile.",
        cards: [
          { title: "Understand work", description: "See goals, status, and risk in one place" },
          { title: "Coordinate action", description: "Humans and AI work from the same truth and context" },
          { title: "Preserve continuity", description: "Memory and evidence survive every handoff" },
          { title: "Reconcile results", description: "Observe outcomes; don't blindly trust model output" },
        ],
      },
      {
        headline: "The Spine InnovTech technology ecosystem.",
        cards: [
          { title: "SpineWorkspace", description: "The workspace where a person sees the work and decides.", href: "/spineworkspace" },
          { title: "Spine Platform", description: "How SpineWorkspace is built.", href: "/platform" },
          { title: "Spine Fabric", description: "One connection to the tools that keep the record.", href: "/platform/spine-fabric" },
          { title: "Spine Twin", description: "Prepares a proposal when someone asks.", href: "/twin" },
          { title: "Spine Coworker", description: "Gathers the records and evidence this person may use.", href: "/twin#coworker" },
          { title: "Spine Context Assembler", description: "Assembles the context for this task.", href: "/business-context" },
          { title: "Spine Adaptive Auto Tuner", description: "Fits the workspace to the role and the task.", href: "/adaptive-workspace#adaptive-autotuner" },
          { title: "Spine Triage Bot", description: "Sorts what just arrived so a person sees what needs a decision.", href: "/triage-bot" },
          { title: "Spine Folder Monitor", description: "Watches the folders the business already uses. The file stays in the folder.", href: "/folder-monitor" },
        ],
      },
    ],
    crossLinks: {
      next: { label: "Meet the Twin", href: "/twin" },
      related: [
        { label: "Spine Context Assembler", href: "/business-context" },
        { label: "Spine Adaptive Auto Tuner", href: "/adaptive-workspace#adaptive-autotuner" },
      ],
    },
  },

  twin: {
    meta: {
      title: "Spine Twin — Context-aware AI for business work",
      description: "Spine Twin helps people understand business context, compare evidence, prepare work and propose next steps within defined authority.",
      path: "/twin",
    },
    hero: {
      badge: "Spine Twin · Context-aware AI",
      headline: "AI that works with your business context.",
      subhead: "Spine Twin brings objectives, responsibilities, records, signals, decisions and evidence into the work. It helps people investigate situations, prepare options and coordinate the next step within the authority they have.",
      primaryCta: { label: "Explore the Twin experience", href: "#capabilities" },
      secondaryCta: { label: "See governance", href: "/governance" },
    },
    sections: [
      {
        id: "capabilities",
        label: "Understand before responding",
        headline: "Start with the situation, its evidence and the goal.",
        body: "The Twin uses the context it is permitted to access to explain a situation, compare evidence and identify what is missing. The work can involve an operational handoff, a financial exception, a delivery decision or a customer review.",
        cards: [
          { title: "Investigate", description: "Relate a signal to its sources, dependencies, earlier decisions and business impact." },
          { title: "Prepare", description: "Assemble summaries, options, plans and proposed next steps around the current goal." },
          { title: "Coordinate", description: "Help people move work between responsibilities and approved capabilities with its context intact." },
        ],
      },
      {
        id: "coworker",
        label: "Spine Coworker",
        headline: "Relevant context can be ready before the conversation starts.",
        body: "Spine Coworker represents the context-gathering aspect of the experience: watching authorized signals, assembling relevant evidence and preparing useful context. Gathering context is distinct from independently sending messages, changing business records or committing the organization.",
      },
      {
        headline: "Support the work across business functions.",
        cards: [
          { title: "Operations", description: "Prepare a handoff or escalation with its dependencies, owners and decision history." },
          { title: "Finance", description: "Compare an exception with the invoice, contractual commitments and supporting evidence." },
          { title: "Product & engineering", description: "Investigate a release blocker and prepare options around its customer impact and delivery goal." },
          { title: "Customer-facing teams", description: "Prepare onboarding, account reviews, expansion conversations or renewal decisions from the customer story." },
          { title: "Leadership", description: "Bring goals, signals, responsibilities and unresolved decisions into an executive brief." },
          { title: "People & knowledge", description: "Find permitted knowledge and prepare a context-rich answer for an employee or team." },
        ],
      },
      {
        headline: "Human and policy boundaries stay explicit.",
        body: "A person, or a rule they have approved, allows important actions. A suggestion stays a suggestion until then. The product only does what it is allowed to do. It is finished when the result is seen and checked against the record.",
      },
      {
        headline: "Business context continues as models and tools evolve.",
        body: "The relevant history, evidence and responsibility belong to the work. Durable business understanding should carry across providers and sessions rather than depend on a single chat history.",
      },
    ],
    crossLinks: {
      prev: { label: "SpineWorkspace", href: "/product" },
      next: { label: "Spine Context Assembler", href: "/business-context" },
      related: [{ label: "Spine Fabric", href: "/platform/spine-fabric" }, { label: "Controlled execution", href: "/governance" }],
    },
  },

  businessContext: {
    meta: {
      title: "Business Context — Bring the right facts together",
      description: "Find, connect and bring together the facts a task needs, with a record of where each one came from and who can see it. Your original tools stay in charge.",
      path: "/business-context",
    },
    hero: {
      badge: "SPINE FABRIC · FACTS AND CONTEXT",
      headline: "Bring the facts together. See the context.",
      subhead:
        "Spine Fabric is the shared view of records behind the Workbench, the screen where a person does the work. Every use follows set rules. It connects the records, events, relationships and evidence you are allowed to see, so people and AI can find the facts a task needs.",
      primaryCta: { label: "See how work is shown", href: "/adaptive-workspace" },
    },
    sections: [
      {
        id: "data-fabric",
        label: "The record",
        headline: "Keep the record, the evidence, and the person apart.",
        body:
          "The tools you already use keep the record. Personal notes stay with the person. What happened in this sitting stays with this sitting. What the organization has already decided is shared. Those stay apart. SpineWorkspace does not become a new home for the record.",
      },
      {
        headline: "What business context includes.",
        items: ["Goals", "KPIs", "Customers", "Relationships", "Work", "Decisions", "Evidence", "History", "Outcomes"],
      },
      {
        headline: "Without truth and context together, everyone rebuilds the story.",
        body:
          "Every tool handoff, every AI session, every new team member starts from zero. Bringing the record and the context for this task together lets people and AI work toward the same goals without re-explaining everything.",
      },
      {
        headline: "Connect truth and context—without claiming source authority.",
        body:
          "SpineWorkspace connects to the tools you already use and gathers what this task needs. The CRM, the desk, and the billing tool keep the record. Business Context is where the evidence for this task is brought together.",
      },
      {
        headline: "Proposals do not become business truth.",
        body:
          "The tools you already use keep the record. A suggestion does not become the record until a person who is allowed to accept it does so.",
      },
    ],
    crossLinks: {
      prev: { label: "The Twin", href: "/twin" },
      next: { label: "Adaptive Workspace", href: "/adaptive-workspace" },
    },
  },

  triageBot: {
    meta: {
      title: "Spine Triage Bot",
      description:
        "Spine Triage Bot sorts what just arrived so a person sees what needs a decision. The tools keep the record.",
      path: "/triage-bot",
    },
    hero: {
      badge: "Spine Triage Bot",
      headline: "See what needs a decision.",
      subhead:
        "Spine Triage Bot is part of SpineWorkspace. It sorts a new message, file, or ticket so a person can see what needs attention. It does not write the record.",
      primaryCta: { label: "See Spine Twin", href: "/twin" },
    },
    sections: [
      {
        headline: "Incoming work, sorted for a person.",
        body:
          "A message, a file, or a ticket arrives in a tool the team already uses. Spine Triage Bot places it with the work it belongs to and shows why it needs attention. A person decides what happens next.",
      },
      {
        headline: "The tools keep the record.",
        body:
          "Spine Triage Bot can prepare what a person should look at. It does not change the CRM, the desk, or the folder. An accepted change is written back through the tool that owns the record.",
      },
    ],
    crossLinks: {
      prev: { label: "Spine Coworker", href: "/twin#coworker" },
      next: { label: "Spine Folder Monitor", href: "/folder-monitor" },
    },
  },

  folderMonitor: {
    meta: {
      title: "Spine Folder Monitor",
      description:
        "Spine Folder Monitor watches the folders the business already uses and shows a new or changed file with the work. The file stays in the folder.",
      path: "/folder-monitor",
    },
    hero: {
      badge: "Spine Folder Monitor",
      headline: "A new file shows up with the work.",
      subhead:
        "Spine Folder Monitor is part of SpineWorkspace. It watches the folders the business already uses. When a file arrives or changes, the workspace can show it with the task. The file stays in the folder.",
      primaryCta: { label: "See Spine Fabric", href: "/platform/spine-fabric" },
    },
    sections: [
      {
        headline: "The folder stays where it is.",
        body:
          "Contracts, notes, and exports stay in the folders the team already opens. Spine Folder Monitor notices a new or changed file and brings it into view for the task. SpineWorkspace does not become a new home for the file.",
      },
      {
        headline: "The file is evidence until a person decides.",
        body:
          "A file in a folder is evidence for the work. It does not change the record by itself. A person allows, changes, or stops the next step.",
      },
    ],
    crossLinks: {
      prev: { label: "Spine Triage Bot", href: "/triage-bot" },
      next: { label: "Spine Context Assembler", href: "/business-context" },
    },
  },

  adaptiveWorkspace: {
    meta: {
      title: "13 Domain Views from One Fabric | SpineWorkspace",
      description: "See how Spine Fabric powers authorized, role-specific Workbench views without creating a separate data silo for each team.",
      path: "/adaptive-workspace",
    },
    hero: {
      badge: "ONE FABRIC · 13 DOMAINS",
      headline: "Different domain views. One business context.",
      subhead: "Sales, Account Success, Finance, Engineering, Operations and leadership each see the view that fits their job, from the same facts. Standard work starts from ready-made views.",
      primaryCta: { label: "Explore adaptive work", href: "/host-connected-environment" },
    },
    sections: [
      {
        id: "adaptive-autotuner",
        label: "Spine Adaptive Auto Tuner",
        headline: "Adapt the environment around the work.",
        body:
          "The workspace changes around the person, the task, and the role. One piece of Work stays the same. The view follows who is looking at it.",
      },
      {
        headline: "One piece of Work.",
        body: "Customer onboarding is the work. The goal, the evidence, and the status stay attached to it.",
      },
      {
        headline: "The view follows the role.",
        body: "A seller sees the next customer step. Operations sees the handoff. Leadership sees the decision that is still waiting.",
      },
      {
        headline: "Twin uses the same Work.",
        body: "Coworker gathers authorized truth and context. Twin prepares a proposal. There is no model catalogue and no second chat.",
      },
      {
        headline: "A person still decides.",
        body: "The status stays Awaiting review until someone with authority accepts the step.",
      },
    ],
    crossLinks: {
      next: { label: "The tools you already use", href: "/host-connected-environment" },
    },
  },

  hostConnectedEnvironment: {
    meta: {
      title: "Proof of what an AI tool can reach | SpineWorkspace",
      description:
        "See the separate proof for who the AI tool is, what it can find, what it is allowed to do, what it did, and whether the result matched — with each tool keeping its own say.",
      path: "/host-connected-environment",
    },
    hero: {
      badge: "SPINE NETWORK · AI TOOL CONNECTIONS",
      headline: "Know what your AI tool can actually reach.",
      subhead:
        "Who the AI tool is, what tools it can find, what it is allowed to do, and whether it did what it said are kept apart. Spine Network keeps each AI tool's access separate, and your original tools stay in charge of their own records.",
      primaryCta: { label: "See how work continues", href: "/continuity" },
    },
    sections: [
      {
        headline: "A connected AI tool starts the record.",
        body:
          "When an AI tool connects, we first confirm who it is: the tool, the person, the company, the workspace and what it is allowed to touch. Knowing who it is does not, by itself, let it into the tool's own apps or data.",
      },
      {
        headline: "Finding a tool is not the same as being allowed to use it.",
        body:
          "A task may be open to the AI tool, kept for Spine only, or not available at all. Seeing that a task exists does not grant permission. What is allowed depends on current consent, what the tool may touch, who is a member, and the rules in place.",
      },
      {
        headline: "Check what it did, and whether the result matched, on their own.",
        body: "There are five steps: confirm who it is, find what it can do, check it is allowed, do the task safely, and confirm the result matched. When new facts come in, we also confirm they were saved, note where they came from, and allow access before we treat them as ready.",
      },
      {
        headline: "Carry the work forward, with permission checked again each time.",
        body:
          "Spine Network is built to keep the same item, saved context, work and save point as work moves between AI tools that can work together. Each new tool checks permission again and keeps its own record. A tool's private memory, sign-ins and rights do not travel with it. These are the things we aim to prove, not a claim of a tested live handoff.",
      },
    ],
    crossLinks: {
      next: { label: "Continuity", href: "/continuity" },
    },
  },

  governance: {
    meta: {
      title: "Who decides — People stay in control",
      description: "People run the business. AI helps with the work. Being able to see something is not permission to change it.",
      path: "/governance",
    },
    hero: {
      badge: "Who decides",
      headline: "People run the business. AI helps with the work.",
      subhead: "A place to review a proposal, the facts behind it, and the person who decides.",
      primaryCta: { label: "Read the security overview", href: "/security" },
    },
    sections: [
      {
        headline: "Authority is a person, not a model.",
        body: "Being able to see a tool is not permission to use it. Spine Twin can prepare a proposal. A person with the right job accepts or rejects it. The tool you already use keeps the record.",
      },
      {
        headline: "Three kinds of memory.",
        body: "Personal memory stays with the person. Session memory stays with that sitting. Organizational memory is shared for the whole organization. None of them replaces the record. They are kept apart.",
        items: ["Personal memory", "Session memory", "Organizational memory"],
      },
      {
        headline: "Pending review is the default.",
        body: "A proposal stays waiting until a person who is allowed to decide accepts it. The facts stay linked to the tool that keeps the record.",
      },
      {
        headline: "Controls live on the security page.",
        body: "Encryption, access control, and execution limits are described on Security. This page is about who may decide, and which memory a decision may use.",
      },
    ],
    crossLinks: {
      next: { label: "Continuity", href: "/continuity" },
      related: [{ label: "Security", href: "/security" }],
    },
  },

  continuity: {
    meta: {
      title: "Carry work across tools — One context",
      description: "Business memory, work in progress, save points, evidence and results stay connected across sittings and across AI tools.",
      path: "/continuity",
    },
    hero: {
      badge: "Continuity",
      headline: "One piece of work. Many tools. Each one still asks permission.",
      primaryCta: { label: "See continuity proof", href: "/proof" },
    },
    sections: [
      {
        headline: "Every tool handoff splits truth from context.",
        body: "Switching between CRM, email, chat, and project tools forces people and AI to reconstruct what happened, why it matters, and what comes next.",
      },
      {
        headline: "Business memory that stays.",
        body: "Saved context and your work in progress can be picked up again across AI tools that can work together, through Spine Network. Each tool asks permission again and never gets another tool's private sign-ins.",
      },
      {
        headline: "Three kinds of memory.",
        body: "Personal memory, session memory, and organizational memory are kept apart. When you pick work back up, it carries that work, not a mix of all three.",
        items: ["Personal memory", "Session memory", "Organizational memory"],
      },
    ],
    scenario: {
      headline: "One objective. Two tools. The story continues.",
      body: "A delivery dependency changes in a project tool. The team opens another tool to prepare the handoff. SpineWorkspace carries the record and the evidence for that work, so the story does not have to be rebuilt.",
      steps: [
        "A delivery dependency changes in the project tool",
        "The record and the evidence travel with the work to the tool used for the note",
        "A person accepts, edits, or rejects the proposal",
        "Outcome reconciled in Workbench",
      ],
    },
    crossLinks: {
      next: { label: "See the proof", href: "/proof" },
    },
  },

  proof: {
    meta: {
      title: "Proof — What the product is built to do",
      description: "Illustrative scenarios for host context, governance, and continuity. Not measured customer outcomes.",
      path: "/proof",
    },
    hero: {
      badge: "Proof",
      headline: "What the product actually does.",
      subhead: "Demonstrations show how the product operates. They are not claims of customer outcomes or certifications.",
      primaryCta: { label: "See a workflow", href: "/product#how-it-works" },
      secondaryCta: { label: "Book a tailored demo", href: "/contact?intent=demo" },
    },
    sections: [],
    scenario: {
      headline: "One piece of work. More than one tool. The story continues.",
      body:
        "A delivery risk surfaces in a project tool. The record and the evidence travel with the work. A person decides. The original tool is updated. The story does not have to be rebuilt.",
      steps: [
        "Risk signal surfaces with linked evidence",
        "Twin prepares a proposal within governance bounds",
        "Work continues in another tool with the same record and the same evidence",
        "Results observed and reconciled against the source record",
      ],
    },
    finalCta: {
      headline: "Ready to see it in your environment?",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
      secondaryCta: { label: "Explore SpineWorkspace", href: "/spineworkspace" },
    },
  },

  company: {
    meta: {
      title: "Company — Spine InnovTech builds SpineWorkspace",
      description:
        "Spine InnovTech builds SpineWorkspace. Spine Fabric, the Workbench, Spine Twin and the marketplace are parts of one workspace. The helpers and tools are parts of that product, not separate products.",
      path: "/company",
    },
    hero: {
      badge: "Spine InnovTech",
      headline: "We build for the work that gets lost between systems.",
      subhead:
        "Spine InnovTech builds SpineWorkspace. Spine Fabric, the Workbench, Spine Twin and the marketplace are parts of one workspace. The helpers and tools are parts of that product, not separate products. The tools teams already depend on keep the record.",
      primaryCta: { label: "Speak with the team", href: "/contact" },
      secondaryCta: { label: "See a workflow", href: "/product#how-it-works" },
    },
    sections: [
      {
        headline: "Why this company exists.",
        body:
          "Truth sits in CRM, billing, and tickets. Context sits in mail, documents, and the people who remember what happened. Spine InnovTech exists to bring those together — without replacing source systems or removing human authority from consequential work.",
      },
      {
        headline: "What we ship.",
        cards: [
          { title: "SpineWorkspace", description: "The workspace where a person sees the work and decides.", href: "/spineworkspace" },
          { title: "Spine Platform", description: "How SpineWorkspace is built.", href: "/platform" },
          { title: "Spine Fabric", description: "One connection to the tools that keep the record.", href: "/platform/spine-fabric" },
          { title: "Spine Twin", description: "Prepares a proposal when someone asks.", href: "/twin" },
          { title: "Spine Coworker", description: "Gathers the records and evidence this person may use.", href: "/twin#coworker" },
          { title: "Spine Context Assembler", description: "Assembles the context for this task.", href: "/business-context" },
          { title: "Spine Adaptive Auto Tuner", description: "Fits the workspace to the role and the task.", href: "/adaptive-workspace#adaptive-autotuner" },
          { title: "Spine Triage Bot", description: "Sorts what just arrived so a person sees what needs a decision.", href: "/triage-bot" },
          { title: "Spine Folder Monitor", description: "Watches the folders the business already uses. The file stays in the folder.", href: "/folder-monitor" },
        ],
      },
      {
        headline: "Principles we build by.",
        items: [
          "Truth stays in source systems. Context is assembled for the work and linked to evidence",
          "Accountability — people accept consequential steps; proposals stay proposals until then",
          "Continuity — work resumes across sessions and handoffs without rebuilding the story",
          "Fits the job — the workspace follows the goal, the role, and the facts in front of the work",
        ],
      },
      {
        headline: "Built in Coimbatore, Tamilnadu, India.",
        body:
          "Spine InnovTech is headquartered in Coimbatore, Tamilnadu, India. We build for global teams operating across fragmented systems — with security, documentation, and contact paths on this site.",
      },
    ],
    crossLinks: {
      related: [
        { label: "About the founder story", href: "/about" },
        { label: "Security", href: "/security" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },

  developers: {
    meta: {
      title: "Developers — Check how it connects",
      description: "Review the connections, events, AI tool access and permissions for your SpineWorkspace setup.",
      path: "/developers",
    },
    hero: {
      badge: "Developers",
      headline: "Check how it connects.",
      subhead: "Review the connections, events and access controls your team needs. Your existing tools keep the record.",
      primaryCta: { label: "Read the docs", href: DOCS_URL },
    },
    sections: [
      {
        id: "integration-paths",
        headline: "Choose where to start.",
        body: "Supported providers, operations and deployment access are confirmed for your environment.",
        cards: [
          { title: "Connector catalog", description: "Find relevant tools, then confirm supported operations and access.", href: "/integrations" },
          { title: "Events and webhooks", description: "Review supported event ingestion and the setup required for your environment.", href: "/platform/integrations#integration-methods" },
          { title: "AI hosts and MCP", description: "Understand host identity, capability discovery, authorization and verified outcomes.", href: "/host-connected-environment" },
          { title: "Security and permissions", description: "Review tenant boundaries, access scopes and action controls.", href: "/security" },
          { title: "Technical reference", description: "Explore the architecture and request the integration details your team needs.", href: DOCS_URL },
        ],
      },
    ],
  },

  platformHub: {
    meta: {
      title: "Spine Platform",
      description: "See how SpineWorkspace works: shared information, work built around your role, AI that helps, and actions people approve.",
      path: "/platform",
    },
    hero: {
      badge: "Spine Platform",
      headline: "One joined-up way to do connected business work.",
      subhead: "Spine Fabric is the shared view of records from the tools you already use. The Workbench is the screen where a person does the work, built around their job. Spine Twin is the AI that prepares the next step and waits. A person approves the action, and the result is checked.",
      primaryCta: { label: "Spine Fabric", href: "/platform/spine-fabric" },
    },
    sections: [
      {
        headline: "What the platform is for.",
        cards: [
          { title: "One connection", description: "Connects the tools you already use. The tools keep the record.", href: "/platform/spine-fabric" },
          { title: "How it works", description: "The tools keep the record. The workspace shows the work. A person decides, and an accepted change goes back.", href: "/platform/how-it-works" },
          { title: "Integrations", description: "The apps, files, and conversations already in use.", href: "/platform/integrations" },
          { title: "The tools you already use", description: "Each tool stays itself. They do not have to talk to each other directly.", href: "/host-connected-environment" },
          { title: "Check the result", description: "Results are checked, not blindly trusted.", href: "/governance" },
          { title: "Security and who decides", description: "Who can see what, what is recorded, and controls on actions.", href: "/security" },
        ],
      },
    ],
  },

  securityPage: {
    meta: {
      title: "Security — Who can decide, how data is handled, what AI may do",
      description: "Access rules, evidence, a clear record, and limits on what AI can do for SpineWorkspace.",
      path: "/security",
    },
    hero: {
      badge: "Security",
      headline: "Controls and limits for the workspace.",
      subhead: "Who can get in, how data is kept safe, and what Twin is not allowed to do. Who may decide, and which memory they may use, is explained with the approval rules.",
      primaryCta: { label: "Contact security team", href: "/contact?intent=security" },
    },
    sections: [
      {
        headline: "Who is in control.",
        body: "People run the business. AI helps within set limits. Being able to do something does not mean it is allowed.",
      },
      {
        headline: "Who can get in, and what they can do.",
        body: "Access by role, limits on what each person can touch, and the person's own say keep actions within company rules.",
      },
      {
        headline: "Evidence and a clear record.",
        body: "Every action is tied to its evidence. A full record lets people check the result and review it — not just trust the AI.",
      },
      {
        headline: "Limits on what AI can do.",
        body: "Actions that matter need a person's clear yes. Set limits stop AI from acting outside what it is allowed to do.",
      },
      {
        headline: "Where data stays.",
        body: "Spine brings together the facts from your connected tools without replacing the tools that keep the record. Data is handled to match your rules.",
      },
    ],
  },
} satisfies Record<string, NarrativePageCopy | { meta: NarrativePageCopy["meta"]; hero: PageHeroCopy; sections: ContentSectionCopy[] }>;

export const proofCards: ProofCardCopy[] = [
  {
    title: "The tools you already use",
    description: "Each tool stays itself. SpineWorkspace shares the record and the evidence for the work. The tools do not have to talk to each other directly.",
  },
  {
    title: "What is actually connected",
    description: "SpineWorkspace sees which tools are available and working. It does not assume a connection that is not there.",
  },
  {
    title: "Use what is already there",
    description: "The work uses the tools already open for that person before it reaches for anything else.",
  },
  {
    title: "A person approves",
    description: "Being able to see a tool is not permission to use it. A person approves important actions.",
  },
  {
    title: "Observation and reconciliation",
    description: "Results are observed and verified—not blindly trusted.",
  },
  {
    title: "Continuity across hosts",
    description: "Objectives resume across hosts with the same truth and context.",
  },
];

export const useCaseHubCards: HubCardCopy[] = [
  { title: "Sales", description: "Keep revenue work connected.", href: "/use-cases/sales" },
  { title: "Customer Success", description: "Carry the customer record and the context for each interaction.", href: "/use-cases/customer-success" },
  { title: "Operations", description: "Coordinate work across fragmented systems.", href: "/use-cases/operations" },
  { title: "Founders and Leaders", description: "See goals, KPIs, decisions, and execution together.", href: "/use-cases/founders-and-leaders" },
  { title: "Teams", description: "One workspace for shared work and shared memory.", href: "/use-cases/teams" },
];

export const useCasePages: Record<string, UseCasePageCopy> = {
  sales: {
    meta: {
      title: "Sales — Keep revenue work connected",
      description: "Accounts, pipeline, commitments, and deal history in one workspace, with a person in charge.",
      path: "/use-cases/sales",
    },
    hero: {
      badge: "Sales",
      headline: "Keep revenue work connected.",
      subhead: "Pipeline and commitments from the record, with the context for this deal—without rebuilding the story every Monday.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Accounts", description: "The account record and the context around it—CRM, email, and support—not scattered tabs." },
      { title: "Pipeline", description: "Deals linked to evidence, activity, and risk signals." },
      { title: "Commitments", description: "What was promised, to whom, and whether it's on track." },
      { title: "Follow-ups", description: "Next actions grounded in the record and the context for this deal, not guesswork." },
      { title: "Deal memory", description: "History and decisions preserved across handoffs." },
      { title: "Next actions", description: "Twin surfaces what matters; you approve what executes." },
      { title: "KPI risk", description: "Revenue and pipeline KPIs connected to live work state." },
    ],
  },
  "customer-success": {
    meta: {
      title: "Customer Success — Connected records",
      description: "Health, risk, renewal records, and relationship memory in one workspace.",
      path: "/use-cases/customer-success",
    },
    hero: {
      badge: "Customer Success",
      headline: "Carry the customer record and the context for each interaction.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Health", description: "Usage, engagement, and support signals in one view." },
      { title: "Risk", description: "Early warning with evidence—not renewal-day surprises." },
      { title: "Renewal", description: "Contract terms, history, and commitments linked to the account." },
      { title: "Support history", description: "Tickets and resolutions inform every customer conversation." },
      { title: "Relationship memory", description: "Champions, stakeholders, and prior decisions preserved." },
      { title: "Commitments", description: "What the team owes—and what's been delivered." },
    ],
  },
  operations: {
    meta: {
      title: "Operations — Coordinate connected work",
      description: "Work across teams, handoffs, getting things done, and checking the result.",
      path: "/use-cases/operations",
    },
    hero: {
      badge: "Operations",
      headline: "Coordinate work across scattered tools.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Work across teams", description: "Work flows across teams from the same facts and context." },
      { title: "Handoffs", description: "Facts and context survive every handover—not lost in chat threads." },
      { title: "Getting things done", description: "Actions that follow the rules, with approval before anything that matters." },
      { title: "Evidence", description: "Every step linked to source data and decisions." },
      { title: "Checking the result", description: "Results checked against the source record." },
    ],
  },
  "founders-and-leaders": {
    meta: {
      title: "Founders & Leaders — Goals to execution",
      description: "Strategic visibility, decision traceability, and organizational memory.",
      path: "/use-cases/founders-and-leaders",
    },
    hero: {
      badge: "Founders and Leaders",
      headline: "See goals, KPIs, decisions, and execution together.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Strategic visibility", description: "Goals and KPIs connected to live execution—not stale dashboards." },
      { title: "Decision traceability", description: "What was decided, why, and with what evidence." },
      { title: "Organizational memory", description: "Institutional knowledge that compounds over time." },
      { title: "Continuity", description: "The leadership picture survives team changes and tool switches." },
    ],
  },
  teams: {
    meta: {
      title: "Teams — Shared work and memory",
      description: "Collaboration between humans and AI with approvals and visibility.",
      path: "/use-cases/teams",
    },
    hero: {
      badge: "Teams",
      headline: "One workspace for shared work and shared memory.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Human–AI collaboration", description: "Twin prepares proposals from shared truth and context; team members stay aligned." },
      { title: "Work queues", description: "Prioritized work linked to goals and evidence." },
      { title: "Approvals", description: "Controlled execution—nothing consequential runs without authority." },
      { title: "Visibility", description: "Everyone sees the same business story." },
      { title: "Continuity", description: "Handoffs and tool switches don't reset the story." },
    ],
  },
};

export const ecosystemChips = [
  "SaaS apps",
  "tools already open",
  "Plugins",
  "Tools",
  "Skills",
  "Workflows",
  "Automations",
  "Memory",
];

export const homeCopy = {
  meta: {
    title: "SpineWorkspace — Governed AI workspace for operational work",
    description:
      "Connect authorized business signals from the systems you already use. People and AI work from the same evidence. People stay in charge.",
    path: "/",
  },
  hero: {
    badge: "Governed AI workspace for operational work",
    headline: "Your tools hold the records. Bring the context together. Decide the next step.",
    subhead:
      "SpineWorkspace brings authorized records, messages, documents, and recent decisions into one workspace. People and AI work from the same evidence, review proposals, and approve changes to the systems that own the record.",
    primaryCta: { label: "See the renewal workflow", href: "#renewal-workflow" },
    secondaryCta: { label: "Book a tailored demo", href: "/contact?intent=demo" },
  },
  problem: {
    label: "The problem",
    headline: "Business work is fragmented. AI became one more disconnected interface.",
    body:
      "Teams jump between CRM, email, docs, tickets, and chat. Every handoff loses context. AI assistants answer prompts without knowing your goals, your customers, or what happened last week. Work gets rebuilt from scratch—again and again.",
    cards: [
      { title: "Fragmented tools", description: "Context lives in silos. Nobody sees the full picture." },
      { title: "Disconnected AI", description: "Chat agents don't know your business. Every session starts cold." },
      { title: "Lost continuity", description: "Handoffs break the story. Decisions lack evidence." },
    ],
  },
  product: {
    label: "SpineWorkspace",
    headline: "One workspace around the business—not another app.",
    body: "SpineWorkspace connects your existing tools so people and AI work from the same truth and the context for this task.",
    cards: [
      { title: "Workbench", description: "Role-aware views of goals, truth, context, and work", href: "/adaptive-workspace" },
      { title: "Twin", description: "Prepares a suggestion from the record and the facts, then waits for a person to review it", href: "/twin" },
      { title: "SpineWorkspace", description: "Connects systems without claiming source authority", href: "/platform/spine-fabric" },
      { title: "Governance", description: "Humans approve. AI proposes. Nothing executes without authority.", href: "/governance" },
      { title: "Continuity", description: "Work, memory, and evidence persist across sessions and hosts", href: "/continuity" },
    ],
  },
  ecosystem: {
    label: "Your environment",
    headline: "Connect what you already use. Discover what's available.",
    body:
      "SpineWorkspace connects the tools, files, and conversations you already use. It sees what is actually open, and it carries the record and the evidence forward.",
    cta: { label: "See how hosts connect", href: "/host-connected-environment" },
  },
  proofTeaser: {
    label: "Proof",
    headline: "Independent hosts. Shared truth and context. Governed work.",
    body:
      "SpineWorkspace sees which tools are open, keeps the record and the evidence apart, and waits for a person to decide.",
    cta: { label: "See the proof", href: "/proof" },
  },
  finalCta: {
    headline: "Ready to bring truth and context into one workspace?",
    primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Explore SpineWorkspace", href: "/spineworkspace" },
  },
};

export const blogCategories = [
  "Product",
  "Business context",
  "Human–AI work",
  "Governance and trust",
  "The tools you already use",
  "Company updates",
];
