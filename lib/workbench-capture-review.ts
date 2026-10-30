/** Visual review of the authentic October 13 captures. Originals remain archived. */
interface CaptureReview {
  description: string;
  exclude?: boolean;
}

const reviews: Record<string, CaptureReview> = {
  "founderops/cockpit": { description: "The captured FounderOps fixture relates $94K MRR, $625K pipeline, four clients and three open deals. Its deal table connects opportunity values to stages and named contacts." },
  "founderops/cockpit-mobile": { description: "The mobile FounderOps capture shows the same fixture revenue summary and opportunity list in a narrow layout." },
  "founderops/dashboard": { description: "The Founder Overview shows decision filters and an empty decision collection. No approvals or verified outcomes are visible.", exclude: true },
  "founderops/strategy-leadership": { description: "The strategy layout contains empty goals, milestones and board-update sections.", exclude: true },
  "sales/pipeline": { description: "Three captured fixture opportunities connect deal names, owners and stages: Enterprise Expansion ($180K, Proposal), Global Cloud Migration ($350K, Negotiation) and AI Analytics License ($95K, Discovery)." },
  "sales/pipeline-mobile": { description: "The mobile capture presents the fixture sales-stage totals and opportunity list in a narrow viewport." },
  "sales/dashboard": { description: "The Sales dashboard shows two open deals, an empty stage chart, and a key-contact list. It does not show a complete forecast.", exclude: true },
  "sales/deals": { description: "The deal ledger displays opportunity names, values, stages, probabilities, close dates and owners beside a Twin insights panel. The visible figures and insights are fixture content." },
  "finance/invoices": { description: "Invoice rows connect Acme Corporation, Stripe and Figma to billed amounts, payment statuses and due dates. These are captured QA records, not verified receivables." },
  "finance/dashboard": { description: "The Finance capture shows fixture ARR, cash, burn and pending-approval indicators, an ARR chart and a payable list." },
  "finance/forecasting": { description: "The forecasting layout is empty and asks for a connected dataset. It shows no financial forecast.", exclude: true },
  "marketing/attribution": { description: "The Attribution screen shows fixture totals, a named-record directory, status labels and recent-activity cards. It does not show a verified multichannel attribution model." },
  "marketing/dashboard": { description: "The Marketing dashboard contains a fixture campaign chart and named campaigns; its lead-generation chart is empty." },
  "marketing/campaigns": { description: "The Campaigns layout has a budget indicator, filters and an empty campaign collection.", exclude: true },
  "account-success/account-health": { description: "Account Overview shows fixture story readiness of 100% and CRM, support and product coverage rows. No renewal-risk details or Twin proposal are visible in this capture." },
  "account-success/account-health-mobile": { description: "The mobile Account Overview shows fixture story readiness and three domain-coverage rows." },
  "account-success/dashboard": { description: "The Account Success dashboard shows zero populated accounts, zero ARR and empty portfolio-health charts.", exclude: true },
  "account-success/twin-action": { description: "This capture repeats Account Overview and contains no visible Twin proposal or approval gate.", exclude: true },
  "technical-account-success/dashboard": { description: "The technical-account layout shows an empty account inventory and zero summary counts.", exclude: true },
  "technical-account-success/integration-health": { description: "Integration Health explicitly shows no integration-health records. No connector synchronization is verified by this capture." },
  "bizops/workflows": { description: "Sample workflows for contract approval, customer onboarding and product usage tracking, each with progress and status cards. The statuses are test data, not proof that real actions ran." },
  "bizops/command-center": { description: "Ops Command Center shows waiting-data indicators and no cross-domain signals.", exclude: true },
  "bizops/strategic-hub": { description: "Strategic Hub shows an empty goal collection and a create-goal control.", exclude: true },
  "revops/forecast": { description: "Revenue Forecasting shows fixture targets, closed-won, current pipeline, best-case totals and a breakdown chart." },
  "revops/dashboard": { description: "The RevOps capture shows fixture summary values and two open deals. Several conversion and quota charts are empty." },
  "revops/pipeline": { description: "The pipeline capture contains invalid NaN totals and is excluded from marketing presentation.", exclude: true },
  "product-engineering/roadmap": { description: "Three sample roadmap items, each linked to a delivery phase and quarter: smarter AI suggestions, cloud connections, and keeping each company’s data separate." },
  "product-engineering/dashboard": { description: "The engineering dashboard shows summary indicators and empty velocity, bug-severity and deployment charts.", exclude: true },
  "product-engineering/sprints": { description: "Sprint Velocity is empty and asks for a connected product-tool dataset. No sprint progress is visible.", exclude: true },
  "service/dashboard": { description: "The Services dashboard shows fixture activity, attention, completion and cycle-time indicators beside a trend chart and recent-activity cards." },
  "service/sla": { description: "The SLA Dashboard shows generic fixture performance indicators, a trend chart and recent activity. It contains no client milestone or verified SLA receipt." },
  "support/dashboard": { description: "The Support layout has an empty ticket inventory and says no tickets were invented.", exclude: true },
  "support/tickets": { description: "The Support Tickets capture has filters and an empty collection; no customer incidents or resolution metrics are visible." },
  "humanresources/dashboard": { description: "The People layout shows an empty employee collection and zero headcount indicators.", exclude: true },
  "humanresources/people": { description: "The Human Resources layout contains empty employee, hiring and onboarding sections. No employee profiles or reporting hierarchy are visible." },
  "humanresources/positions": { description: "This capture shows the Human Resources layout with an empty hiring pipeline, not populated job requisitions.", exclude: true },
  "legal/contracts": { description: "The Legal layout shows contract filters and an empty contract collection. No executed agreements are visible." },
  "legal/dashboard": { description: "The Legal overview shows zero contract counts and an empty collection.", exclude: true },
  "legal/compliance": { description: "The Legal & Compliance layout has empty contract, certificate and policy sections. No certification is established by this capture.", exclude: true },
  "content/articles": { description: "Article Management shows an empty article collection. No drafts or author assignments are visible." },
  "content/dashboard": { description: "The Content layout shows empty publication stages and zero asset counts.", exclude: true },
  "content/calendar": { description: "Content Calendar shows no scheduled publications.", exclude: true },
  "business-intelligence/metrics": { description: "Business Metrics shows sample revenue and sales figures, a stage chart, a revenue trend and a plan-level chart. The screenshot alone does not show where each number came from." },
  "business-intelligence/dashboard": { description: "The Business Intelligence layout has empty metric, prediction and benchmark sections.", exclude: true },
  "campaigns/campaigns": { description: "Campaign Operations shows a budget indicator and filters with no populated campaign rows.", exclude: true },
  "campaigns/dashboard": { description: "The Campaigns dashboard shows a fixture performance chart and a named campaign list." },
  "knowledge-management/knowledge": { description: "Knowledge Hub shows document categories and an empty document collection. No published SOPs are visible." },
  "knowledge-management/dashboard": { description: "Knowledge Management shows empty documents, SOPs, articles and training sections.", exclude: true },
  "book-of-records/audit-trail": { description: "Audit Trail shows no audit events. This capture does not prove executed operations.", exclude: true },
  "book-of-records/dashboard": { description: "The records page links to customers, projects, decisions and the approval history, with a note on who has the final say." },
  "book-of-records/decisions": { description: "Decision Records shows no decisions in the current slice.", exclude: true },
};

for (const name of ["home", "home-mobile", "my-work", "tasks", "queue", "approvals", "notes", "knowledge"]) {
  reviews["common/" + name] = { description: "The capture contains missing-source, authorization or gateway errors and is archived rather than showcased.", exclude: true };
}
reviews["founderops/cockpit-20261014"] = reviews["founderops/cockpit"];
reviews["founderops/cockpit-20261014-mobile"] = reviews["founderops/cockpit-mobile"];

export function getWorkbenchCaptureReview(src: string): CaptureReview | undefined {
  return reviews[src.replace("/images/workbench/", "").replace(/\.webp$/, "")];
}
