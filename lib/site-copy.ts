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
        "SpineWorkspace brings authoritative truth and the context for the current task together. Source systems stay authoritative.",
      path: "/spineworkspace",
    },
    hero: {
      badge: "SpineWorkspace · Business Context Workbench",
      headline: "One business context. Every domain. Ready to work.",
      subhead:
        "SpineWorkspace connects authorized source records into one governed business-context Fabric, projects role-relevant views across 13 domains and provides ready-built workflows. Original source systems remain authoritative.",
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
          { title: "Spine Platform", description: "The governed architecture behind SpineWorkspace.", href: "/platform" },
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
        body: "A person or approved policy authorizes consequential actions. A proposal remains a proposal until authorized. Execution uses governed capabilities; completion depends on observed and reconciled results.",
      },
      {
        headline: "Business context continues as models and tools evolve.",
        body: "The relevant history, evidence and responsibility belong to the work. Durable business understanding should carry across providers and sessions rather than depend on a single chat history.",
      },
    ],
    crossLinks: {
      prev: { label: "SpineWorkspace", href: "/product" },
      next: { label: "Spine Context Assembler", href: "/business-context" },
      related: [{ label: "Spine Fabric", href: "/platform/spine-fabric" }, { label: "Governed execution", href: "/governance" }],
    },
  },

  businessContext: {
    meta: {
      title: "Business Context — Ingestion & Retrieval | SpineWorkspace",
      description: "Discover, ingest, relate and retrieve governed context with source provenance and role-aware access. Original systems remain authoritative.",
      path: "/business-context",
    },
    hero: {
      badge: "SPINE FABRIC · TRUTH AND CONTEXT",
      headline: "Ingest the truth. Retrieve the context.",
      subhead:
        "Spine Fabric is the governed contextual operating plane behind the Workbench. It relates authorized source records, events, relationships and evidence so humans and AI can retrieve the context relevant to their work.",
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
          "Source systems stay authoritative. A proposal does not become truth until a person with authority accepts it.",
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
        "Spine Triage Bot is a SpineWorkspace capability. It sorts a new message, file, or ticket so a person can see what needs attention. It does not write the record.",
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
        "Spine Folder Monitor is a SpineWorkspace capability. It watches the folders the business already uses. When a file arrives or changes, the workspace can show it with the task. The file stays in the folder.",
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
      subhead: "Sales, Account Success, Finance, Engineering, Operations and leadership use role-relevant views of the same governed business context. Supported standard work starts from prebuilt views rather than custom departmental development.",
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
      title: "Host Connection Evidence | SpineWorkspace",
      description:
        "Understand the separate evidence for host identity, capability discovery, authorization, invocation and reconciliation, with independent authority across hosts.",
      path: "/host-connected-environment",
    },
    hero: {
      badge: "SPINE NETWORK · HOST CONNECTIONS",
      headline: "Know what your host can actually access.",
      subhead:
        "Host identity, discovered tools, authorized capabilities and verified execution are distinct. Spine Network preserves independent host bindings while source systems retain control of their records.",
      primaryCta: { label: "See how work continues", href: "/continuity" },
    },
    sections: [
      {
        headline: "A connected host starts the evidence chain.",
        body:
          "The intended connection experience identifies the host binding, principal, tenant, workspace and permitted scopes. That identity evidence does not establish access to the host's private applications or connectors.",
      },
      {
        headline: "Discovered capabilities still require authority.",
        body:
          "A capability may be explicitly host-exposed, separately bound to Spine or unavailable. Discovery metadata does not grant permission. Current consent, scopes, membership and capability policy determine what may be used.",
      },
      {
        headline: "Verify the invocation and its outcome separately.",
        body: "The five required stages are identity verification, capability discovery, authorization, safe invocation and reconciliation. An ingestion acknowledgement must be followed by canonical materialization, source lineage and authorized retrieval before data readiness is proven.",
      },
      {
        headline: "Carry the work forward with independent permissions.",
        body:
          "Spine Network is designed to preserve the same entity, versioned context, work item and checkpoint across compatible hosts. Each destination re-evaluates authority and produces its own retrieval trace. Private host memory, credentials and privileges do not transfer. These are evidence requirements, not a claim of a verified production handoff.",
      },
    ],
    crossLinks: {
      next: { label: "Continuity", href: "/continuity" },
    },
  },

  governance: {
    meta: {
      title: "Governance — AI can help. Humans stay in control.",
      description: "Humans govern the business. AI helps the business work. Availability does not mean authority.",
      path: "/governance",
    },
    hero: {
      badge: "Governance",
      headline: "Humans govern the business. AI helps the business work.",
      subhead: "A review surface for proposals, evidence, and the person who decides.",
      primaryCta: { label: "Read the security overview", href: "/security" },
    },
    sections: [
      {
        headline: "Authority is a person, not a model.",
        body: "Availability is not authority. Twin can propose. A person with the right scope accepts or rejects the proposal. The source system stays the record.",
      },
      {
        headline: "Three memory scopes.",
        body: "Personal memory stays with the person. Session memory stays with that sitting. Organizational memory is shared context for the organization. None of them replaces the record. They are not blended.",
        items: ["Personal memory", "Session memory", "Organizational memory"],
      },
      {
        headline: "Pending review is the default.",
        body: "A proposal stays pending until someone with authority accepts it. Evidence stays linked to the source system.",
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
      title: "Cross-Host Continuity — One Context, Multiple AI Hosts",
      description: "Business memory, work state, checkpoints, evidence, and outcomes stay connected across sessions and hosts.",
      path: "/continuity",
    },
    hero: {
      badge: "Continuity",
      headline: "One work item. Multiple hosts. Independent authority.",
      primaryCta: { label: "See continuity proof", href: "/proof" },
    },
    sections: [
      {
        headline: "Every tool handoff splits truth from context.",
        body: "Switching between CRM, email, chat, and project tools forces people and AI to reconstruct what happened, why it matters, and what comes next.",
      },
      {
        headline: "Business memory that persists.",
        body: "Versioned context and authorized work state can be resumed across compatible AI hosts through Spine Network. Each host is re-authorized and never inherits another host's private credentials.",
      },
      {
        headline: "Three memory scopes.",
        body: "Personal memory, session memory, and organizational memory are different scopes. A resumed checkpoint carries the work, not a blend of all three.",
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
        "Spine InnovTech builds SpineWorkspace. Spine Fabric, Workbench, Twin, Runtime and Marketplace describe parts of one governed business-context workspace; supporting agents and tools are capabilities, not separately marketed products.",
      path: "/company",
    },
    hero: {
      badge: "Spine InnovTech",
      headline: "We build for the work that gets lost between systems.",
      subhead:
        "Spine InnovTech builds SpineWorkspace. Spine Fabric, Workbench, Twin, Runtime and Marketplace describe parts of one governed business-context workspace; supporting agents and tools are capabilities, not separately marketed products. The systems teams already depend on remain authoritative.",
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
          { title: "Spine Platform", description: "The governed architecture behind SpineWorkspace.", href: "/platform" },
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
          "Adaptive capability — the workspace follows the goal, role, and evidence in front of the work",
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
      title: "Developers — Evaluate Your SpineWorkspace Integration",
      description: "Review connector coverage, events, AI host access and permissions for your SpineWorkspace integration.",
      path: "/developers",
    },
    hero: {
      badge: "Developers",
      headline: "Evaluate your integration.",
      subhead: "Review the connections, events and access controls your team needs. Your existing tools keep the record.",
      primaryCta: { label: "Read the docs", href: DOCS_URL },
    },
    sections: [
      {
        id: "integration-paths",
        headline: "Choose your technical starting point.",
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
      description: "Explore the architecture behind SpineWorkspace: business context, role-aware collaboration, context-aware AI and governed execution.",
      path: "/platform",
    },
    hero: {
      badge: "Spine Platform",
      headline: "One architecture for connected business work.",
      subhead: "Fabric provides shared context. Workbench brings it into role-aware work. Twin helps people understand and prepare. Runtime governs authorized execution and observed outcomes. Connected capabilities extend that architecture.",
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
          { title: "Observation and reconciliation", description: "Results observed, not blindly trusted.", href: "/governance" },
          { title: "Security and governance", description: "Access, auditability, and execution controls.", href: "/security" },
        ],
      },
    ],
  },

  securityPage: {
    meta: {
      title: "Security — Governance, data handling, and bounded execution",
      description: "Access controls, evidence, auditability, and execution boundaries for SpineWorkspace.",
      path: "/security",
    },
    hero: {
      badge: "Security",
      headline: "Controls and limits for the workspace.",
      subhead: "Access, encryption, and what Twin is not allowed to do. Authority and memory scopes live on Governance.",
      primaryCta: { label: "Contact security team", href: "/contact?intent=security" },
    },
    sections: [
      {
        headline: "Governance model.",
        body: "Humans govern the business. AI assists within authority boundaries. Availability of a capability does not grant authority to use it.",
      },
      {
        headline: "Access and authorization.",
        body: "Role-based access, scoped permissions, and the person's permission keep actions within organizational policy.",
      },
      {
        headline: "Evidence and auditability.",
        body: "Actions link to evidence. Audit trails support reconciliation and review—not just model confidence.",
      },
      {
        headline: "Execution controls.",
        body: "Consequential actions require explicit approval. Scoped execution prevents AI from operating outside authorized boundaries.",
      },
      {
        headline: "Data boundaries.",
        body: "Spine assembles context from connected systems without replacing the tools that keep the record. Data handling aligns with your governance requirements.",
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
    title: "Governance boundary",
    description: "Availability ≠ authority. Humans approve consequential actions.",
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
      description: "Accounts, pipeline, commitments, and deal memory in one governed workspace.",
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
      title: "Customer Success — Carry the customer record and the context for each interaction",
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
      title: "Operations — Coordinate work across fragmented systems",
      description: "Cross-functional processes, handoffs, execution, and reconciliation.",
      path: "/use-cases/operations",
    },
    hero: {
      badge: "Operations",
      headline: "Coordinate work across fragmented systems.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Cross-functional processes", description: "Work flows across teams from the same truth and context." },
      { title: "Handoffs", description: "Truth and context survive every transition—not lost in Slack threads." },
      { title: "Execution", description: "Governed actions with approval boundaries." },
      { title: "Evidence", description: "Every step linked to source data and decisions." },
      { title: "Reconciliation", description: "Outcomes checked against the source record." },
    ],
  },
  "founders-and-leaders": {
    meta: {
      title: "Founders and Leaders — Goals, KPIs, and execution together",
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
      title: "Teams — One workspace for shared work and shared memory",
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
      { title: "Approvals", description: "Governed execution—nothing consequential runs without authority." },
      { title: "Visibility", description: "Everyone sees the same business story." },
      { title: "Continuity", description: "Handoffs and host switches don't reset the narrative." },
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
      { title: "Twin", description: "Prepares a proposal from governed truth and context, then waits for review", href: "/twin" },
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
