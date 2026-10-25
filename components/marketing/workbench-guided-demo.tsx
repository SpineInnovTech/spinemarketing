"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import mediaStyles from "./responsive-media.module.css";

const frames = [
  { id: "overview", title: "Start with a shared operating view", domain: "FounderOps", route: "/workspace/work/founderops/founder-ops", src: "/images/workbench/founderops/cockpit-20261014.webp", detail: "The captured fixture connects revenue, clients and open deals to stages and named contacts within the shared shell." },
  { id: "account", title: "Review account-story coverage", domain: "Account Success", route: "/workspace/accounts/acme-corp", src: "/images/workbench/account-success/account-health.webp", detail: "This capture shows fixture story readiness and CRM, support and product coverage. It does not show a renewal-risk investigation or a Twin proposal." },
  { id: "sales", title: "Project the same Fabric into sales", domain: "Sales", route: "/workspace/work/salesops/pipeline", src: "/images/workbench/sales/pipeline.webp", detail: "A role-specific pipeline view presents the information sellers need, without inventing a separate organizational truth." },
  { id: "finance", title: "See financial work in its own context", domain: "Finance", route: "/workspace/work/finance/invoices", src: "/images/workbench/finance/invoices.webp", detail: "Finance can inspect its operational records and attention areas through its own governed view." },
  { id: "engineering", title: "Connect delivery to shared priorities", domain: "Product & Engineering", route: "/workspace/work/product-engineering/roadmap", src: "/images/workbench/product-engineering/roadmap.webp", detail: "Product teams see roadmap and delivery work while preserving the same cross-functional context model." },
  { id: "workflows", title: "Bring related work into an operations view", domain: "Business Operations", route: "/workspace/work/bizops/workflows", src: "/images/workbench/bizops/workflows.webp", detail: "Named fixture workflows show progress and status cards. Real actions require current authority, applicable approval and reconciled execution evidence." },
] as const;

export function WorkbenchGuidedDemo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const frame = frames[active];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopForReducedMotion = () => { if (preference.matches) setPlaying(false); };
    stopForReducedMotion();
    preference.addEventListener("change", stopForReducedMotion);
    return () => preference.removeEventListener("change", stopForReducedMotion);
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % frames.length), 5500);
    return () => window.clearInterval(timer);
  }, [playing]);
  const selectFrame = (index: number) => {
    setPlaying(false);
    setActive(index);
  };
  const move = (increment: number) => selectFrame((active + frames.length + increment) % frames.length);

  return (
    <section id="workbench-tour" aria-labelledby="workbench-tour-title" className="scroll-mt-20 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[840px]">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">LIVE WORKBENCH VIEWS</p>
            <h2 id="workbench-tour-title" className="mt-4 text-[length:min(clamp(2rem,4vw,3.4rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-[-.045em] text-[#082B5E]">Explore the Workbench across business domains.</h2>
            <p className="mt-4 text-base leading-8 text-[#4E607A]">A guided walkthrough using screenshots captured from the actual Workbench React application. Pause, play or select a frame to explore how the same business context is projected across roles.</p>
          </div>
          <Link href="/product#workbench-views" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">Browse the full screenshot gallery <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
        <div className="mt-9 overflow-hidden rounded-3xl border border-[#CBE5FA] bg-[#F4FAFF] shadow-[0_18px_60px_rgba(15,70,130,.09)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8E7F4] bg-white px-4 py-3 sm:px-6">
            <span className="text-xs font-semibold text-[#082B5E]">{frame.domain} <span className="ml-2 font-normal text-[#68809B]">{String(active + 1).padStart(2, "0")}/{String(frames.length).padStart(2, "0")}</span></span>
            <span className="rounded-full border border-[#E0EAF3] bg-[#F4F8FB] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5D7188]">Live Workbench Views</span>
          </div>
          <div className="grid items-center gap-0 lg:grid-cols-[1.45fr_.55fr]">
            <div className="bg-white p-3 sm:p-5">
              <img key={frame.id} src={frame.src} alt={"Workbench screenshot: " + frame.title + ". Captured from the actual Workbench application."} width={1440} height={900} loading={active === 0 ? "eager" : "lazy"} className={`${mediaStyles.media} rounded-xl border border-[#D7E6F3]`} />
            </div>
            <div className="p-6 sm:p-8" aria-live={playing ? "off" : "polite"} aria-atomic="true">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#006FE8]">Scene {String(active + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#082B5E]">{frame.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4E607A]">{frame.detail}</p>
              <p className="mt-5 break-all font-mono text-[11px] text-[#66809A]">{frame.route}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button type="button" aria-label="Previous screenshot" onClick={() => move(-1)} className="min-h-11 min-w-11 rounded-full border border-[#BAD5EC] bg-white p-3 text-[#0B4C87] hover:bg-[#E8F4FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"><ChevronLeft className="h-4 w-4" aria-hidden /></button>
                <button type="button" aria-label={playing ? "Pause Workbench tour" : "Play Workbench tour"} aria-pressed={playing} onClick={() => setPlaying(p => !p)} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#006FE8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">{playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}{playing ? "Pause" : "Play tour"}</button>
                <button type="button" aria-label="Next screenshot" onClick={() => move(1)} className="min-h-11 min-w-11 rounded-full border border-[#BAD5EC] bg-white p-3 text-[#0B4C87] hover:bg-[#E8F4FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"><ChevronRight className="h-4 w-4" aria-hidden /></button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 border-t border-[#D8E7F4] bg-[#E8F4FF] p-2 sm:grid-cols-6 sm:p-3" aria-label="Workbench tour scenes">
            {frames.map((item, i) => (
              <button key={item.id} type="button" aria-label={"Show scene " + (i + 1) + ": " + item.title} aria-current={i === active ? "step" : undefined} onClick={() => selectFrame(i)} className="flex min-h-11 min-w-11 items-center rounded-lg px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">
                <span aria-hidden className={"h-2 w-full rounded-full transition-colors " + (i === active ? "bg-[#006FE8]" : "bg-[#B3D0E9] hover:bg-[#78A9D8]")} />
              </button>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs leading-6 text-[#5E738B]">These are application screenshots from the October 13 Workbench build, presented as an interactive tour rather than a live video recording. The captured screen contents include QA fixture records; they do not establish production customer results or completed provider execution.</p>
      </div>
    </section>
  );
}
