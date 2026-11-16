"use client";

import { Section, SectionHeader } from "@/components/marketing/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

type FaqItem = { question: string; answer: string };

export function HomeFaqSection({
  eyebrow,
  headline,
  intro,
  items,
}: {
  eyebrow: string;
  headline: string;
  intro?: string;
  items: readonly FaqItem[];
}) {
  return (
    <Section id="faq">
      <SectionHeader label={eyebrow} headline={headline} body={intro} />
      <Accordion type="single" collapsible className="mx-auto max-w-2xl">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-[#082B5E]">{item.question}</AccordionTrigger>
            <AccordionContent className="text-[#4E607A]">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#4E607A]">
        Still have questions?{" "}
        <Link href="/contact" className="font-semibold text-[#006FE8] hover:underline">
          Email us through Contact
        </Link>
        .
      </p>
    </Section>
  );
}
