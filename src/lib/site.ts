import { referralUrl, SITE_LINKS } from "./site-links";

export const COMPANY = "Spine InnovTech";
export const LEGAL = "Spine InnovTech Private Limited";
export const PRODUCT = "Spine Workspace";
export const EMAIL = "connect@spineworkspace.com";
export const PRODUCT_SITE = referralUrl(SITE_LINKS.product);

export const offerings = [
  { href: "/workspace", name: "Spine Workspace", line: "Keep your AI. Keep your tools. Connect your work." },
  { href: "/technology/fabric", name: "Spine Fabric", line: "Living business memory, not a document store." },
  { href: "/technology#workbench", name: "Workbench", line: "Nine shell entries. My Work opens the modes." },
  { href: "/twin", name: "Twin", line: "The context-aware counterpart. It prepares. It does not decide." },
  { href: "/governance", name: "Governance", line: "Hermes coordinates execution. A proposal is not permission." },
  { href: "/technology/network", name: "Host Connected", line: "Connect compatible AI hosts through supported capabilities and explicit permissions." },
] as const;

export const CAPTURE_NOTE =
  "QA fixture capture of an application view. Counts, readiness figures and host badges are not live customer telemetry, connection proof, or a completed external action.";

export const nav = [
  { to: "/company", label: "Company", exact: true },
  { to: "/workspace", label: "Products", exact: true },
  { to: "/technology", label: "Technology", exact: false },
  { to: "/insights", label: "Insights", exact: true },
  { to: "/docs", label: "Docs", exact: true },
] as const;

export const stages = [
  {
    name: "Gather",
    happens: "Agents retrieve relevant information from authorized sources.",
    controls: "The sources and the evidence that is actually available.",
  },
  {
    name: "Organize",
    happens: "Spine relates records, people, commitments and work.",
    controls: "A connected business situation, not a pile of exports.",
  },
  {
    name: "Project",
    happens: "That context appears in a work view suited to the task.",
    controls: "Dashboard, Canvas and other supported views.",
  },
  {
    name: "Prepare",
    happens: "AI assembles an explanation, a draft or a proposed next step.",
    controls: "The proposal, the supporting context, and what is still unresolved.",
  },
  {
    name: "Decide",
    happens: "You review the preparation and direct the work.",
    controls: "Edit, request changes, approve or decline where the workflow supports it.",
  },
  {
    name: "Continue",
    happens: "Authorized outcomes and decisions inform the next step.",
    controls: "What happened, and what still needs attention.",
  },
] as const;

export const renewal = [
  { title: "Understand the request", body: "Identify the account, the renewal and the work that needs attention." },
  { title: "Bring the context together", body: "Review related commitments, opportunities, support issues and available evidence." },
  { title: "Prepare the next step", body: "Use AI assistance to assemble a working plan or a proposed follow-up." },
  { title: "Make the decision", body: "Inspect the context, revise the proposal and determine what may proceed.", emphasis: true },
  { title: "Keep the work understandable", body: "Retain the relevant decision and outcome so the next person or session can continue." },
] as const;

export const principles = [
  { title: "Shared context", body: "People and AI should have an understandable business foundation for the work they do together." },
  { title: "Human direction", body: "AI capability operates within the authority granted to it. A proposal is not permission." },
  { title: "Reuse before duplication", body: "Build on existing tools and authorized connections wherever that is supported." },
  { title: "Evidence alongside proposals", body: "Show what supports a recommendation, and what remains uncertain." },
  { title: "Readiness for real work", body: "Provide standard surfaces rather than asking every team to build its own interface." },
  { title: "Continuity with boundaries", body: "Preserve relevant context without bypassing identity, permissions or source ownership." },
] as const;

export const faqs = [
  {
    q: "What does Spine InnovTech build?",
    a: "Technology that lets people and AI work from shared business context. Agents support preparation. People retain direction and authority. Spine Workspace is the flagship product, not the whole of the company.",
  },
  {
    q: "Do we have to replace our existing tools?",
    a: "No. Spine is designed to work with supported tools. Those applications continue to own their records and operations.",
  },
  {
    q: "Do we need to recreate all our connections?",
    a: "Where a compatible host already exposes an authorized connection or capability, Spine can reuse it. Other sources may need a supported integration and a separate authorization.",
  },
  {
    q: "Can we keep using our preferred AI host?",
    a: "Compatibility depends on the host, the connection methods it exposes, and the capabilities you are authorized to use. Spine Network is designed for context and continuity across compatible environments. It does not make every host equivalent.",
  },
  {
    q: "Does shared context mean everyone can see everything?",
    a: "No. Shared business context stays subject to identity, workspace boundaries and permissions.",
  },
  {
    q: "Does AI decide what happens?",
    a: "AI prepares and proposes within the supported workflow. Consequential actions follow the authority, policy and approval requirements that apply.",
  },
  {
    q: "What does ready from day one mean?",
    a: "Standard work views are already built. Your team does not have to engineer those interfaces first. Source access, connections and permitted actions still require the appropriate setup.",
  },
  {
    q: "Is Spine Workspace only a Canvas?",
    a: "No. It includes Dashboard and Canvas, alongside supported role-relevant views over the same Spine Fabric.",
  },
  {
    q: "Are the screenshots live customer data?",
    a: "No. Published captures use QA fixture data to show application views. They are not customer outcomes or verified live telemetry.",
  },
  {
    q: "How do we decide whether it is worth paying for?",
    a: "Evaluate one workflow you already know. Look at how much preparation is still manual, whether the evidence behind a proposal is visible, whether the next decision is clear, and whether another person or session can continue with the control your team requires. Current plans and commercial terms live on the Spine Workspace product site.",
  },
] as const;

export const intents = [
  { id: "evaluation", label: "Product evaluation" },
  { id: "technology", label: "Technology discussion" },
  { id: "hosts", label: "Host connections" },
  { id: "partnership", label: "Partnership" },
  { id: "security", label: "Security question" },
  { id: "general", label: "General inquiry" },
] as const;

export type IntentId = (typeof intents)[number]["id"];
