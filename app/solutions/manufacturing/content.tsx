import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { WorkflowTransformLayout } from "../_shared/WorkflowTransformLayout";

export function ManufacturingContent() {
  return (
    <WorkflowTransformLayout
      domainFeatures={<SolutionDomainFeatures slug="manufacturing" />}
      category="Manufacturing & Trade"
      headline="Catch problems before they reach your customer."
      subheadline="Orders, shipments, and payments connected in one place. When something goes wrong in the supply chain, you know before your customer does."
      ctaLabel="See it with your data →"
      accentColor="rgba(251,191,36,0.5)"
      beforeAfter={[
        {
          before: "Tuesday 2pm. A container from Shenzhen is stuck in customs. Logistics knows, but your account manager in Dubai just promised the client delivery by Friday.",
          after: "Tuesday 2pm. The delay is detected automatically. Sales, ops, and finance all see it. AI drafts a proactive update to the client with a revised timeline.",
        },
        {
          before: "Finance puts a payment hold on a distributor in Mumbai. Meanwhile, your warehouse ships 200 units to them anyway. Nobody connected those dots.",
          after: "Payment hold automatically surfaces as a shipping signal. The warehouse sees the hold before they pack the order.",
        },
        {
          before: "End of quarter. The books show $340K in orders that shipped in August but were never billed. Cash you should have collected two months ago.",
          after: "Shipped-but-not-billed gaps flagged the same day the shipment confirms. Invoicing starts automatically. Zero revenue leakage.",
        },
      ]}
      workflow={[
        { title: "Connect your supply chain", desc: "NetSuite, SAP, FedEx, DHL, Shopify, QuickBooks — linked together so every system talks to every other system." },
        { title: "Exceptions ranked by impact", desc: "A delayed shipment to your biggest client isn't the same as one to a new prospect. Priorities sorted by revenue and contract risk." },
        { title: "Full context, not just an alert", desc: "Click any exception and see the order history, payment status, previous delays, and customer relationship health — all in one view." },
        { title: "AI drafts the customer update", desc: "Delay notification with shipment details, revised timeline, and an apology that matches the relationship — drafted and ready for your approval." },
        { title: "Approve and close the loop", desc: "One click sends the update, adjusts the delivery estimate, triggers the follow-up task, and logs everything for audit." },
      ]}
      capabilities={[
        { title: "See exceptions before they escalate", desc: "Delays, payment holds, and quality issues ranked by customer value and contract risk. Handle the important ones first." },
        { title: "Connect shipments to invoices", desc: "When an order ships, the billing process starts. No more shipped-but-not-billed gaps draining cash." },
        { title: "Get ahead of supplier problems", desc: "Inbound delays surfaced before they cascade to your customers. Communicate proactively instead of reacting." },
        { title: "Customer updates with full context", desc: "AI drafts notifications with shipment details and revised timelines. You review and approve before anything goes out." },
      ]}
      governance="Every exception action routes through your approval. Full audit trail for compliance."
      connectors={["NetSuite", "SAP", "Shopify", "Salesforce", "FedEx", "DHL", "QuickBooks"]}
      metrics={["On-Time Delivery %", "Cash Conversion Cycle", "Exception Resolution Time", "Shipped-Not-Billed Rate"]}
      outcomes={[
        { stat: "10%", label: "Faster Order-to-Cash" },
        { stat: "$0.8M", label: "Annual Savings" },
        { stat: "0", label: "Unlinked Shipments" },
      ]}
    />
  );
}
