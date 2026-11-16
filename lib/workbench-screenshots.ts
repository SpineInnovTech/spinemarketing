/**
 * Authentic Workbench Screenshot Asset Library & 4-Part Value Narrative Metadata.
 * 
 * Provenance:
 * All assets captured directly from the authentic local SpineWorkspace Workbench (apps/web)
 * running on Next.js 16 with deterministic demonstration fixtures and the canonical WORKBENCH_SHELL.
 * Verified against docs/WORKBENCH-SCREENSHOT-PROVENANCE.md.
 * 
 * Important Notice:
 * All numerical metrics, ARR/MRR values, pipeline totals, and account scores reflect
 * deterministic demonstration data fixtures used in local testing and QA, NOT audited
 * production performance, live customer telemetry, or verified financial results.
 */

export interface WorkbenchScreenshotItem {
  id: string;
  title: string;
  route: string;
  desktop: string;
  mobile?: string;
  badge?: string;
  alt: string;
}

export interface WorkbenchDomainNarrative {
  domainId: string;
  domainTitle: string;
  tagline: string;
  screenshots: {
    primary: WorkbenchScreenshotItem;
    dashboard?: WorkbenchScreenshotItem;
    secondary?: WorkbenchScreenshotItem;
    twinAction?: WorkbenchScreenshotItem;
  };
  valueNarrative: {
    whatUsersSee: string;
    whatTheyCanDo: string;
    whatManualWorkItReduces: string;
    whyItMatters: string;
  };
}

