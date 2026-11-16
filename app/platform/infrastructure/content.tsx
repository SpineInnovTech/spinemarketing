"use client";

import { motion } from "framer-motion";
import { Server, Zap, Database, Globe, BarChart3, Layers, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { KpiBlock } from "@/components/marketing/enterprise";
import { FinalCTA } from "@/components/final-cta";
import { InfrastructureStickyScroll } from "./sticky-sections";

const firebaseCards = [
  { title: "Live database", desc: "Updates each screen as the record changes, close to real time." },
  { title: "Stays put", desc: "Survives refreshes, timeouts, and device switches." },
  { title: "Acts on changes", desc: "Work happens when something changes — no constant checking." },
];

const services = [
  { icon: Database, name: "Spine Service", desc: "Business items, how they relate, and keeping the record tidy." },
  { icon: Layers, name: "Context Service", desc: "Builds the live view and spots clashes." },
  { icon: Zap, name: "Twin Service", desc: "The AI that thinks things through and spots signals." },
  { icon: Globe, name: "Approval Service", desc: "Keeps to the rules and sends decisions to a person." },
  { icon: BarChart3, name: "Action Service", desc: "Approved actions, with the result watched and checked." },
  { icon: Server, name: "Notification Service", desc: "Sends alerts and summaries — no spam." },
];

const scalabilityCards = [
  { title: "Fast, worldwide", desc: "Runs close to people around the world, so it feels quick." },
  { title: "Storage", desc: "Where the database and files live depends on your setup." },
  { title: "Steady under load", desc: "Background work retries, handles failures, and checks the result." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function InfrastructureContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <PageHero
          badge="Infrastructure"
          headline="Six services. Worldwide. Close to real time."
          subhead="See what each service does and how SpineWorkspace is built. Where it runs, how fast it is, and how it recovers depend on your setup."
          primaryCta={{ label: "See how it is built", href: "/contact?intent=demo" }}
        />

        <Section variant="muted">
          <div className="grid gap-4 sm:grid-cols-3">
            <KpiBlock label="Change to screen" value="Near real-time" detail="Updates keep coming" />
            <KpiBlock label="Purpose-built services" value="6" detail="Each with one clear job" />
            <KpiBlock label="Reach" value="Global" detail="Runs close to people worldwide" />
          </div>
        </Section>

        <Section>
          <SectionHeader label="Live updates" headline="Keeps screens in sync as things change" />
          <div className="grid gap-4 md:grid-cols-3">
            {firebaseCards.map((f, i) => (
              <motion.div key={f.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <h3 className="text-[16px] font-semibold text-[#032D60]">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section variant="muted">
          <SectionHeader label="The services" headline="Six services, each with one clear job" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.name} {...fade(i * 0.05)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <s.icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#032D60]">{s.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Scale" headline="Fast worldwide, and steady under load" />
          <div className="grid gap-4 md:grid-cols-3">
            {scalabilityCards.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <h3 className="text-[16px] font-semibold text-[#032D60]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold text-[#032D60]">Built for scale from day one.</h2>
            <p className="mt-3 text-[16px] text-[#444]">Walk through the full setup in a short session.</p>
            <Link
              href="/contact?intent=demo"
              className="mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <InfrastructureStickyScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
