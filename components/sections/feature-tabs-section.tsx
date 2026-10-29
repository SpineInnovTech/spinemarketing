"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, type SectionTone } from "./section";

export type FeatureTab = {
  id: string;
  label: string;
  title: string;
  body: string;
  href?: string;
  image: { src: string; alt: string };
};

type FeatureTabsSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title: string;
  intro?: string;
  tabs: readonly FeatureTab[];
};

export function FeatureTabsSection({ id = "features", tone = "muted", eyebrow = "Features", title, intro, tabs }: FeatureTabsSectionProps) {
  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />

      <div className="mt-12 hidden md:block">
        <div role="tablist" aria-label={title} className="sx-card mx-auto flex w-fit gap-1 rounded-xl border p-1">
          {tabs.map((tab) => {
            const selected = tab.id === current.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${id}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                  const index = tabs.findIndex((t) => t.id === tab.id);
                  const next = tabs[(index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
                  setActive(next.id);
                  document.getElementById(`${id}-tab-${next.id}`)?.focus();
                }}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]",
                  selected ? "bg-[#006FE8] text-white" : "sx-body hover:text-[#006FE8]",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${current.id}`}
          className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]"
        >
          <TabCopy tab={current} />
          <TabImage key={current.id} tab={current} />
        </div>
      </div>

      <Accordion type="single" collapsible defaultValue={tabs[0]?.id} className="mt-10 md:hidden">
        {tabs.map((tab) => (
          <AccordionItem key={tab.id} value={tab.id} className="sx-line">
            <AccordionTrigger className="sx-title text-base font-semibold hover:no-underline">{tab.label}</AccordionTrigger>
            <AccordionContent>
              <TabCopy tab={tab} />
              <div className="mt-5">
                <TabImage tab={tab} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

function TabCopy({ tab }: { tab: FeatureTab }) {
  return (
    <div>
      <h3 className="sx-title text-xl font-semibold leading-snug md:text-2xl">{tab.title}</h3>
      <p className="sx-body mt-3 text-sm leading-relaxed md:text-base">{tab.body}</p>
      {tab.href && (
        <Link href={tab.href} className="sx-accent mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
          {`Learn about ${tab.label}`}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}

function TabImage({ tab }: { tab: FeatureTab }) {
  return (
    <div className="sx-card overflow-hidden rounded-xl border p-1.5 shadow-[0_20px_50px_rgba(8,43,94,0.12)]">
      <Image
        src={tab.image.src || "/placeholder.svg"}
        alt={tab.image.alt}
        width={1440}
        height={900}
        sizes="(min-width: 1024px) 680px, 100vw"
        className="h-auto w-full rounded-lg"
      />
    </div>
  );
}
