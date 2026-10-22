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
    question: "Where do I get SpineWorkspace pricing?",
    answer: (
      <span>
        Product evaluation, availability, commercial discussions and getting
        started are handled on the product website. Visit{" "}
        <a
          href="https://spineworkspace.com/pricing"
          className="text-[#0176D3] underline underline-offset-2 hover:text-[#0B5CAB]"
          target="_blank"
          rel="noopener noreferrer"
        >
          spineworkspace.com/pricing
        </a>
        . This corporate site covers the company, technology approach, partnerships, research and careers.
      </span>
    ),
  },
  {
    question: "Is my data safe with SpineWorkspace?",
    answer: "SpineWorkspace is designed around tenant isolation, encrypted connector credential storage, and role-based access control. Access boundaries, authority and the data handling that apply depend on your deployment, connected providers and agreements — contact the product team to discuss the controls and documentation relevant to your requirements.",
  },
  {
    question: "Which tools do you connect?",
    answer: (
      <span>
        SpineWorkspace connects across CRM, ERP, project management, code repositories, communication, and document systems. Explore our{" "}
        <Link href="/platform/integrations" className="text-[#0176D3] underline underline-offset-2 hover:text-[#0B5CAB]">
          integrations catalog
        </Link>
        . Source systems of record remain authoritative, with Spine maintaining governed read context and authorized coordination.
      </span>
    ),
  },
  {
    question: "Do I need to replace my current tools?",
    answer: "No. SpineWorkspace is designed around a read-and-propose architecture that complements your existing systems of record. The tools you already use keep the primary record; the Twin analyzes context and prepares proposed actions, but any consequential changes require explicit human approval before write-back.",
  },
  {
    question: "How does Spine InnovTech relate to SpineWorkspace?",
    answer: "Spine InnovTech is the company that builds the governed foundation for humans and AI to share business context. Your tools keep the record. Your people keep the authority. Context continues with the work. SpineWorkspace is its flagship product, where humans and AI share one governed view of the business while existing tools remain the systems of record.",
  },
];

const VALID_INTENTS: LeadIntent[] = [
  "contact",
  "technology",
  "partnership",
  "trust",
  "security",
  "careers",
  "media",
  "research",
];

function ContactIntentForm({ defaultIntent }: { defaultIntent: LeadIntent }) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("topic") ?? searchParams.get("intent");
  const resolvedIntent = useMemo(() => {
    if (raw && VALID_INTENTS.includes(raw as LeadIntent)) {
      return raw as LeadIntent;
    }
    return defaultIntent;
  }, [raw, defaultIntent]);

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
        badge="Contact Spine InnovTech"
        headline="Tell us what you are working on."
        subhead="Contact us about the company, our technology approach, partnerships, research, careers or a potential collaboration. A brief description of the problem or opportunity will help us understand where a conversation could be useful."
        primaryCta={{ label: "Use the form", href: "#contact-form" }}
        secondaryCta={{ label: "About SpineWorkspace", href: "/spineworkspace" }}
      />

      <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 px-6 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "Evaluate SpineWorkspace",
                desc: "For product questions, workflow evaluation, availability and getting started, contact the SpineWorkspace team.",
                cta: "Contact the product team",
                href: "https://spineworkspace.com/contact",
                external: true,
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