export const WORKBENCH_SCREENSHOT_CATALOG: Record<string, WorkbenchDomainNarrative> = {
  founderops: {
    domainId: "founderops",
    domainTitle: "Founder Ops",
    tagline: "Founder Cockpit & Strategic Operating Overview",
    screenshots: {
      primary: {
        id: "cockpit",
        title: "Founder's Cockpit",
        route: "/workspace/work/founderops/founder-ops",
        desktop: "/images/workbench/founderops/cockpit-20261014.webp",
        mobile: "/images/workbench/founderops/cockpit-20261014-mobile.webp",
        badge: "Live Workbench Views",
        alt: "Authentic Founder's Cockpit displaying deterministic demonstration metrics: MRR ($94K), aggregate pipeline ($625K), client count, open deals, and top deals by value with named client contacts.",
      },
      dashboard: {
        id: "dashboard",
        title: "Executive Overview",
        route: "/workspace/work/founderops/dashboard",
        desktop: "/images/workbench/founderops/dashboard.webp",
        badge: "Live Workbench Views",
        alt: "FounderOps executive dashboard with demonstration performance indicators and cross-functional company updates.",
      },
      secondary: {
        id: "strategy-leadership",
        title: "Strategy & Leadership",
        route: "/workspace/work/founderops/strategy-leadership",
        desktop: "/images/workbench/founderops/strategy-leadership.webp",
        badge: "Strategic Objectives",
        alt: "Strategy and leadership view tracking demonstration company milestones and executive priorities.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "High-level operational cockpit displaying captured QA metrics: MRR ($94K), aggregate pipeline value ($625K), active client count (4), open deals (3), overdue tasks, top deals by value with named client contacts, and cross-company OKR progress.",
      whatTheyCanDo:
        "Drill down into individual high-value deals, review company-wide operational items, monitor client health indicators, and direct executive attention to overdue commitments.",
      whatManualWorkItReduces:
        "Eliminates piecing together revenue spreadsheets, pulling CRM deal reports, and scheduling status syncs just to know current business pulse.",
      whyItMatters:
        "Provides leadership with immediate, cohesive operating context across business systems without manual spreadsheet assembly.",
    },
  },

  sales: {
    domainId: "sales",
    domainTitle: "Sales",
    tagline: "Sales Pipeline & Opportunity Stages",
    screenshots: {
      primary: {
        id: "pipeline",
        title: "Sales Pipeline",
        route: "/workspace/work/salesops/pipeline",
        desktop: "/images/workbench/sales/pipeline.webp",
        mobile: "/images/workbench/sales/pipeline-mobile.webp",
        badge: "Live Workbench Views",
        alt: "Authentic Sales Pipeline displaying deterministic demonstration deal stages: Proposal ($180K), Negotiation ($350K), and Discovery ($95K) with opportunity ledger.",
      },
      dashboard: {
        id: "dashboard",
        title: "Sales Dashboard",
        route: "/workspace/work/salesops/dashboard",
        desktop: "/images/workbench/sales/dashboard.webp",
        badge: "Live Workbench Views",
        alt: "Sales performance dashboard tracking demonstration quota pacing and deal velocity.",
      },
      secondary: {
        id: "deals",
        title: "Active Deals Ledger",
        route: "/workspace/work/salesops/deals",
        desktop: "/images/workbench/sales/deals.webp",
        badge: "Deals Grid",
        alt: "Detailed deal management ledger with demonstration commercial terms, stakeholder contacts, and next steps.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Opportunity ledger displaying captured QA deals categorized by Proposal ($180K), Negotiation ($350K), and Discovery ($95K) with win probability bars, stage tags, and deal owners.",
      whatTheyCanDo:
        "Filter opportunities by stage, inspect deal velocity, launch new opportunity flows, and review commercial requirements directly beside customer context.",
      whatManualWorkItReduces:
        "Eliminates manual pipeline rollups, CRM data-entry reconciliation, and chasing reps for stage probabilities before sales forecast calls.",
      whyItMatters:
        "Keeps sales velocity visible to downstream customer success and finance teams so delivery and billing align with commercial commitments.",
    },
  },

  marketing: {
    domainId: "marketing",
    domainTitle: "Marketing",
    tagline: "Marketing Attribution & Campaign Delivery",
    screenshots: {
      primary: {
        id: "attribution",
        title: "Marketing Attribution",
        route: "/workspace/work/marketing/attribution",
        desktop: "/images/workbench/marketing/attribution.webp",
        badge: "Live Workbench Views",
        alt: "Authentic Marketing Attribution view showing multi-channel conversion signals, budget allocation, and downstream pipeline influence from demonstration data.",
      },
      dashboard: {
        id: "dashboard",
        title: "Marketing Dashboard",
        route: "/workspace/work/marketing/dashboard",
        desktop: "/images/workbench/marketing/dashboard.webp",
        badge: "Acquisition Overview",
        alt: "Marketing acquisition dashboard summarizing channel spend, conversion rates, and inbound lead volume from demo state.",
      },
      secondary: {
        id: "campaigns",
        title: "Campaign Management",
        route: "/workspace/work/marketing/campaigns",
        desktop: "/images/workbench/marketing/campaigns.webp",
        badge: "Campaign Flights",
        alt: "Marketing campaign management grid with active demo flights and budget pacing.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Multi-channel campaign attribution cards, budget allocations, conversion signals, and audience acquisition funnels connected to downstream customer milestones .",
      whatTheyCanDo:
        "Evaluate lead acquisition velocity, review campaign performance metrics, adjust channel mix, and verify downstream pipeline attribution.",
      whatManualWorkItReduces:
        "Replaces manually stitching Google Ads, LinkedIn Campaign Manager, and CRM lead sources into third-party spreadsheet dashboards.",
      whyItMatters:
        "Clarifies the revenue contribution of marketing programs by connecting early engagement signals to verified commercial contracts.",
    },
  },

  finance: {
    domainId: "finance",
    domainTitle: "Finance",
    tagline: "Invoices & Revenue Forecasting",
    screenshots: {
      primary: {
        id: "invoices",
        title: "Invoices Ledger",
        route: "/workspace/work/finance/invoices",
        desktop: "/images/workbench/finance/invoices.webp",
        badge: "Live Workbench Views",
        alt: "Authentic Invoices view showing demonstration records: invoice numbers, customer accounts (Acme, Stripe, Figma), billed amounts, payment status, and due dates.",
      },
      dashboard: {
        id: "dashboard",
        title: "Finance Dashboard",
        route: "/workspace/work/finance/dashboard",
        desktop: "/images/workbench/finance/dashboard.webp",
        badge: "Cash Flow & Collections",
        alt: "Finance executive dashboard displaying demonstration receivables aging and collection priorities.",
      },
      secondary: {
        id: "forecasting",
        title: "Revenue Forecast",
        route: "/workspace/work/finance/forecasting",
        desktop: "/images/workbench/finance/forecasting.webp",
        badge: "Forecast Model",
        alt: "Financial forecasting view comparing demo contracted ARR with recognized revenue.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Centralized invoice ledger displaying visible: invoice numbers, customer accounts (Acme, Stripe, Figma), billed amounts, payment status (Paid, Sent, Overdue), and issue/due dates.",
      whatTheyCanDo:
        "Filter receivables by status, track payment aging, initiate new customer invoices, and cross-reference billing terms against signed contracts.",
      whatManualWorkItReduces:
        "Eliminates chasing account managers about overdue invoices and manual cross-checking between Stripe, ERP, and email threads.",
      whyItMatters:
        "Protects cash flow predictability and ensures financial records reflect verified operational deliverables.",
    },
  },

  "account-success": {
    domainId: "account-success",
    domainTitle: "Account Success",
    tagline: "Account Story & Domain Coverage",
    screenshots: {
      primary: {
        id: "account-health",
        title: "Account Story Overview",
        route: "/workspace/accounts/acme-corp",
        desktop: "/images/workbench/account-success/account-health.webp",
        mobile: "/images/workbench/account-success/account-health-mobile.webp",
        badge: "Live Workbench Views",
        alt: "Authentic Account Success view displaying deterministic demonstration fixture: Acme Corp story readiness score (100%), verified domain coverage indicators, and health signals.",
      },
      dashboard: {
        id: "dashboard",
        title: "CS Portfolio Dashboard",
        route: "/workspace/work/account-success/dashboard",
        desktop: "/images/workbench/account-success/dashboard.webp",
        badge: "Portfolio Health",
        alt: "Customer Success portfolio overview displaying demonstration renewal health scores, expansion pipeline, and customer sentiment signals.",
      },
      twinAction: {
        id: "twin-action",
        title: "Contextual Twin Recovery Action",
        route: "/workspace/accounts/acme-corp",
        desktop: "/images/workbench/account-success/twin-action.webp",
        badge: "Human-in-the-Loop Gate",
        alt: "Context-aware Spine Twin preparing an account retention intervention with reviewable demonstration evidence awaiting user authorization.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Comprehensive account overview displaying captured QA data: story readiness score (100%), simulated domain coverage (CRM, support tickets, product telemetry), risk indicators, and contextual Twin recommendations.",
      whatTheyCanDo:
        "Review unified customer health signals, examine open support escalation risks, evaluate contract renewals, and approve Twin-prepared recovery plans.",
      whatManualWorkItReduces:
        "Prevents spending hours before customer check-ins digging through Jira tickets, Zendesk cases, and CRM notes to understand client sentiment.",
      whyItMatters:
        "Enables proactive churn prevention by relating customer signals across tools rather than relying on disconnected status updates.",
    },
  },

  "technical-account-success": {
    domainId: "technical-account-success",
    domainTitle: "Technical Account Success",
    tagline: "Integration Health & API Architecture Readiness",
    screenshots: {
      primary: {
        id: "integration-health",
        title: "Integration Health",
        route: "/workspace/work/technical-account-success/integration-health",
        desktop: "/images/workbench/technical-account-success/integration-health.webp",
        badge: "Connector Status",
        alt: "Authentic Technical Integration Health view showing API sync latency, webhook thresholds, and customer architecture connections from demonstration state.",
      },
      dashboard: {
        id: "dashboard",
        title: "Tech CS Dashboard",
        route: "/workspace/work/technical-account-success/dashboard",
        desktop: "/images/workbench/technical-account-success/dashboard.webp",
        badge: "Technical Portfolio",
        alt: "Technical account management portfolio dashboard showing demonstration customer environments and API error rates.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Simulated connector status, API synchronization health, webhook error thresholds, and customer architecture dependency maps from captured QA state.",
      whatTheyCanDo:
        "Detect integration anomalies before customers report outages, inspect endpoint payload schemas, and coordinate fixes with engineering.",
      whatManualWorkItReduces:
        "Replaces asking customer IT contacts for log excerpts or waiting for customer escalations to uncover broken webhooks and sync failures.",
      whyItMatters:
        "Preserves customer trust during technical onboarding and maintains enterprise data pipeline reliability.",
    },
  },

  operations: {
    domainId: "operations",
    domainTitle: "Business Operations",
    tagline: "Command Center & Cross-Team Workflows",
    screenshots: {
      primary: {
        id: "workflows",
        title: "Operational Workflows",
        route: "/workspace/work/bizops/workflows",
        desktop: "/images/workbench/bizops/workflows.webp",
        badge: "Workflow Orchestration",
        alt: "Authentic BizOps Workflows view showing cross-functional execution processes, active pipelines, and handoff stages from demonstration data.",
      },
      dashboard: {
        id: "command-center",
        title: "Operations Command Center",
        route: "/workspace/work/bizops/command-center",
        desktop: "/images/workbench/bizops/command-center.webp",
        badge: "Command Center",
        alt: "Business Operations command center monitoring demonstration company bottlenecks, team capacity, and operational throughput.",
      },
      secondary: {
        id: "strategic-hub",
        title: "Strategic Hub",
        route: "/workspace/work/bizops/strategic-hub",
        desktop: "/images/workbench/bizops/strategic-hub.webp",
        badge: "Execution Alignment",
        alt: "Strategic alignment view connecting operational milestones with executive quarterly goals in demonstration mode.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Cross-functional operational workflows, active execution pipelines, bottlenecks across handoffs, and team capacity utilization meters .",
      whatTheyCanDo:
        "Reallocate workload across operational bottlenecks, trigger automated handoff protocols, and audit cross-departmental SLA adherence.",
      whatManualWorkItReduces:
        "Eliminates manual daily standup reporting, repetitive status checks across departments, and spreadsheet-based project coordination.",
      whyItMatters:
        "Ensures company operations scale predictably without administrative friction breaking delivery timelines.",
    },
  },

  revops: {
    domainId: "revops",
    domainTitle: "Revenue Operations",
    tagline: "Funnel Velocity & Revenue Forecasting",
    screenshots: {
      primary: {
        id: "forecast",
        title: "Revenue Forecast",
        route: "/workspace/work/revops/forecast",
        desktop: "/images/workbench/revops/forecast.webp",
        badge: "Live Workbench Views",
        alt: "Authentic RevOps Forecast view showing demonstration funnel conversion velocity, quote-to-cash timing, and forecast confidence bands.",
      },
      dashboard: {
        id: "dashboard",
        title: "RevOps Dashboard",
        route: "/workspace/work/revops/dashboard",
        desktop: "/images/workbench/revops/dashboard.webp",
        badge: "Funnel Metrics",
        alt: "Revenue Operations dashboard detailing demonstration pipeline conversion rates and sales velocity metrics.",
      },
      secondary: {
        id: "pipeline",
        title: "Revenue Pipeline Alignment",
        route: "/workspace/work/revops/pipeline",
        desktop: "/images/workbench/revops/pipeline.webp",
        badge: "Pipeline checks",
        alt: "RevOps pipeline alignment screen showing demonstration cross-system deal hygiene and CRM stage progression.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Funnel conversion rates, quote-to-cash cycle duration, stage-by-stage pipeline velocity, and revenue forecast confidence bands from captured QA data.",
      whatTheyCanDo:
        "Model conversion scenarios, adjust sales capacity targets, evaluate win-loss patterns, and optimize the quote-to-cash pipeline.",
      whatManualWorkItReduces:
        "Eliminates complex, fragile Excel forecasting macros and multi-hour data-cleaning cycles every quarter-end.",
      whyItMatters:
        "Provides executive leadership with defensible, data-backed revenue forecasts grounded in connected pipeline records.",
    },
  },

  productengineering: {
    domainId: "productengineering",
    domainTitle: "Product Engineering",
    tagline: "Roadmap Initiatives & Sprint Execution",
    screenshots: {
      primary: {
        id: "roadmap",
        title: "Product Roadmap",
        route: "/workspace/work/product-engineering/roadmap",
        desktop: "/images/workbench/product-engineering/roadmap.webp",
        badge: "Roadmap Initiatives",
        alt: "Authentic Product Roadmap view showing demonstration initiatives (Unified Twin Reasoning, Multi-Cloud Gateway, Policy Enforcement) with quarter timelines.",
      },
      dashboard: {
        id: "dashboard",
        title: "Engineering Dashboard",
        route: "/workspace/work/product-engineering/dashboard",
        desktop: "/images/workbench/product-engineering/dashboard.webp",
        badge: "Delivery Velocity",
        alt: "Engineering delivery dashboard tracking release velocity, open PRs, and system health metrics in demonstration state.",
      },
      secondary: {
        id: "sprints",
        title: "Active Sprints",
        route: "/workspace/work/product-engineering/sprints",
        desktop: "/images/workbench/product-engineering/sprints.webp",
        badge: "Sprint Tracking",
        alt: "Engineering sprint tracking board connecting demonstration Jira work items to product commitments.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Multi-quarter roadmap initiatives (Unified Twin Reasoning, Multi-Cloud Gateway, Policy Enforcement) with status filters and sprint progress indicators.",
      whatTheyCanDo:
        "Connect technical epics directly to customer requirements, prioritize feature delivery, monitor sprint completion, and triage technical blockers.",
      whatManualWorkItReduces:
        "Stops engineers from repeatedly writing status updates for customer-facing teams and eliminates fragmented Jira-to-roadmap sync meetings.",
      whyItMatters:
        "Bridges the gap between customer commitments and technical execution so product development delivers measurable business value.",
    },
  },

  service: {
    domainId: "service",
    domainTitle: "Services",
    tagline: "Professional Services & SLA Performance",
    screenshots: {
      primary: {
        id: "sla",
        title: "SLA Performance",
        route: "/workspace/work/service/sla-dashboard",
        desktop: "/images/workbench/service/sla.webp",
        badge: "SLA Compliance",
        alt: "Authentic Professional Services SLA view showing demonstration milestone compliance rates, delivery timelines, and project health.",
      },
      dashboard: {
        id: "dashboard",
        title: "Services Delivery Dashboard",
        route: "/workspace/work/service/dashboard",
        desktop: "/images/workbench/service/dashboard.webp",
        badge: "Delivery Projects",
        alt: "Services delivery dashboard tracking client engagement milestones and consultant utilization in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Client delivery milestones, project SLA compliance rates, resource allocation timelines, and milestone deliverables .",
      whatTheyCanDo:
        "Monitor implementation health, detect delivery delay risks early, and coordinate resource allocation across client projects.",
      whatManualWorkItReduces:
        "Replaces weekly consultant utilization spreadsheets and manual SLA tracking across disparate client project boards.",
      whyItMatters:
        "Keeps professional services delivery on schedule, within scope, and aligned with contracted client milestones.",
    },
  },

  support: {
    domainId: "support",
    domainTitle: "Support",
    tagline: "Support Queue & Incident Escalation",
    screenshots: {
      primary: {
        id: "tickets",
        title: "Support Tickets",
        route: "/workspace/work/support/tickets",
        desktop: "/images/workbench/support/tickets.webp",
        badge: "Triage Queue",
        alt: "Authentic Support Tickets view showing demonstration incidents: priority, customer tier, response times, and resolution status.",
      },
      dashboard: {
        id: "dashboard",
        title: "Support Dashboard",
        route: "/workspace/work/support/dashboard",
        desktop: "/images/workbench/support/dashboard.webp",
        badge: "Queue Metrics",
        alt: "Customer support dashboard tracking ticket volumes, average handle time, and CSAT ratings in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Triage queues categorized by priority and customer tier, response time metrics, ticket resolution velocity, and recurring issue tags .",
      whatTheyCanDo:
        "Escalate critical customer incidents to product engineering with attached diagnostic evidence, assign tickets to domain specialists, and track SLAs.",
      whatManualWorkItReduces:
        "Prevents copying incident context between Zendesk, Slack channels, and GitHub issues.",
      whyItMatters:
        "Reduces time-to-resolution for critical client issues and ensures customer frustration is caught before it turns into churn.",
    },
  },

  humanresources: {
    domainId: "humanresources",
    domainTitle: "Human Resources",
    tagline: "People Directory & Organizational Positions",
    screenshots: {
      primary: {
        id: "people",
        title: "People Directory",
        route: "/workspace/work/humanresources/people",
        desktop: "/images/workbench/humanresources/people.webp",
        badge: "Headcount Directory",
        alt: "Authentic People Directory view showing demonstration employee profiles, role assignments, department structures, and reporting hierarchy.",
      },
      dashboard: {
        id: "dashboard",
        title: "HR Overview",
        route: "/workspace/work/humanresources/dashboard",
        desktop: "/images/workbench/humanresources/dashboard.webp",
        badge: "People Analytics",
        alt: "Human resources executive dashboard tracking demonstration headcount growth, open requisitions, and retention metrics.",
      },
      secondary: {
        id: "positions",
        title: "Open Positions",
        route: "/workspace/work/humanresources/positions",
        desktop: "/images/workbench/humanresources/positions.webp",
        badge: "Hiring Requisitions",
        alt: "Organizational open positions grid tracking recruiting pipelines and hiring stages in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Organizational headcount, team role assignments, open requisitions, and departmental reporting lines .",
      whatTheyCanDo:
        "Review organizational capacity, monitor hiring pipeline progress, and verify team role definitions against business goals.",
      whatManualWorkItReduces:
        "Eliminates outdated organizational charts, disjointed HRIS exports, and manual head-count reconciliation.",
      whyItMatters:
        "Aligns workforce planning with business priorities so team staffing directly supports company commitments.",
    },
  },

  legal: {
    domainId: "legal",
    domainTitle: "Legal",
    tagline: "Contract Repository & Regulatory Compliance",
    screenshots: {
      primary: {
        id: "contracts",
        title: "Contract Repository",
        route: "/workspace/work/legal/contracts",
        desktop: "/images/workbench/legal/contracts.webp",
        badge: "Executed Agreements",
        alt: "Authentic Legal Contracts view showing demonstration executed agreements, renewal dates, counterparty details, and governing clauses.",
      },
      dashboard: {
        id: "dashboard",
        title: "Legal Dashboard",
        route: "/workspace/work/legal/dashboard",
        desktop: "/images/workbench/legal/dashboard.webp",
        badge: "Legal Operations",
        alt: "Legal operations dashboard tracking contract review turnaround, active matters, and risk exposure in demonstration state.",
      },
      secondary: {
        id: "compliance",
        title: "Compliance Register",
        route: "/workspace/work/legal/compliance",
        desktop: "/images/workbench/legal/compliance.webp",
        badge: "Regulatory Controls",
        alt: "Corporate compliance register tracking data privacy obligations and review logs in demonstration mode.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Executed contract repository, renewal and termination notification schedules, compliance policy controls, and regulatory audit checklists .",
      whatTheyCanDo:
        "Search signed MSAs and DPAs, track auto-renewal deadlines, and verify organizational adherence to security and privacy policies.",
      whatManualWorkItReduces:
        "Replaces hunting through cloud drives and email threads for signed contract PDFs and key renewal clauses.",
      whyItMatters:
        "Keeps contract evidence in one place so a person can check a renewal or a privacy duty before it is missed.",
    },
  },

  content: {
    domainId: "content",
    domainTitle: "Content",
    tagline: "Editorial Production & Publication Calendar",
    screenshots: {
      primary: {
        id: "articles",
        title: "Article Management",
        route: "/workspace/work/content/articles",
        desktop: "/images/workbench/content/articles.webp",
        badge: "Editorial Pipeline",
        alt: "Authentic Content Articles view showing demonstration publication drafts, author assignments, and review states.",
      },
      dashboard: {
        id: "dashboard",
        title: "Content Dashboard",
        route: "/workspace/work/content/dashboard",
        desktop: "/images/workbench/content/dashboard.webp",
        badge: "Editorial Performance",
        alt: "Content editorial dashboard tracking publication velocity and article engagement signals in demonstration state.",
      },
      secondary: {
        id: "calendar",
        title: "Publication Calendar",
        route: "/workspace/work/content/calendar",
        desktop: "/images/workbench/content/calendar.webp",
        badge: "Release Schedule",
        alt: "Editorial calendar scheduling upcoming releases and social distribution flights in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Editorial production queue, publication schedule, author assignments, and draft review states linked to marketing campaign themes .",
      whatTheyCanDo:
        "Manage publication pipelines, coordinate editorial review workflows, and schedule releases aligned with product milestones.",
      whatManualWorkItReduces:
        "Eliminates messy shared spreadsheets for editorial tracking and disconnects between writing drafts and CMS releases.",
      whyItMatters:
        "Maintains consistent brand messaging and coordinates content publication with corporate product announcements.",
    },
  },

  "business-intelligence": {
    domainId: "business-intelligence",
    domainTitle: "Business Intelligence",
    tagline: "Unified Metrics & Enterprise Analytics",
    screenshots: {
      primary: {
        id: "metrics",
        title: "Unified Metrics",
        route: "/workspace/work/business-intelligence/metrics",
        desktop: "/images/workbench/business-intelligence/metrics.webp",
        badge: "Metric Catalog",
        alt: "Authentic Business Intelligence Metrics view showing cross-department trend lines, metric definitions, and data lineage in demonstration state.",
      },
      dashboard: {
        id: "dashboard",
        title: "BI Executive Dashboard",
        route: "/workspace/work/business-intelligence/dashboard",
        desktop: "/images/workbench/business-intelligence/dashboard.webp",
        badge: "Executive Analytics",
        alt: "Business intelligence executive analytics overview aggregating financial and operational performance indicators in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Unified metric dashboards, cross-department trend lines, anomaly detections, and verified data model lineage .",
      whatTheyCanDo:
        "Slice operational KPIs by cohort or region, explore metric correlations, and export verified datasets for strategic planning.",
      whatManualWorkItReduces:
        "Eliminates maintaining redundant dashboard queries in BI tools when underlying schemas change.",
      whyItMatters:
        "Establishes a single source of truth for corporate metrics across all executive decision-makers.",
    },
  },

  campaigns: {
    domainId: "campaigns",
    domainTitle: "Campaigns",
    tagline: "Campaign Operations & Omnichannel Delivery",
    screenshots: {
      primary: {
        id: "campaigns",
        title: "Campaign Operations",
        route: "/workspace/work/campaigns/campaigns",
        desktop: "/images/workbench/campaigns/campaigns.webp",
        badge: "Omnichannel Flights",
        alt: "Authentic Campaigns view showing demonstration execution flights, channel spend, and creative deliverables.",
      },
      dashboard: {
        id: "dashboard",
        title: "Campaigns Dashboard",
        route: "/workspace/work/campaigns/dashboard",
        desktop: "/images/workbench/campaigns/dashboard.webp",
        badge: "Flight Progress",
        alt: "Campaign operations dashboard tracking launch schedules and spend efficiency in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Active campaign flight schedules, budget utilization across channels, creative asset statuses, and audience engagement benchmarks .",
      whatTheyCanDo:
        "Coordinate multi-channel campaign launches, adjust flight timing, and verify creative approval gates before publishing.",
      whatManualWorkItReduces:
        "Eliminates manual coordination across email, advertising, and social platform ad managers.",
      whyItMatters:
        "Ensures marketing campaigns launch on schedule with complete cross-team alignment.",
    },
  },

  "knowledge-management": {
    domainId: "knowledge-management",
    domainTitle: "Knowledge Management",
    tagline: "Knowledge Base & Corporate Memory",
    screenshots: {
      primary: {
        id: "knowledge",
        title: "Knowledge Repository",
        route: "/workspace/work/knowledge-management/knowledge",
        desktop: "/images/workbench/knowledge-management/knowledge.webp",
        badge: "Verified SOPs",
        alt: "Authentic Knowledge Management view showing corporate documentation, policy guides, and institutional SOPs in demonstration state.",
      },
      dashboard: {
        id: "dashboard",
        title: "Knowledge Dashboard",
        route: "/workspace/work/knowledge-management/dashboard",
        desktop: "/images/workbench/knowledge-management/dashboard.webp",
        badge: "Knowledge Freshness",
        alt: "Knowledge management dashboard tracking documentation coverage and article staleness in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Curated corporate documentation, policy guides, procedural handbooks, and contextual search results grounded in captured QA company evidence.",
      whatTheyCanDo:
        "Search verified institutional knowledge, publish SOP updates, and verify document freshness dates.",
      whatManualWorkItReduces:
        "Stops employees from asking teammates repetitive onboarding and process questions in chat channels.",
      whyItMatters:
        "Preserves corporate knowledge as employees and teams evolve, ensuring operational continuity.",
    },
  },

  "book-of-records": {
    domainId: "book-of-records",
    domainTitle: "Book of Records",
    tagline: "A record of decisions",
    screenshots: {
      primary: {
        id: "audit-trail",
        title: "Decision log",
        route: "/workspace/work/book-of-records/audit-trail",
        desktop: "/images/workbench/book-of-records/audit-trail.webp",
        badge: "Verifiable Ledger",
        alt: "Authentic Book of Records Audit Trail view displaying timestamped decisions, policy gates, and verification outcomes in demonstration state.",
      },
      dashboard: {
        id: "dashboard",
        title: "Records Dashboard",
        route: "/workspace/work/book-of-records/dashboard",
        desktop: "/images/workbench/book-of-records/dashboard.webp",
        badge: "Record status",
        alt: "Book of Records dashboard showing system event checks in demonstration state.",
      },
      secondary: {
        id: "decisions",
        title: "Decision Register",
        route: "/workspace/work/book-of-records/decisions",
        desktop: "/images/workbench/book-of-records/decisions.webp",
        badge: "Decision History",
        alt: "Verified decision register capturing human-in-the-loop approvals and policy sign-offs in demonstration state.",
      },
    },
    valueNarrative: {
      whatUsersSee:
      "Verifiable ledger of executive decisions, policy changes, approval gate logs, and cross-system data modifications from captured QA data.",
      whatTheyCanDo:
        "Review the log of decisions, see who approved an important action, and follow that decision back to the result.",
      whatManualWorkItReduces:
        "Eliminates stressful, time-consuming audit preparation and manual log gathering across disjointed cloud services.",
      whyItMatters:
        "Keeps a record people can check when they need to show what was decided and who approved it. This view is not a certification.",
    },
  },

  common: {
    domainId: "common",
    domainTitle: "Shared Workbench Shell",
    tagline: "Shared Navigation & Role-Specific Work",
    screenshots: {
      primary: {
        id: "shared-shell",
        title: "Workbench Shell · FounderOps",
        route: "/workspace/work/founderops/founder-ops",
        desktop: "/images/workbench/founderops/cockpit-20261014.webp",
        mobile: "/images/workbench/founderops/cockpit-20261014-mobile.webp",
        badge: "Live Workbench Views",
        alt: "Authentic shared Workbench navigation around a populated FounderOps QA capture.",
      },
    },
    valueNarrative: {
      whatUsersSee: "Shared navigation around the FounderOps view.",
      whatTheyCanDo: "Move between common work areas and role-specific views within one shell, subject to workspace permissions.",
      whatManualWorkItReduces: "A consistent shell can reduce repeated navigation across departmental tools.",
      whyItMatters: "Roles share a work environment while retaining separate permissions and relevant context.",
    },
  },
};

/**
 * Resolves a domain identifier or alias to its canonical screenshot narrative.
 * Returns undefined if the projection has no published authentic screenshot catalogue.
 * Prevents unrelated fallback to FounderOps for unmapped or internal projections.
 */
export function getDomainScreenshotNarrative(domainId?: string): WorkbenchDomainNarrative | undefined {
  if (!domainId) return WORKBENCH_SCREENSHOT_CATALOG.founderops;

  const normalized = domainId.toLowerCase().trim();

  // Alias lookup: Only map verified aliases to their exact domain
  // NOTE: 'ops' is NOT mapped to 'operations' because technical Ops is a separate, unmapped projection.
  const aliases: Record<string, string> = {
    founder: "founderops",
    founderops: "founderops",
    founders: "founderops",
    sales: "sales",
    salesops: "sales",
    marketing: "marketing",
    finance: "finance",
    "finance-leaders": "finance",
    "account-success": "account-success",
    "customer-success": "account-success",
    "technical-account-success": "technical-account-success",
    operations: "operations",
    "business-ops": "operations",
    bizops: "operations",
    revops: "revops",
    productengineering: "productengineering",
    "product-engineering": "productengineering",
    product: "productengineering",
    service: "service",
    services: "service",
    support: "support",
    "customer-support": "support",
    humanresources: "humanresources",
    "human-resources": "humanresources",
    hr: "humanresources",
    legal: "legal",
    content: "content",
    "business-intelligence": "business-intelligence",
    bi: "business-intelligence",
    campaigns: "campaigns",
    "knowledge-management": "knowledge-management",
    knowledge: "knowledge-management",
    memoryandknowledge: "knowledge-management",
    "book-of-records": "book-of-records",
    personal: "common",
    common: "common",
    home: "common",
  };

  const canonicalKey = aliases[normalized];
  if (!canonicalKey) return undefined;

  return WORKBENCH_SCREENSHOT_CATALOG[canonicalKey];
}
