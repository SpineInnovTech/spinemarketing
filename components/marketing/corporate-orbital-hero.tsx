"use client";

import { Check, ShieldCheck, Sparkles, Target, Layers } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface CorporateOrbitalHeroProps {
  className?: string;
}

export function CorporateOrbitalHero({ className = "" }: CorporateOrbitalHeroProps) {
  return (
    <div
      className={`relative w-full rounded-3xl border border-[#D8E5F0] bg-white p-5 md:p-8 lg:p-10 shadow-2xl overflow-hidden isolation-auto ${className}`}
      aria-label="Spine InnovTech Corporate Orbital Architecture"
    >
      <BorderBeam size={280} duration={16} colorFrom="#0070DC" colorTo="#1685F4" />

      {/* Ambient Radial Waves */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, #D8ECFC 0%, transparent 45%), radial-gradient(circle at 0% 100%, #EAF7FF 0%, transparent 40%), radial-gradient(circle at 85% 85%, #F5FBFF 0%, #FFFFFF 60%)",
        }}
      />
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#B8E0FC]/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#D8ECFC]/40 blur-3xl pointer-events-none" />

      {/* Main Hero Body — architecture diagram (illustrative) */}
      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="max-w-[640px] font-display text-base sm:text-lg font-semibold text-[#002B64] tracking-[-0.015em] leading-snug">
            The governed workbench where humans and AI move business context and work forward.
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] px-3 py-1 text-[11px] font-semibold text-[#7C3AED]">
            Illustrative example
          </span>
        </div>

        {/* Architecture Section: Ingress -> Spine Fabric -> Workbench -> Orbital Loop -> Egress */}
        <div className="relative flex items-center justify-between gap-1 overflow-x-auto lg:overflow-visible py-4">
          
          {/* 1. Left Ingress Stack */}
          <div className="flex flex-col gap-2 z-20 shrink-0">
            {/* Apps: Slack */}
            <div className="bg-white border border-[#D8E5F0] rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#E01E5A" d="M6 15a2 2 0 10-2-2 2 2 0 002 2zm1-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1z" />
                <path fill="#36C5F0" d="M9 6a2 2 0 10-2 2 2 2 0 002-2zm2 1a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1h2a1 1 0 011 1z" />
                <path fill="#2EB67D" d="M18 9a2 2 0 102 2 2 2 0 00-2-2zm-1 2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1z" />
                <path fill="#ECB22E" d="M15 18a2 2 0 102-2 2 2 0 00-2 2zm-2-1a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1z" />
              </svg>
              <span className="text-[8px] font-bold text-[#002B64] mt-0.5">Apps</span>
            </div>

            {/* Tools: Salesforce */}
            <div className="bg-white border border-[#D8E5F0] rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00A1E0">
                <path d="M19.3 10.04a4.4 4.4 0 00-3.32-1.46c-.57 0-1.12.11-1.63.31A6.08 6.08 0 009.2 6.5c-2.76 0-5.1 1.83-5.83 4.38A4.86 4.86 0 000 15.6c0 2.7 2.2 4.9 4.9 4.9h14.2a4.9 4.9 0 004.9-4.9c0-2.48-1.85-4.52-4.26-4.84l-.44-.06-.3-.32-.2-.24z" />
              </svg>
              <span className="text-[8px] font-bold text-[#002B64] mt-0.5">Tools</span>
            </div>

            {/* Plugins: Drive */}
            <div className="bg-white border border-[#D8E5F0] rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#FFBA00" d="M8.2 4.5l5.5 9.5-2.7 4.7-5.5-9.5z" />
                <path fill="#0066DA" d="M14.5 14h8.3l-2.7 4.7H11.8z" />
                <path fill="#00AC47" d="M18.7 4.5L13.2 14 7.7 4.5h11z" />
              </svg>
              <span className="text-[8px] font-bold text-[#002B64] mt-0.5">Plugins</span>
            </div>

            {/* MCP: FastMCP / Model Context */}
            <div className="bg-[#EAF7FF] border border-[#0070DC]/40 rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <span className="font-mono text-[9px] font-extrabold text-[#0070DC] tracking-tighter">MCP</span>
              <span className="text-[7.5px] font-bold text-[#002B64]">Protocol</span>
            </div>

            {/* Hosts: Claude / Cursor */}
            <div className="bg-white border border-[#D8E5F0] rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#D97706">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-[8px] font-bold text-[#002B64] mt-0.5">AI Hosts</span>
            </div>
          </div>

          {/* Flow Connector: Left Ingress into Spine Fabric */}
          <div className="flex flex-col items-center justify-center px-1 z-10 shrink-0">
            <div className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-[#1685F4] to-[#0070DC] relative">
              <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#0070DC] animate-ping" />
            </div>
            <span className="text-[8px] font-mono font-bold text-[#1685F4] mt-1">Ingress</span>
          </div>

          {/* 2. Spine Fabric Substrate Capsule */}
          <div className="bg-gradient-to-b from-[#EAF7FF] to-[#D8ECFC] border-2 border-[#0070DC] rounded-2xl p-2 w-28 sm:w-32 shadow-lg z-20 shrink-0 flex flex-col gap-1.5">
            <div className="flex items-center gap-1 border-b border-[#0070DC]/30 pb-1">
              <Layers className="w-3.5 h-3.5 text-[#0070DC]" />
              <span className="text-[9px] font-black uppercase text-[#002B64] tracking-wider">Spine Fabric</span>
            </div>
            <div className="bg-white/90 rounded-lg p-1.5 border border-[#D8ECFC] shadow-2xs">
              <span className="text-[8px] font-bold text-[#002B64] block">Operational Context</span>
              <span className="text-[7.5px] text-[#5E728B] leading-tight block">One governed view</span>
            </div>
            <div className="bg-white/90 rounded-lg p-1.5 border border-[#D8ECFC] shadow-2xs">
              <span className="text-[8px] font-bold text-[#002B64] block">Account Anchor</span>
              <span className="text-[7.5px] text-[#5E728B] leading-tight block">Bridge keys & history</span>
            </div>
            <div className="bg-[#E8F9F0] rounded-lg p-1.5 border border-[#12B76A]/40 shadow-2xs">
              <span className="text-[8px] font-bold text-[#12B76A] block">KPI Movement</span>
              <span className="text-[7.5px] text-[#002B64] leading-tight block">Governed metrics</span>
            </div>
          </div>

          {/* Flow Connector: Spine Fabric into Workbench */}
          <div className="flex flex-col items-center justify-center px-1 z-10 shrink-0">
            <div className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-[#0070DC] to-[#002B64] relative">
              <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#002B64]" />
            </div>
            <span className="text-[8px] font-mono font-bold text-[#0070DC] mt-1">Bind</span>
          </div>

          {/* 3. Central Workbench Deck (Human + Twin) */}
          <div className="bg-white border-2 border-[#002B64] rounded-2xl p-2.5 w-44 sm:w-52 shadow-2xl z-20 shrink-0 flex flex-col gap-2">
            <div className="flex items-center justify-between border-b border-[#D8E5F0] pb-1.5">
              <span className="text-[10px] font-black uppercase tracking-tight text-[#002B64]">Shared Workbench</span>
              <span className="text-[7.5px] font-mono font-bold text-white bg-[#0070DC] px-1.5 py-0.5 rounded">Demo</span>
            </div>

            {/* Dual Collaborators: Human + AI Twin */}
            <div className="grid grid-cols-2 gap-1.5">
              {/* Human Maya */}
              <div className="bg-[#F8FAFC] border border-[#D8E5F0] rounded-xl p-1.5 flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#002B64] text-white flex items-center justify-center text-[9px] font-bold mb-0.5">
                  M
                </div>
                <span className="text-[8.5px] font-bold text-[#002B64]">Maya</span>
                <span className="text-[7px] text-[#5E728B]">CS Lead (Human)</span>
                <div className="mt-1 flex items-center gap-0.5 text-[7px] font-bold text-[#12B76A]">
                  <Check className="w-2.5 h-2.5" /> Approved
                </div>
              </div>

              {/* AI Spine Twin */}
              <div className="bg-[#EAF7FF] border border-[#0070DC]/40 rounded-xl p-1.5 flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#0070DC] text-white flex items-center justify-center text-[9px] font-bold mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-[8.5px] font-bold text-[#0070DC]">Spine Twin</span>
                <span className="text-[7px] text-[#002B64]">AI Counterpart</span>
                <div className="mt-1 flex items-center gap-0.5 text-[7px] font-bold text-[#0070DC]">
                  <Target className="w-2.5 h-2.5" /> Proposals
                </div>
              </div>
            </div>

            {/* Context-assembled Work Item */}
            <div className="bg-[#F5FBFF] border border-[#D8ECFC] rounded-lg p-1.5">
              <div className="flex items-center justify-between text-[7.5px] font-bold text-[#002B64] mb-0.5">
                <span>Acme Renewal · \$120k</span>
                <span className="text-[#12B76A]">ARR +15%</span>
              </div>
              <p className="text-[7px] text-[#5E728B] leading-tight line-clamp-1">
                Context assembled from Salesforce + Zendesk + Gmail
              </p>
            </div>

            {/* Governed Action Verification */}
            <div className="flex items-center justify-between pt-1 border-t border-[#D8E5F0] text-[7.5px]">
              <div className="flex items-center gap-1 text-[#002B64] font-bold">
                <ShieldCheck className="w-3 h-3 text-[#12B76A]" />
                <span>Governed &amp; Verified</span>
              </div>
              <span className="font-mono text-[#0070DC] font-bold">Closed-Loop</span>
            </div>
          </div>

          {/* Flow Connector: Outbound Execution Loop */}
          <div className="flex flex-col items-center justify-center px-1 z-10 shrink-0">
            <div className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-[#002B64] to-[#0070DC] relative">
              <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#0070DC]" />
            </div>
            <span className="text-[8px] font-mono font-bold text-[#0070DC] mt-1">Execute</span>
          </div>

          {/* 4. Right Egress Stack: Synchronized Outcomes back to Tools */}
          <div className="flex flex-col gap-2 z-20 shrink-0">
            {/* Sync to Salesforce */}
            <div className="bg-[#E8F9F0] border border-[#12B76A]/40 rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-[#12B76A]">UPDATE</span>
              <span className="text-[7.5px] font-bold text-[#002B64]">CRM Deal</span>
            </div>

            {/* Sync to Slack */}
            <div className="bg-[#E8F9F0] border border-[#12B76A]/40 rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-[#12B76A]">NOTIFY</span>
              <span className="text-[7.5px] font-bold text-[#002B64]">Channel</span>
            </div>

            {/* Sync to Drive */}
            <div className="bg-[#E8F9F0] border border-[#12B76A]/40 rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-[#12B76A]">WRITE</span>
              <span className="text-[7.5px] font-bold text-[#002B64]">Document</span>
            </div>

            {/* Sync to AI Memory */}
            <div className="bg-[#EAF7FF] border border-[#0070DC]/40 rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-[#0070DC]">MEMORY</span>
              <span className="text-[7.5px] font-bold text-[#002B64]">Context</span>
            </div>

            {/* Closed Loop Return */}
            <div className="bg-white border border-[#D8E5F0] rounded-2xl p-1.5 w-12 sm:w-13 h-12 sm:h-13 flex flex-col items-center justify-center shadow-md">
              <span className="text-[8px] font-black text-[#0070DC]">LOOP</span>
              <span className="text-[7.5px] font-bold text-[#002B64]">Audit</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#D8E5F0]/70 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#5E728B]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#12B76A]" />
          <span>One governed view of business context &amp; connection state</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-medium text-[#0070DC]">
          <span>Connect Once, Continue Forever</span>
          <span className="text-[#8293A9]">·</span>
          <span>Human-Governed Closed Loop</span>
        </div>
      </div>
    </div>
  );
}
