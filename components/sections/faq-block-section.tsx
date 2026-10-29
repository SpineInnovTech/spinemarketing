import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeader, type SectionTone } from "./section";

export type FaqItem = { question: string; answer: string };

type FaqBlockSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  items: readonly FaqItem[];
  contactHref?: string;
};

export function FaqBlockSection({
  id = "faq",
  tone = "muted",
  eyebrow = "FAQ",
  title = "Questions people ask",
  items,
  contactHref = "/contact",
}: FaqBlockSectionProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} />
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`} className="sx-line">
            <AccordionTrigger className="sx-title py-5 text-base font-semibold hover:no-underline">{item.question}</AccordionTrigger>
            <AccordionContent className="sx-body text-sm leading-relaxed md:text-base">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="sx-body mt-10 text-center text-sm">
        {"Still have questions? "}
        <Link href={contactHref} className="sx-accent font-semibold hover:underline">
          Contact us
        </Link>
      </p>
    </Section>
  );
}
