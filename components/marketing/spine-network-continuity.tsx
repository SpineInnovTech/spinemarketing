import Link from "next/link";
import { ArrowRight, Bot, Cable, CheckCircle2, Database, GitBranch, LockKeyhole, Network, ShieldCheck } from "lucide-react";

const hostStages = [
  { label: "Host identity", detail: "One Auth session, actor, tenant and workspace", icon: LockKeyhole },
  { label: "Capability discovery", detail: "Host-exposed tools or independently authorized Spine bindings", icon: Cable },
  { label: "Authority to use", detail: "One Access permissions, scopes and capability policy", icon: ShieldCheck },
  { label: "Capability invoked", detail: "Safe authorized operation, result and correlation trace", icon: CheckCircle2 },
  { label: "Execution reconciled", detail: "Provider receipt, outcome and timestamp; canonical destination when ingestion is requested", icon: Database },
] as const;

export function SpineNetworkContinuity() {
  return (
    <section id="spine-network" aria-labelledby="spine-network-title" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">SPINE NETWORK</p>
        <h2 id="spine-network-title" className="mt-4 max-w-[1000px] text-[length:min(clamp(2rem,4vw,3.4rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-[-.04em] text-[#082B5E]">
          Start in one AI host. Continue from the same governed work in another.
        </h2>
        <p className="mt-5 max-w-[890px] text-base leading-8 text-[#4E607A]">
          Spine Network MCP is the semantic entrypoint for authorized context and continuity. The Continuity Bridge resolves who is asking and what they may retrieve; Spine Fabric holds source-linked work context. Compatible AI hosts can resume approved work without inheriting another host&apos;s credentials.
        </p>
        <div className="mt-9 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
          <div className="rounded-2xl border border-[#C9E0F2] bg-[#F2F9FF] p-6">
            <div className="flex items-center gap-3"><Bot className="h-6 w-6 text-[#006FE8]" aria-hidden /><span className="text-sm font-semibold text-[#082B5E]">AI Host A</span></div>
            <p className="mt-5 text-sm font-semibold text-[#082B5E]">Start the work</p>
            <p className="mt-2 text-sm leading-6 text-[#536C86]">Retrieve permitted context, investigate evidence and prepare a work item.</p>
            <p className="mt-5 border-t border-[#D0E4F5] pt-3 text-xs text-[#426A8F]">Independent authorized host binding</p>
          </div>
          <div className="flex items-center justify-center text-[#006FE8]"><ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" aria-hidden /></div>
          <div className="rounded-2xl border border-[#9FCBF0] bg-[#E5F3FF] p-6">
            <div className="flex items-center gap-3"><Network className="h-6 w-6 text-[#006FE8]" aria-hidden /><span className="text-sm font-semibold text-[#082B5E]">Spine Network + Fabric</span></div>
            <p className="mt-5 text-sm font-semibold text-[#082B5E]">Preserve governed context</p>
            <p className="mt-2 text-sm leading-6 text-[#395C7B]">Keep canonical entity references, evidence, versioned work state, permissions and continuity together.</p>
            <p className="mt-5 border-t border-[#B8DCF5] pt-3 text-xs text-[#32638F]">Context reference · Work item · Provenance</p>
          </div>
          <div className="flex items-center justify-center text-[#006FE8]"><ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" aria-hidden /></div>
          <div className="rounded-2xl border border-[#C9E0F2] bg-[#F2F9FF] p-6">
            <div className="flex items-center gap-3"><GitBranch className="h-6 w-6 text-[#006FE8]" aria-hidden /><span className="text-sm font-semibold text-[#082B5E]">AI Host B</span></div>
            <p className="mt-5 text-sm font-semibold text-[#082B5E]">Resume with permission</p>
            <p className="mt-2 text-sm leading-6 text-[#536C86]">Re-authorize, retrieve the same governed work context and continue without transferring credentials.</p>
            <p className="mt-5 border-t border-[#D0E4F5] pt-3 text-xs text-[#426A8F]">Separate identity and capability checks</p>
          </div>
        </div>
        <div className="mt-12 rounded-3xl border border-[#C6DEF2] bg-[#F3F9FF] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.15em] text-[#006FE8]">THE CONTINUITY BRIDGE IN PRACTICE</p>
          <h3 className="mt-3 text-[length:min(clamp(1.6rem,3vw,2.5rem),var(--marketing-heading-size))] font-semibold text-[#082B5E]">One work item. Three independent AI environments.</h3>
          <p className="mt-3 max-w-[880px] text-sm leading-7 text-[#526C84]">Example workflow using the Spine Network semantic interface. Continuation depends on source-backed context being accepted and available to the destination host under its own permissions.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {host:"Cursor",purpose:"Capture a decision",tool:"store_in_spine",description:"Submit a source-linked decision for governed promotion; this is not an immediate, unreviewed memory write."},
              {host:"Claude",purpose:"Resume the work",tool:"get_my_continuity",description:"Retrieve context and commitments permitted to Claude's independently authenticated actor."},
              {host:"ChatGPT",purpose:"Return to the active work",tool:"get_active_context",description:"Recover the authorized active context instead of copying a private transcript from another host."},
            ].map(({host,purpose,tool,description},i)=>(
              <article key={host} className="rounded-2xl border border-[#D3E5F4] bg-white p-5">
                <p className="font-mono text-xs text-[#698BAD]">0{i+1} · {host}</p>
                <h4 className="mt-3 text-base font-semibold text-[#082B5E]">{purpose}</h4>
                <code className="mt-3 block rounded-lg bg-[#EAF5FF] px-3 py-2 text-xs font-semibold text-[#125FAD]">{tool}</code>
                <p className="mt-3 text-xs leading-6 text-[#536D87]">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-[#235E91]">
            <span className="rounded-full border border-[#B8D8F0] bg-white px-3 py-2">prepare_action — proposed</span>
            <span className="rounded-full border border-[#B8D8F0] bg-white px-3 py-2">get_action_plan — reviewed</span>
            <span className="rounded-full border border-[#B8D8F0] bg-white px-3 py-2">approve_action — authorized, not executed</span>
          </div>
          <p className="mt-4 text-xs leading-6 text-[#55738D]">Provider execution remains separate from approval. Results become verified business outcomes only after an authorized operation, source readback and reconciliation. The interface may expose a host-held connection as known but not executable from another host.</p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#006FE8]">CONNECTION EVIDENCE</p><h3 className="mt-2 text-[length:min(clamp(1.6rem,3vw,2.5rem),var(--marketing-heading-size))] font-semibold text-[#082B5E]">Know what is connected, permitted and actually working.</h3></div>
          <Link href="/host-connected-environment" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">Explore host environments <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {hostStages.map(({label,detail,icon: Icon},i)=>(
            <article key={label} className="rounded-2xl border border-[#D0E3F4] bg-[#FBFDFF] p-5">
              <div className="flex justify-between"><Icon className="h-5 w-5 text-[#006FE8]" aria-hidden /><span className="font-mono text-xs text-[#7A9EBB]">{String(i+1).padStart(2,"0")}</span></div>
              <h4 className="mt-5 text-sm font-semibold text-[#082B5E]">{label}</h4>
              <p className="mt-3 text-xs leading-6 text-[#526C84]">{detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-[#55738D]">These cards describe required evidence, not verified connection statuses. Host connection does not prove source access; a queue acknowledgement does not prove canonical materialization or authorized retrieval.</p>
        <p className="mt-3 text-xs leading-6 text-[#55738D]">A cross-host continuation must retain the same canonical entity, context version, work item and checkpoint, with source references and a new retrieval trace. Each destination re-evaluates tenant, workspace, subject and capability policy. Private host memory, credentials and privileges do not transfer.</p>
      </div>
    </section>
  );
}
