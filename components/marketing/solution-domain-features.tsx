import { Section, SectionHeader } from "./section";
import { getSolutionDomain } from "@/lib/solution-domains";
import { WorkspaceAuthActions } from "./workspace-auth-actions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

export function SolutionDomainFeatures({ slug }: { slug: string }) {
  const domain = getSolutionDomain(slug);
  const associatedWorkbench: Record<string, string> = {
    "customer-success": "account-success",
    "account-success": "account-success",
    "technical-account-success": "technical-account-success",
    founders: "founderops",
    sales: "sales",
    marketing: "marketing",
    content: "content",
    finance: "finance",
    "finance-leaders": "finance",
    revops: "revops",
    operations: "operations",
    "business-ops": "operations",
    services: "service",
    support: "support",
    "customer-support": "support",
    "product-engineering": "productengineering",
    individual: "personal",
    "human-resources": "humanresources",
    legal: "legal",
    memoryandknowledge: "knowledge-management",
    campaigns: "campaigns",
    "business-intelligence": "business-intelligence",
    "book-of-records": "book-of-records",
  };
  const workbenchId = associatedWorkbench[slug];
  return (
    <>
      <Section id="domain-features" variant="muted" className="scroll-mt-24">
        <SectionHeader align="left" label={`${domain.name} / Features`} headline={`Features for ${domain.name}.`} body={domain.summary} />
        <WorkspaceAuthActions pathname={`/solutions/${slug}`} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {domain.features.map(([title, detail], index) => (
            <BlurFade key={title} delay={index * 0.05} inView className="h-full">
              <MagicCard className="h-full" innerClassName="p-6 sm:p-7">
                <h3 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{detail}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
        <div className="mt-8 border-t border-[#D6E8F8] pt-6">
          <h3 className="text-sm font-semibold text-[#082B5E]">Relevant source context</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {domain.sources.map(source => <li key={source} className="rounded-lg border border-[#D6E8F8] bg-white px-3 py-2 text-sm text-[#4E607A] shadow-2xs">{source}</li>)}
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4E607A]">These feature patterns use connected, permitted information. Supported systems and authorized actions are confirmed for your deployment.</p>
        </div>
      </Section>
      {workbenchId ? <WorkbenchViewExplorer initialDomain={workbenchId} compact defaultTab="screenshot" /> : null}
      <Section id="domain-workflow" className="scroll-mt-24">
        <SectionHeader align="left" label="Example workflow" headline={`${domain.name}: a decision with its context.`} />
        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {domain.workflow.map((step, index) => (
            <li key={step} className="h-full">
              <BlurFade delay={index * 0.06} inView className="h-full">
                <MagicCard as="div" className="h-full" innerClassName="p-6 sm:p-7">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0055B8]">0{index + 1} / {['Situation', 'Twin prepares', 'Authorized next step'][index]}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#4E607A]">{step}</p>
                </MagicCard>
              </BlurFade>
            </li>
          ))}
        </ol>
        <div className="relative mt-8 flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-2xl border border-[#CBE5FA] bg-[#F0F8FF] p-6 sm:p-7">
          <BorderBeam size={200} duration={16} />
          <p className="max-w-2xl text-sm leading-7 text-[#4E607A]">Considering SpineWorkspace for {domain.name}? Evaluate this workflow with your team and confirm the supported tools, included capabilities and subscription terms.</p>
          <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#006FE8] bg-white px-5 text-sm font-semibold text-[#082B5E] shadow-2xs hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Explore subscriptions & pricing <ArrowRight className="h-4 w-4 shrink-0" aria-hidden /></Link>
        </div>
      </Section>
    </>
  );
}
