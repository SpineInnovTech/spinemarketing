"use client";

import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  heading?: string;
  subheading?: string;
  items: FAQItem[];
}

const platformFAQs: FAQItem[] = [
  {
    question: "Does SpineWorkspace replace our tools?",
    answer: "No. The tools you already use keep the record: customers, tickets, billing, contracts, and approvals. SpineWorkspace shows the work. The evidence for this person and this task stays evidence. Twin's draft is not the record.",
  },
  {
    question: "What are the Workspace and Twin?",
    answer: "The Workspace brings goals, responsibilities, evidence, decisions, and next steps into one shared place to work. Twin helps look into things, prepare, and coordinate work using the business context it is allowed to use. Important actions still need the right person or rule to approve them; your existing tools keep the record.",
  },
  {
    question: "How is SpineWorkspace different from a CRM or a dashboard tool?",
    answer: "A CRM, a billing system, or a ticket tool holds the truth. SpineWorkspace does not replace that record. It assembles the context for this person and this task, and Twin prepares a proposal. Nothing becomes a decision until a person accepts it.",
  },
  {
    question: "Does Twin act on its own?",
    answer: "Twin can gather the context it is allowed to use and prepare work ahead of time, including in Coworker mode. Preparing a suggestion does not give it the power to act. Important actions need the right person or rule to approve them, and the result must be watched and checked.",
  },
  {
    question: "How many apps can I connect?",
    answer: "How much you can connect depends on the tool, its permissions, your setup, and what you agree to try. The integrations page shows the kinds of tools and some examples. Talk through what is available and any limits for your actual tools with the team.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is built around who someone is, the rules, what each person can see, clear data limits, and a record of decisions. Check the controls that are set up, each provider's terms, and the deployment evidence for your review. This website does not claim an outside security certification; the security pages explain what to go through with the team.",
  },
  {
    question: "Can I start with just the Workspace?",
    answer: "Discuss a bounded evaluation around your goals, tools, and work practices. The product page explains the workspace features and how Twin participates; commercial scope and availability are agreed with the team.",
  },
  {
    question: "What are Session Summaries?",
    answer: "When you work with Twin, a session summary records what was discussed, what was proposed, and what a person accepted. A summary is context for later work. It does not replace the record.",
  },
];

export const defaultFAQs = platformFAQs;

export function FAQSection({ heading, subheading, items }: FAQSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 md:py-28">
      <div className="relative mx-auto max-w-[720px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            {heading ?? "Frequently asked questions"}
          </h2>
          {subheading && (
            <p className="mt-4 text-[16px] leading-relaxed text-[#444]">
              {subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="divide-y divide-[#E5E5E5] rounded-lg border border-[#E5E5E5] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        >
          {items.map((item, i) => (
            <article key={i} className="p-6">
              <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#032D60]">
                {item.question}
              </h3>
              <div className="mt-2.5 text-[14px] leading-[1.65] text-[#444]">
                {item.answer}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
