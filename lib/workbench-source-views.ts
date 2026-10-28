/**
 * Source-backed Workbench view inventory, extracted 2026-10-12 from
 * SpineInnovTech/spineworkspace-live on main.
 * Source: packages/workbench-config/src/domain-estate.ts (23 projections),
 * packages/workbenches/src/<domain>/views.ts (domain manifests) and
 * apps/web/components/l1/domain-view-runtime-registry.tsx (runtime-only domains).
 * These are declared views, NOT screenshots, UAT certification or availability claims.
 */
export interface WorkbenchSourceView { id: string; label: string; kind: string }
export interface WorkbenchSourceDomain {
  id: string;
  title: string;
  benefit: string;
  audience: "registered" | "internal";
  definitionSource: "domain-manifest" | "l1-runtime";
  views: WorkbenchSourceView[];
  featured: string[];
}
export const WORKBENCH_SOURCE_DOMAINS: WorkbenchSourceDomain[] = [
  {
    "id": "account-success",
    "title": "Account Success",
    "benefit": "Follow account health, stakeholder commitments, renewals and risks without reconstructing customer history.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "cs-today",
        "label": "CS Today",
        "kind": "dashboard"
      },
      {
        "id": "csm-accounts-hub",
        "label": "CSM Accounts Hub",
        "kind": "dashboard"
      },
      {
        "id": "intelligence-center",
        "label": "Intelligence Center",
        "kind": "dashboard"
      },
      {
        "id": "accounts",
        "label": "Accounts",
        "kind": "table"
      },
      {
        "id": "account-master",
        "label": "Account Master",
        "kind": "dashboard"
      },
      {
        "id": "account-health",
        "label": "Account Health",
        "kind": "dashboard"
      },
      {
        "id": "at-risk",
        "label": "At Risk",
        "kind": "table"
      },
      {
        "id": "contacts",
        "label": "Contacts",
        "kind": "table"
      },
      {
        "id": "account-team",
        "label": "Account Team",
        "kind": "table"
      },
      {
        "id": "people-team",
        "label": "People & Team",
        "kind": "table"
      },
      {
        "id": "renewals",
        "label": "Renewals",
        "kind": "table"
      },
      {
        "id": "success-plans",
        "label": "Success Plans",
        "kind": "table"
      },
      {
        "id": "risk-matrix",
        "label": "Risk Matrix",
        "kind": "dashboard"
      },
      {
        "id": "risk-register",
        "label": "Risk Register",
        "kind": "table"
      },
      {
        "id": "engagement-log",
        "label": "Engagement Log",
        "kind": "feed"
      },
      {
        "id": "meetings",
        "label": "Meetings",
        "kind": "table"
      },
      {
        "id": "initiatives",
        "label": "Initiatives",
        "kind": "table"
      },
      {
        "id": "strategic-objectives",
        "label": "Strategic Objectives",
        "kind": "table"
      },
      {
        "id": "stakeholder-outcomes",
        "label": "Stakeholder Outcomes",
        "kind": "table"
      },
      {
        "id": "business-context",
        "label": "Business Context",
        "kind": "dashboard"
      },
      {
        "id": "projects",
        "label": "Projects",
        "kind": "table"
      },
      {
        "id": "tasks",
        "label": "Tasks",
        "kind": "table"
      },
      {
        "id": "task-manager",
        "label": "Task Manager",
        "kind": "board"
      },
      {
        "id": "documents",
        "label": "Documents",
        "kind": "table"
      },
      {
        "id": "capabilities",
        "label": "Capabilities",
        "kind": "table"
      },
      {
        "id": "platform-health",
        "label": "Platform Health",
        "kind": "dashboard"
      },
      {
        "id": "value-streams",
        "label": "Value Streams",
        "kind": "dashboard"
      },
      {
        "id": "insights",
        "label": "Insights",
        "kind": "dashboard"
      },
      {
        "id": "company-growth",
        "label": "Company Growth",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "account-health",
      "renewals",
      "cs-today",
      "csm-accounts-hub"
    ]
  },
  {
    "id": "technical-account-success",
    "title": "Technical Account Success",
    "benefit": "Review implementations, technical health, integration dependencies and escalations in account context.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "technical-health",
        "label": "Technical Health",
        "kind": "dashboard"
      },
      {
        "id": "implementation",
        "label": "Implementation",
        "kind": "dashboard"
      },
      {
        "id": "integrations",
        "label": "Integrations",
        "kind": "table"
      },
      {
        "id": "architecture-reviews",
        "label": "Architecture Reviews",
        "kind": "dashboard"
      },
      {
        "id": "platform-usage",
        "label": "Platform Usage",
        "kind": "dashboard"
      },
      {
        "id": "api-portfolio",
        "label": "API Portfolio",
        "kind": "table"
      },
      {
        "id": "technical-roadmap",
        "label": "Technical Roadmap",
        "kind": "board"
      },
      {
        "id": "escalations",
        "label": "Escalations",
        "kind": "table"
      },
      {
        "id": "documentation",
        "label": "Documentation",
        "kind": "table"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "technical-health",
      "integrations",
      "implementation",
      "architecture-reviews"
    ]
  },
  {
    "id": "sales",
    "title": "Sales",
    "benefit": "Connect leads, deals, activities and forecasting to the next commercial decision.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Sales Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "pipeline",
        "label": "Pipeline",
        "kind": "board"
      },
      {
        "id": "deals",
        "label": "Deals",
        "kind": "table"
      },
      {
        "id": "contacts",
        "label": "Contacts",
        "kind": "table"
      },
      {
        "id": "activities",
        "label": "Activities",
        "kind": "feed"
      },
      {
        "id": "sequences",
        "label": "Sequences",
        "kind": "table"
      },
      {
        "id": "leads",
        "label": "Leads",
        "kind": "table"
      },
      {
        "id": "territory",
        "label": "Territory",
        "kind": "table"
      },
      {
        "id": "forecast",
        "label": "Forecast",
        "kind": "dashboard"
      },
      {
        "id": "coaching",
        "label": "Coaching & Enablement",
        "kind": "dashboard"
      },
      {
        "id": "proposals",
        "label": "Proposals & Quotes",
        "kind": "table"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "pipeline",
      "deals",
      "contacts",
      "activities"
    ]
  },
  {
    "id": "marketing",
    "title": "Marketing",
    "benefit": "Coordinate campaigns, content, leads and attribution with connected business context.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "campaigns",
        "label": "Campaigns",
        "kind": "table"
      },
      {
        "id": "content",
        "label": "Content",
        "kind": "table"
      },
      {
        "id": "leads",
        "label": "Leads",
        "kind": "table"
      },
      {
        "id": "email-studio",
        "label": "Email Studio",
        "kind": "dashboard"
      },
      {
        "id": "social",
        "label": "Social",
        "kind": "dashboard"
      },
      {
        "id": "blog",
        "label": "Blog",
        "kind": "table"
      },
      {
        "id": "website",
        "label": "Website",
        "kind": "dashboard"
      },
      {
        "id": "forms",
        "label": "Forms",
        "kind": "table"
      },
      {
        "id": "seo",
        "label": "SEO",
        "kind": "dashboard"
      },
      {
        "id": "attribution",
        "label": "Attribution",
        "kind": "dashboard"
      },
      {
        "id": "audience",
        "label": "Audience",
        "kind": "table"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "campaigns",
      "content",
      "leads",
      "email-studio"
    ]
  },
  {
    "id": "content",
    "title": "Content",
    "benefit": "Keep articles, editorial plans and content work together.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "articles",
        "label": "Articles",
        "kind": "runtime"
      },
      {
        "id": "calendar",
        "label": "Calendar",
        "kind": "runtime"
      }
    ],
    "featured": [
      "dashboard",
      "articles",
      "calendar"
    ]
  },
  {
    "id": "service",
    "title": "Services",
    "benefit": "Triage service obligations, customer tickets and satisfaction signals in context.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "customers",
        "label": "Customers",
        "kind": "runtime"
      },
      {
        "id": "csat",
        "label": "Csat",
        "kind": "runtime"
      },
      {
        "id": "satisfaction",
        "label": "Satisfaction",
        "kind": "runtime"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "runtime"
      },
      {
        "id": "knowledge",
        "label": "Knowledge",
        "kind": "runtime"
      },
      {
        "id": "tickets",
        "label": "Tickets",
        "kind": "runtime"
      },
      {
        "id": "sla-dashboard",
        "label": "Sla Dashboard",
        "kind": "runtime"
      },
      {
        "id": "escalations",
        "label": "Escalations",
        "kind": "runtime"
      },
      {
        "id": "sessions",
        "label": "Sessions",
        "kind": "runtime"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "customers",
      "csat",
      "satisfaction"
    ]
  },
  {
    "id": "finance",
    "title": "Finance",
    "benefit": "Bring invoices, expenses, revenue, approvals and forecasts together for review.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "revenue",
        "label": "Revenue",
        "kind": "dashboard"
      },
      {
        "id": "expenses",
        "label": "Expenses",
        "kind": "table"
      },
      {
        "id": "invoices",
        "label": "Invoices",
        "kind": "table"
      },
      {
        "id": "invoice-approvals",
        "label": "Invoice Approvals",
        "kind": "table"
      },
      {
        "id": "budgets",
        "label": "Budgets",
        "kind": "table"
      },
      {
        "id": "forecasting",
        "label": "Forecasting",
        "kind": "dashboard"
      },
      {
        "id": "payroll",
        "label": "Payroll",
        "kind": "table"
      },
      {
        "id": "tax",
        "label": "Tax",
        "kind": "dashboard"
      },
      {
        "id": "banking",
        "label": "Banking",
        "kind": "dashboard"
      },
      {
        "id": "investments",
        "label": "Investments",
        "kind": "table"
      },
      {
        "id": "compliance",
        "label": "Compliance",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "invoices",
      "forecasting",
      "revenue",
      "expenses"
    ]
  },
  {
    "id": "revops",
    "title": "RevOps",
    "benefit": "Align pipeline, quotas, territories, forecasting and handoffs across revenue teams.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "pipeline",
        "label": "Pipeline",
        "kind": "dashboard"
      },
      {
        "id": "forecast",
        "label": "Forecast",
        "kind": "dashboard"
      },
      {
        "id": "quota",
        "label": "Quota",
        "kind": "dashboard"
      },
      {
        "id": "capacity",
        "label": "Capacity",
        "kind": "dashboard"
      },
      {
        "id": "territories",
        "label": "Territories",
        "kind": "table"
      },
      {
        "id": "commissions",
        "label": "Commissions",
        "kind": "table"
      },
      {
        "id": "cohorts",
        "label": "Cohorts",
        "kind": "dashboard"
      },
      {
        "id": "team",
        "label": "Team",
        "kind": "table"
      },
      {
        "id": "metrics",
        "label": "Metrics",
        "kind": "dashboard"
      },
      {
        "id": "deals",
        "label": "Deals",
        "kind": "table"
      },
      {
        "id": "decision-log",
        "label": "Decision Log",
        "kind": "feed"
      },
      {
        "id": "pending-review",
        "label": "Pending Review",
        "kind": "table"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "pipeline",
      "forecast",
      "quota"
    ]
  },
  {
    "id": "support",
    "title": "Support",
    "benefit": "Prioritize tickets, escalations and SLA risk alongside knowledge and account context.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "tickets",
        "label": "Tickets",
        "kind": "table"
      },
      {
        "id": "customers",
        "label": "Customers",
        "kind": "table"
      },
      {
        "id": "knowledge",
        "label": "Knowledge Base",
        "kind": "table"
      },
      {
        "id": "sla",
        "label": "SLA Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "escalations",
        "label": "Escalations",
        "kind": "table"
      },
      {
        "id": "satisfaction",
        "label": "Satisfaction",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "tickets",
      "sla",
      "customers",
      "knowledge"
    ]
  },
  {
    "id": "productengineering",
    "title": "Product Engineering",
    "benefit": "Relate roadmap work, releases, bugs, sprints and incidents across engineering.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "roadmap",
        "label": "Roadmap",
        "kind": "runtime"
      },
      {
        "id": "features",
        "label": "Features",
        "kind": "runtime"
      },
      {
        "id": "bugs",
        "label": "Bugs",
        "kind": "runtime"
      },
      {
        "id": "sprints",
        "label": "Sprints",
        "kind": "runtime"
      },
      {
        "id": "tasks",
        "label": "Tasks",
        "kind": "runtime"
      },
      {
        "id": "releases",
        "label": "Releases",
        "kind": "runtime"
      },
      {
        "id": "feedback",
        "label": "Feedback",
        "kind": "runtime"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "runtime"
      },
      {
        "id": "architecture",
        "label": "Architecture",
        "kind": "runtime"
      },
      {
        "id": "data-flow",
        "label": "Data Flow",
        "kind": "runtime"
      },
      {
        "id": "projects",
        "label": "Projects",
        "kind": "runtime"
      },
      {
        "id": "incidents",
        "label": "Incidents",
        "kind": "runtime"
      },
      {
        "id": "connections",
        "label": "Connections",
        "kind": "runtime"
      },
      {
        "id": "capabilities",
        "label": "Capabilities",
        "kind": "runtime"
      },
      {
        "id": "runs",
        "label": "Runs",
        "kind": "runtime"
      },
      {
        "id": "logs",
        "label": "Logs",
        "kind": "runtime"
      }
    ],
    "featured": [
      "dashboard",
      "roadmap",
      "incidents",
      "features",
      "bugs"
    ]
  },
  {
    "id": "operations",
    "title": "Business Operations",
    "benefit": "Follow processes, workflows, vendors and operating risks across teams.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "command-center",
        "label": "Command Center",
        "kind": "dashboard"
      },
      {
        "id": "strategic-hub",
        "label": "Strategic Hub",
        "kind": "dashboard"
      },
      {
        "id": "workflows",
        "label": "Workflows",
        "kind": "table"
      },
      {
        "id": "processes",
        "label": "Processes",
        "kind": "table"
      },
      {
        "id": "logistics",
        "label": "Logistics",
        "kind": "table"
      },
      {
        "id": "quality",
        "label": "Quality",
        "kind": "dashboard"
      },
      {
        "id": "inventory",
        "label": "Inventory",
        "kind": "table"
      },
      {
        "id": "workforce",
        "label": "Workforce",
        "kind": "table"
      },
      {
        "id": "compliance",
        "label": "Compliance",
        "kind": "dashboard"
      },
      {
        "id": "risk",
        "label": "Risk",
        "kind": "dashboard"
      },
      {
        "id": "facilities",
        "label": "Facilities",
        "kind": "table"
      },
      {
        "id": "sustainability",
        "label": "Sustainability",
        "kind": "dashboard"
      },
      {
        "id": "vendor-management",
        "label": "Vendor Management",
        "kind": "table"
      },
      {
        "id": "integrations",
        "label": "Integrations",
        "kind": "dashboard"
      },
      {
        "id": "reporting",
        "label": "Reporting",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "command-center",
      "workflows",
      "strategic-hub",
      "processes"
    ]
  },
  {
    "id": "ops",
    "title": "Ops",
    "benefit": "Keep systems, incidents, access and technical operations visible.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "systems",
        "label": "Systems",
        "kind": "table"
      },
      {
        "id": "incidents",
        "label": "Incidents",
        "kind": "table"
      },
      {
        "id": "security",
        "label": "Security",
        "kind": "dashboard"
      },
      {
        "id": "devices",
        "label": "Devices",
        "kind": "table"
      },
      {
        "id": "network",
        "label": "Network",
        "kind": "dashboard"
      },
      {
        "id": "certificates",
        "label": "Certificates",
        "kind": "table"
      },
      {
        "id": "licenses",
        "label": "Licenses",
        "kind": "table"
      },
      {
        "id": "software",
        "label": "Software",
        "kind": "table"
      },
      {
        "id": "access",
        "label": "Access",
        "kind": "table"
      },
      {
        "id": "vendors",
        "label": "Vendors",
        "kind": "table"
      },
      {
        "id": "requests",
        "label": "Requests",
        "kind": "table"
      },
      {
        "id": "runbooks",
        "label": "Runbooks",
        "kind": "table"
      },
      {
        "id": "on-call",
        "label": "On-Call",
        "kind": "dashboard"
      },
      {
        "id": "audits",
        "label": "Audits",
        "kind": "table"
      },
      {
        "id": "data-flow",
        "label": "Data Flow",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "systems",
      "incidents",
      "security"
    ]
  },
  {
    "id": "humanresources",
    "title": "Human Resources",
    "benefit": "Connect people, positions and HR work to organizational priorities.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "human-resources",
        "label": "Human Resources",
        "kind": "runtime"
      },
      {
        "id": "people",
        "label": "People",
        "kind": "runtime"
      },
      {
        "id": "employees",
        "label": "Employees",
        "kind": "runtime"
      },
      {
        "id": "positions",
        "label": "Positions",
        "kind": "runtime"
      }
    ],
    "featured": [
      "dashboard",
      "human-resources",
      "people",
      "employees",
      "positions"
    ]
  },
  {
    "id": "legal",
    "title": "Legal",
    "benefit": "Review contracts, regulatory obligations, compliance and legal risk together.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "legal-compliance",
        "label": "Legal Compliance",
        "kind": "runtime"
      },
      {
        "id": "contracts",
        "label": "Contracts",
        "kind": "runtime"
      },
      {
        "id": "compliance",
        "label": "Compliance",
        "kind": "runtime"
      },
      {
        "id": "risk",
        "label": "Risk",
        "kind": "runtime"
      },
      {
        "id": "regulatory",
        "label": "Regulatory",
        "kind": "runtime"
      }
    ],
    "featured": [
      "dashboard",
      "legal-compliance",
      "contracts",
      "compliance",
      "risk"
    ]
  },
  {
    "id": "personal",
    "title": "Personal",
    "benefit": "Start with focus, today's tasks, notes, knowledge and recent work.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "focus",
        "label": "Focus",
        "kind": "runtime"
      },
      {
        "id": "knowledge",
        "label": "Knowledge",
        "kind": "runtime"
      },
      {
        "id": "bookmarks",
        "label": "Bookmarks",
        "kind": "runtime"
      },
      {
        "id": "home",
        "label": "Home",
        "kind": "runtime"
      },
      {
        "id": "today",
        "label": "Today",
        "kind": "runtime"
      },
      {
        "id": "brainstorming",
        "label": "Brainstorming",
        "kind": "runtime"
      },
      {
        "id": "profile",
        "label": "Profile",
        "kind": "runtime"
      },
      {
        "id": "insights",
        "label": "Insights",
        "kind": "runtime"
      },
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "tasks",
        "label": "Tasks",
        "kind": "runtime"
      },
      {
        "id": "notes",
        "label": "Notes",
        "kind": "runtime"
      },
      {
        "id": "founder-today",
        "label": "Founder Today",
        "kind": "runtime"
      },
      {
        "id": "founder-projects",
        "label": "Founder Projects",
        "kind": "runtime"
      },
      {
        "id": "founder-decisions",
        "label": "Founder Decisions",
        "kind": "runtime"
      },
      {
        "id": "wealth",
        "label": "Wealth",
        "kind": "runtime"
      },
      {
        "id": "wellness",
        "label": "Wellness",
        "kind": "runtime"
      },
      {
        "id": "learning",
        "label": "Learning",
        "kind": "runtime"
      },
      {
        "id": "relationships",
        "label": "Relationships",
        "kind": "runtime"
      },
      {
        "id": "whats-new",
        "label": "Whats New",
        "kind": "runtime"
      }
    ],
    "featured": [
      "home",
      "today",
      "focus",
      "knowledge",
      "bookmarks"
    ]
  },
  {
    "id": "founder",
    "title": "Founder",
    "benefit": "Bring strategic planning, board preparation and critical decisions into one leadership context.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "cockpit",
        "label": "Cockpit",
        "kind": "dashboard"
      },
      {
        "id": "strategic-planning",
        "label": "Strategic Planning",
        "kind": "dashboard"
      },
      {
        "id": "key-decisions",
        "label": "Key Decisions",
        "kind": "feed"
      },
      {
        "id": "investor-relations",
        "label": "Investor Relations",
        "kind": "dashboard"
      },
      {
        "id": "board-prep",
        "label": "Board Prep",
        "kind": "dashboard"
      },
      {
        "id": "team-performance",
        "label": "Team Performance",
        "kind": "dashboard"
      },
      {
        "id": "culture",
        "label": "Culture",
        "kind": "dashboard"
      },
      {
        "id": "innovation",
        "label": "Innovation",
        "kind": "table"
      },
      {
        "id": "partnerships",
        "label": "Partnerships",
        "kind": "table"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "cockpit",
      "strategic-planning",
      "key-decisions"
    ]
  },
  {
    "id": "founderops",
    "title": "Founder Ops",
    "benefit": "Track operating priorities, leadership decisions and company dependencies together.",
    "audience": "registered",
    "definitionSource": "l1-runtime",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "runtime"
      },
      {
        "id": "founder-ops",
        "label": "Founder Ops",
        "kind": "runtime"
      },
      {
        "id": "ceo",
        "label": "Ceo",
        "kind": "runtime"
      },
      {
        "id": "coo",
        "label": "Coo",
        "kind": "runtime"
      },
      {
        "id": "strategy-leadership",
        "label": "Strategy Leadership",
        "kind": "runtime"
      }
    ],
    "featured": [
      "founder-ops",
      "dashboard",
      "ceo",
      "coo",
      "strategy-leadership"
    ]
  },
  {
    "id": "product",
    "title": "Product",
    "benefit": "Connect roadmap, releases, product feedback and feature delivery.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "roadmap",
        "label": "Roadmap",
        "kind": "board"
      },
      {
        "id": "features",
        "label": "Features",
        "kind": "table"
      },
      {
        "id": "feedback",
        "label": "Feedback",
        "kind": "feed"
      },
      {
        "id": "releases",
        "label": "Releases",
        "kind": "table"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      },
      {
        "id": "users",
        "label": "Users",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "roadmap",
      "features",
      "feedback"
    ]
  },
  {
    "id": "business-intelligence",
    "title": "Business Intelligence",
    "benefit": "Work across reports, data sources, quality and analytical outputs, and see where the facts came from.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "reports",
        "label": "Reports",
        "kind": "table"
      },
      {
        "id": "data-sources",
        "label": "Data Sources",
        "kind": "table"
      },
      {
        "id": "visualizations",
        "label": "Visualizations",
        "kind": "dashboard"
      },
      {
        "id": "scheduled-reports",
        "label": "Scheduled Reports",
        "kind": "table"
      },
      {
        "id": "data-quality",
        "label": "Data Quality",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "reports",
      "data-sources",
      "visualizations"
    ]
  },
  {
    "id": "campaigns",
    "title": "Campaigns",
    "benefit": "Coordinate campaigns, audiences, content schedules and attribution.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "active",
        "label": "Active Campaigns",
        "kind": "table"
      },
      {
        "id": "pipeline",
        "label": "Pipeline",
        "kind": "board"
      },
      {
        "id": "content-calendar",
        "label": "Content Calendar",
        "kind": "dashboard"
      },
      {
        "id": "ab-testing",
        "label": "A/B Testing",
        "kind": "dashboard"
      },
      {
        "id": "audience",
        "label": "Audience",
        "kind": "table"
      },
      {
        "id": "attribution",
        "label": "Attribution",
        "kind": "dashboard"
      },
      {
        "id": "templates",
        "label": "Templates",
        "kind": "table"
      },
      {
        "id": "budget",
        "label": "Budget",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "active",
      "pipeline",
      "content-calendar"
    ]
  },
  {
    "id": "knowledge-management",
    "title": "Knowledge Management",
    "benefit": "Bring documents, search, and how knowledge is organized together.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "knowledge-base",
        "label": "Knowledge Base",
        "kind": "table"
      },
      {
        "id": "documents",
        "label": "Documents",
        "kind": "table"
      },
      {
        "id": "search",
        "label": "Search",
        "kind": "dashboard"
      },
      {
        "id": "taxonomies",
        "label": "Taxonomies",
        "kind": "table"
      },
      {
        "id": "governance",
        "label": "Governance",
        "kind": "dashboard"
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "analytics",
      "knowledge-base",
      "documents",
      "search"
    ]
  },
  {
    "id": "book-of-records",
    "title": "Book of Records",
    "benefit": "Trace the records, decisions, the review trail, and how a result was checked.",
    "audience": "registered",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "entities",
        "label": "Entities",
        "kind": "table"
      },
      {
        "id": "projects",
        "label": "Projects",
        "kind": "table"
      },
      {
        "id": "episodes",
        "label": "Episodes",
        "kind": "feed"
      },
      {
        "id": "decisions",
        "label": "Decisions",
        "kind": "feed"
      },
      {
        "id": "learnings",
        "label": "Learnings",
        "kind": "table"
      },
      {
        "id": "audit-trail",
        "label": "Audit Trail",
        "kind": "feed"
      },
      {
        "id": "lineage",
        "label": "Lineage",
        "kind": "dashboard"
      },
      {
        "id": "snapshots",
        "label": "Snapshots",
        "kind": "table"
      },
      {
        "id": "reconciliation",
        "label": "Reconciliation",
        "kind": "dashboard"
      },
      {
        "id": "compliance",
        "label": "Compliance",
        "kind": "dashboard"
      }
    ],
    "featured": [
      "dashboard",
      "entities",
      "projects",
      "episodes",
      "decisions"
    ]
  },
  {
    "id": "brandstore",
    "title": "Brand Store",
    "benefit": "Organize internal brand assets, templates, guidelines and reviews.",
    "audience": "internal",
    "definitionSource": "domain-manifest",
    "views": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "kind": "dashboard"
      },
      {
        "id": "assets",
        "label": "Assets",
        "kind": "table"
      },
      {
        "id": "guidelines",
        "label": "Guidelines",
        "kind": "dashboard"
      },
      {
        "id": "templates",
        "label": "Templates",
        "kind": "table"
      },
      {
        "id": "content-library",
        "label": "Content Library",
        "kind": "table"
      },
      {
        "id": "design-system",
        "label": "Design System",
        "kind": "dashboard"
      },
      {
        "id": "media",
        "label": "Media",
        "kind": "table"
      },
      {
        "id": "campaigns",
        "label": "Campaigns",
        "kind": "table"
      },
      {
        "id": "reviews",
        "label": "Reviews",
        "kind": "table"
      }
    ],
    "featured": [
      "dashboard",
      "assets",
      "guidelines",
      "templates",
      "content-library"
    ]
  }
];
export const SHARED_WORKBENCH_SHELL = [
  { title: "Home", items: [] },
  { title: "My Work", items: ["Inbox", "Tasks", "My Queue", "Approvals", "Notifications", "Recent Work", "Favorites"] },
  { title: "Communications", items: ["Activity Feed", "Email", "Calendar", "Meetings", "Chat", "Calls", "Shared Documents"] },
  { title: "Personal", items: ["Notes", "Knowledge Base", "Brainstorming Sessions", "Activity"] },
  { title: "Work", items: ["Domain-specific and role-specific views"] },
  { title: "Platform", items: ["Ecosystem", "Spine", "How work runs"] },
  { title: "Administration", items: ["Organization", "Controls"] },
] as const;
