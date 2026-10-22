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
  { title: "Realtime Database", desc: "Near real-time entity state updates to every client." },
  { title: "State Persistence", desc: "Survives refreshes, timeouts, and device switches." },
  { title: "Cloud Functions Eventing", desc: "Pure event-driven downstream processing — no polling." },
];

const services = [
  { icon: Database, name: "Spine Service", desc: "Business entities, source relationships, and schema governance." },
  { icon: Layers, name: "Context Service", desc: "Real-time view assembly and conflict detection." },
  { icon: Zap, name: "Twin Service", desc: "AI reasoning engine and signal detection." },
  { icon: Globe, name: "Approval Service", desc: "Governance enforcement and human-in-the-loop routing logic." },
  { icon: BarChart3, name: "Action Service", desc: "Authorized execution with observed effects and reconciliation." },
  { icon: Server, name: "Notification Service", desc: "Alert routing and digest generation — no spam." },
];

const scalabilityCards = [
  { title: "Cloudflare Edge", desc: "Workers at edge for low-latency global access." },
  { title: "D1 / R2 Storage", desc: "Database and object-storage responsibilities depend on the configured deployment." },
  { title: "Queue Management", desc: "Async work requires retry, failure handling, and reconciliation." },
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
          headline="Six services. Global edge. Near real-time."
          subhead="Explore the service responsibilities and infrastructure approach behind SpineWorkspace. Deployment regions, performance, and recovery behavior depend on the configured environment."
          primaryCta={{ label: "See the architecture", href: "/contact?intent=demo" }}
        />

        <Section variant="muted">
          <div className="grid gap-4 sm:grid-cols-3">
            <KpiBlock label="Normalization to UI" value="Near real-time" detail="Continuous entity updates" />
            <KpiBlock label="Purpose-built services" value="6" detail="Single-responsibility microservices" />
            <KpiBlock label="Edge distribution" value="Global" detail="Cloudflare Workers at the edge" />
          </div>
        </Section>

        <Section>
          <SectionHeader label="Firebase Architecture" headline="Real-time sync and event-driven state" />
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
          <SectionHeader label="Service Architecture" headline="Six microservices, one clear responsibility each" />
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
          <SectionHeader label="Cloudflare Edge & Scale" headline="Edge distribution and async queue management" />
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
            <p className="mt-3 text-[16px] text-[#444]">Walk through the full architecture in a 30-minute session.</p>
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
