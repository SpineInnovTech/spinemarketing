import { writeFileSync } from "fs";
import { absoluteUrl } from "../lib/site-url";

async function main() {
  const content = `# Spine InnovTech

> Intelligence for Connected Business — and SpineWorkspace, where humans and AI work from shared business context.

Canonical Domain: ${absoluteUrl("/")}
Documentation Index: ${absoluteUrl("/llms.txt")}

## Platform Architecture & Technical Documentation
- [Documentation Hub](${absoluteUrl("/docs")}): Technical documentation hub, architecture specifications, and API reference.
- [Platform Architecture](${absoluteUrl("/platform")}): Overview of the Spine platform, twin architecture, and contextual continuity layer.
- [Spine Fabric](${absoluteUrl("/platform/spine-fabric")}): Contextual continuity layer connecting source systems without data duplication.
- [How It Works](${absoluteUrl("/platform/how-it-works")}): Deterministic ingestion, entity resolution, and governance boundaries.
- [Infrastructure](${absoluteUrl("/platform/infrastructure")}): Multi-tenant isolation, edge routing, and cloud infrastructure.
- [Integrations Catalog](${absoluteUrl("/platform/integrations")}): 65+ connectors for CRM, ERP, support, code, and communications.
- [Developers](${absoluteUrl("/developers")}): MCP server integration, local development, and API access.
- [Security Architecture](${absoluteUrl("/security")}): Tenant isolation, encryption, access boundaries, and audit logging.
- [Governance Model](${absoluteUrl("/governance")}): Read-and-propose execution model with mandatory human approval.
- [Business Context](${absoluteUrl("/business-context")}): Carrying durable context and evidence across systems of record.
- [Spine Twin](${absoluteUrl("/twin")}): Context-aware assistant operating strictly within permitted business boundaries.
- [The Adaptive Workspace](${absoluteUrl("/adaptive-workspace")}): Role-based workbenches adapting to each function.
- [Approval Gates](${absoluteUrl("/product/approval-gate-twin")}): Governed actions requiring human sign-off before write-back.
- [Continuity](${absoluteUrl("/continuity")}): Multi-session conversational and task continuity without context loss.
- [Host-Connected Environment](${absoluteUrl("/host-connected-environment")}): Operating natively inside customer-managed environments.

## Role & Functional Solutions
- [Account Success](${absoluteUrl("/solutions/customer-success")}): Carry customer history from onboarding to growth.
- [Finance & Business Operations](${absoluteUrl("/solutions/finance")}): Revenue, risk, and operations from unified truth.
- [Sales](${absoluteUrl("/solutions/sales")}): Revenue continuity grounded in records and conversation context.
- [Marketing](${absoluteUrl("/solutions/marketing")}): Campaigns connected to verifiable business outcomes.
- [Content](${absoluteUrl("/solutions/content")}): Editorial production with the brief's full context.
- [Customer Support](${absoluteUrl("/solutions/customer-support")}): Ticket resolution with the full customer story in view.
- [Product & Engineering](${absoluteUrl("/solutions/product-engineering")}): Roadmaps and delivery linked to customer signals.
- [Founders & CXOs](${absoluteUrl("/solutions/founders")}): Goals, KPIs, decisions, and execution in one picture.
- [Human Resources](${absoluteUrl("/solutions/human-resources")}): People operations with the records and context for each decision.
- [Legal](${absoluteUrl("/solutions/legal")}): Contract reviews with evidence and authority.
- [Memory & Knowledge](${absoluteUrl("/solutions/memoryandknowledge")}): Organizational memory that compounds over time.
- [Individual / Personal](${absoluteUrl("/solutions/individual")}): Personal workspace with boundaries kept strictly separate.

## Company & Resources
- [About Spine InnovTech](${absoluteUrl("/about")}): Origins, mission, and operating principles.
- [Company Overview](${absoluteUrl("/company")}): Corporate profile and leadership perspective.
- [Subscriptions & Pricing](${absoluteUrl("/pricing")}): Transparent commercial engagement and limits.
- [Contact](${absoluteUrl("/contact")}): Reach out for quotes, architectural reviews, or demonstrations.
- [Blog](${absoluteUrl("/blog")}): Perspectives on AI governance, shared context, and connected work.
- [Resources](${absoluteUrl("/resources")}): Public assets, documentation references, and architectural materials.
- [Sitemap Directory](${absoluteUrl("/site-map")}): Complete index of all public website pages.
`;

  writeFileSync("public/llms.txt", content.trim() + "\n", "utf8");
  console.log("✓ /llms.txt generated at public/llms.txt");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
