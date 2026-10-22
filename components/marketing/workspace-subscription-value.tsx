import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const comparisons = [
  ["CRM, finance and support tools", "Related business context across authorized records."],
  ["Reporting dashboards", "Editable operational views beside related records and source evidence."],
  ["AI chat", "Shared business context, work history and proposed next steps for human review."],
  ["Workflow automation", "Context and review before authorized actions, with observed outcomes afterward."],
] as const;

export function WorkspaceSubscriptionValue({ accountActions }: { accountActions?: ReactNode } = {}) {
  return (
    <>
      <section id="why" aria-labelledby="workspace-subscription-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-16 text-[#082B5E] sm:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            Why choose SpineWorkspace?
          </p>
          <h2 id="workspace-subscription-title" className="mt-5 max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">Keep your tools. Connect the work.</h2>
          <p className="mt-5 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#4E607A]">Your tools hold the records. SpineWorkspace brings the context, working views and decisions together.</p>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white shadow-[0_8px_30px_-10px_rgba(0,111,232,0.08)]">
            <BorderBeam size={200} duration={16} />
            <table className="w-full border-collapse text-left text-sm leading-7">
              <caption className="sr-only">How SpineWorkspace complements existing application categories</caption>
              <thead className="bg-[#F0F8FF]"><tr><th scope="col" className="w-2/5 px-4 py-4 font-semibold sm:px-6">What you already use</th><th scope="col" className="px-4 py-4 font-semibold sm:px-6">What SpineWorkspace adds</th></tr></thead>
              <tbody>
                {comparisons.map(([existing, value]) => <tr key={existing} className="border-t border-[#D6E8F8] transition-colors hover:bg-[#F8FCFF]"><th scope="row" className="px-4 py-4 align-top font-medium sm:px-6">{existing}</th><td className="px-4 py-4 align-top text-[#4E607A] sm:px-6">{value}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="evaluate" aria-labelledby="workspace-evaluation-title" className="relative scroll-mt-24 overflow-hidden border-t border-[#D6E8F8] bg-[#F0F8FF] py-16 text-[#082B5E] sm:py-20">
        <div className="relative z-10 mx-auto grid max-w-[1220px] items-start gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              Why pay for a workspace?
            </p>
            <h2 id="workspace-evaluation-title" className="mt-5 max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">A clearer starting point. A better handoff.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#4E607A]">
              {[
                ["Prepare recurring work.", "Gather the relevant context for the next review."],
                ["Share the reasoning.", "Keep evidence, decisions and ownership with the task."],
                ["Resume with context.", "Retain the history needed for the next step."],
              ].map(([title, description]) => <li key={title} className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-[#006FE8]" aria-hidden /><span><strong className="font-semibold text-[#082B5E]">{title}</strong> {description}</span></li>)}
            </ul>
            <p className="mt-6 text-sm leading-7 text-[#4E607A]">Start with one renewal, handoff or operating review. Compare preparation effort and handoff clarity with your current process.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white p-6 shadow-[0_18px_48px_-12px_rgba(0,111,232,0.12)] sm:p-8">
            <BorderBeam size={220} duration={14} />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">SpineWorkspace Platform · Commercial Access</p>
            <p className="mt-5 text-[length:min(2.8rem,var(--marketing-title-size))] font-semibold leading-tight tracking-[-.04em]">Usage-Governed<span className="text-base font-medium tracking-normal block text-[#4E607A] mt-1">Starting with permanent free host-discovery</span></p>
            <p className="mt-3 text-sm font-semibold text-[#4E607A]">Scale based on connected systems of record and sync streams</p>
            <p className="mt-4 text-sm leading-7 text-[#4E607A]">Interactive pricing calculator, connector allowances, and self-service signup are hosted directly on the product site.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://spineworkspace.com/pricing" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,111,232,0.25)] transition-colors hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Calculate Pricing on spineworkspace.com <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-sm px-2 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Contact architecture <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            {accountActions}
          </div>
        </div>
      </section>
    </>
  );
}
