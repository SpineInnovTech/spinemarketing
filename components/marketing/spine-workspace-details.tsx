import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { WorkbenchHeroPreview } from "./workbench-hero-preview";
import { WorkspaceAuthActions } from "./workspace-auth-actions";
import { WorkspaceBenefits, WorkspaceSolutions } from "./workspace-benefits";
import { ThreeProductPillars } from "./three-product-pillars";
import { SpineNetworkContinuity } from "./spine-network-continuity";
import { WorkspaceSubscriptionValue } from "./workspace-subscription-value";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";

const workflow = [
  {
    title: "Gather the context",
    body: "Start with a customer, goal or task. Bring its related records and source evidence into the review.",
  },
  {
    title: "Prepare with your Twin",
    body: "Ask your AI Twin to summarize the situation, investigate the evidence and propose a useful next step.",
  },
  {
    title: "Review with authority",
    body: "People review the proposal. Consequential actions require authorization, and their outcomes must be checked.",
  },
] as const;

export function SpineWorkspaceDetails() {
  return (
    <div className="innovtech-page">
      <section className="innovtech-product innovtech-product-overview relative overflow-hidden bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white" aria-labelledby="product-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,111,232,0.12),transparent_70%)]" aria-hidden />
        <div className="innovtech-product-copy relative z-10">
          <p className="innovtech-eyebrow inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-white px-3.5 py-1 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            <AnimatedShinyText shimmerWidth={140}>SPINEWORKSPACE · YOUR TEAM AND AI, IN CONTEXT</AnimatedShinyText>
          </p>
          <h1 id="product-title" className="mt-5">One Fabric. 13 domains. Ready to work.</h1>
          <p className="innovtech-hero-description">
            Spine Fabric assembles authorized truth, relationships and evidence from connected sources. Its domain projections give every team ready-built Workbench views while Twin helps prepare governed next steps.
          </p>
          <div className="innovtech-actions mt-6">
            <a href="https://spineworkspace.com" className="innovtech-button">Explore SpineWorkspace Platform <ArrowRight size={18} aria-hidden /></a>
            <a href="https://spineworkspace.com/pricing" className="innovtech-text-link">View Product Pricing &amp; Plans <ArrowRight size={18} aria-hidden /></a>
          </div>
        </div>
        <div className="relative z-10 min-w-0">
          <WorkbenchHeroPreview />
        </div>
        <div className="relative z-10 col-span-full flex flex-wrap gap-x-7 gap-y-1 border-t border-[#D6E8F8] pt-4 text-sm">
          <Link href="/proof" className="inline-flex min-h-11 items-center rounded-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Inspect the product evidence</Link>
          <Link href="/developers#integration-paths" className="inline-flex min-h-11 items-center rounded-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Evaluate integrations and access</Link>
        </div>
      </section>

      <ThreeProductPillars compact />
      <WorkspaceBenefits detailed />
      <WorkbenchViewExplorer initialDomain="founderops" />
      <SpineNetworkContinuity />

      <section id="how-it-works" aria-labelledby="product-workflow-title" className="innovtech-section innovtech-white-section scroll-mt-24">
        <p className="innovtech-eyebrow">How the workspace works</p>
        <h2 id="product-workflow-title">Understand the situation. Prepare the next step.</h2>
        <p className="innovtech-section-intro">For a renewal review, relate the customer’s contract, invoice and service incident. Account Success, Finance and Engineering see the permitted evidence through their own views of the same Fabric.</p>
        <div className="mx-auto mt-10 grid max-w-[1160px] gap-5 text-left md:grid-cols-3">
          {workflow.map(({ title, body }, index) => (
            <BlurFade key={title} delay={index * 0.06} inView className="h-full">
              <MagicCard className="h-full" innerClassName="p-6 sm:p-7">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#006FE8]">STEP 0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold text-[#082B5E]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4E607A]">{body}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-[850px] text-sm leading-7 text-[#4E607A]">Spine Network is designed to carry context and work checkpoints across compatible AI hosts. Each host independently verifies identity, tool access and authority before continuing.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-3">
          <Link href="/platform/how-it-works" className="innovtech-text-link">See the underlying workflow <ArrowRight size={18} aria-hidden /></Link>
          <Link href="/host-connected-environment" className="innovtech-text-link">Explore host connections and continuity <ArrowRight size={18} aria-hidden /></Link>
          <Link href="/security" className="innovtech-text-link">Security and governance <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>

      <WorkspaceSolutions />
      <WorkspaceSubscriptionValue accountActions={<WorkspaceAuthActions />} />
    </div>
  );
}
