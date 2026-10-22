"use client";

import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LeadForm, type LeadIntent } from "@/components/lead-form";
import { FAQSection } from "@/components/faq-section";
import { PageHero } from "@/components/marketing/page-hero";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const contactFAQs = [
  {
    question: "How do I get pricing?",
    answer: "Submit a request through our contact form with your expected team size, connectors, and deployment requirements. We provide a transparent written commercial quote tailored to your environment, including workspace seats, connector limits, and dedicated onboarding support.",
  },
  {
    question: "Is my data safe with Spine Workspace?",
    answer: "Spine Workspace is designed around tenant isolation, encrypted connector credential storage, and role-based access control. Access boundaries, authority and the data handling that apply depend on your deployment, connected providers and agreements — contact us to discuss the controls and documentation relevant to your requirements.",
  },
  {
    question: "Which tools do you connect?",
    answer: (
      <span>
        Spine Workspace connects across CRM, ERP, project management, code repositories, communication, and document systems. Explore our{" "}
        <Link href="/platform/integrations" className="text-[#0176D3] underline underline-offset-2 hover:text-[#0B5CAB]">
          integrations catalog
        </Link>
        . Source systems of record remain authoritative, with Spine maintaining governed read context and authorized coordination.
      </span>
    ),
  },
  {
    question: "Do I need to replace my current tools?",
    answer: "No. Spine Workspace is designed around a read-and-propose architecture that complements your existing systems of record. The tools you already use keep the primary record; Spine Twin analyzes context and prepares proposed actions, but any consequential changes require explicit human approval before write-back.",
  },
  {
    question: "How long does setup take?",
    answer: "Setup connects your tools via secure OAuth, maps core business entities, and establishes governance boundaries. The time depends on the connectors and the scope of your environment; contact us to discuss what your deployment would involve.",
  },
];

const VALID_INTENTS: LeadIntent[] = [
  "contact",
  "demo",
  "pricing",
  "design-partner",
  "partnership",
  "media",
  "careers",
  "security",
];

function ContactIntentForm({ defaultIntent }: { defaultIntent: LeadIntent }) {
  const searchParams = useSearchParams();
  const intentFromUrl = searchParams.get("intent");
  const resolvedIntent = useMemo(() => {
    if (intentFromUrl && VALID_INTENTS.includes(intentFromUrl as LeadIntent)) {
      return intentFromUrl as LeadIntent;
    }
    return defaultIntent;
  }, [intentFromUrl, defaultIntent]);

  return <LeadForm defaultIntent={resolvedIntent} />;
}

export function ContactContent({
  defaultIntent = "contact",
}: {
  defaultIntent?: LeadIntent;
}) {
  return (
    <>
      <PageHero
        badge="Corporate Contact & Inquiry"
        headline="Talk to Spine InnovTech."
        subhead="Whether you want a demo, have a question, or want to explore how Spine Workspace fits your existing environment — we're here."
        primaryCta={{ label: "Use the form", href: "#contact-form" }}
        secondaryCta={{ label: "Explore Spine Workspace", href: "/product" }}
      />

      <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 px-6 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "Book a demo",
                desc: "Discuss Spine Workspace and arrange a relevant product walkthrough.",
                cta: "Book a demo",
                href: "/contact?intent=demo",
                external: false,
              },
              {
                icon: Mail,
                title: "Email us",
                desc: "General questions, architecture discussions, partnership inquiries or project scoping.",
                cta: "Use the form",
                href: "#contact-form",
                external: false,
              },
              {
                icon: MapPin,
                title: "Visit us",
                desc: "Based in India. Please contact us to discuss meeting options.",
                cta: "Request a meeting",
                href: "mailto:connect@spineworkspace.com?subject=Meeting%20Request",
                external: true,
              },
            ].map(({ icon: Icon, title, desc, cta, href, external }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="group flex h-full flex-col items-center rounded-md border border-[#E5E5E5] bg-white p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <Icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.03em] text-[#032D60]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[#444]">
                  {desc}
                </p>
                {external ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white hover:bg-[#0B5CAB]"
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : href.startsWith("#") ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white hover:bg-[#0B5CAB]"
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white hover:bg-[#0B5CAB]"
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div id="contact-form" className="mx-auto mt-16 max-w-lg scroll-mt-28">
            <Suspense fallback={<LeadForm defaultIntent={defaultIntent} />}>
              <ContactIntentForm defaultIntent={defaultIntent} />
            </Suspense>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Common questions"
        items={contactFAQs}
      />
    </>
  );
}
