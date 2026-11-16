"use client";

import Link from "next/link";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/marketing/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";

type TabItem = {
  id: string;
  label: string;
  title: string;
  body: string;
  href: string;
};

export function FeatureTabsSection({
  eyebrow,
  headline,
  intro,
  tabs,
}: {
  eyebrow: string;
  headline: string;
  intro?: string;
  tabs: readonly TabItem[];
}) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  return (
    <Section id="features">
      <SectionHeader label={eyebrow} headline={headline} body={intro} />
      <div className="hidden md:block">
        <Tabs value={active} onValueChange={setActive} className="w-full">
          <TabsList className="mx-auto flex w-full max-w-2xl flex-wrap justify-center gap-1 bg-[#F0F8FF]">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="text-xs sm:text-sm">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8">
              <BlurFade delay={index * 0.05} inView>
                <div className="mx-auto max-w-2xl rounded-2xl border border-[#D6E8F8] bg-[#F8FBFF] p-8">
                  <h3 className="text-xl font-semibold text-[#082B5E]">{tab.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{tab.body}</p>
                  <Link href={tab.href} className="mt-5 inline-flex text-sm font-semibold text-[#006FE8] hover:underline">
                    Learn more about {tab.label}
                  </Link>
                </div>
              </BlurFade>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="md:hidden">
        <Accordion type="single" collapsible defaultValue={tabs[0]?.id}>
          {tabs.map((tab) => (
            <AccordionItem key={tab.id} value={tab.id}>
              <AccordionTrigger>{tab.label}</AccordionTrigger>
              <AccordionContent>
                <p className="font-semibold text-[#082B5E]">{tab.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#4E607A]">{tab.body}</p>
                <Link href={tab.href} className="mt-3 inline-flex text-sm font-semibold text-[#006FE8]">
                  Learn more
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
