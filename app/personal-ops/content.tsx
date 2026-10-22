"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inbox, Brain, CalendarCheck, Sparkles, BookOpen } from "lucide-react";

const whatChanges = [
  {
    icon: Inbox,
    title: "Morning briefing, already waiting",
    desc: "Emails, tasks, Slack, and meetings in one view automatically.",
  },
  {
    icon: Brain,
    title: "AI conversations that compound",
    desc: "Session summaries become knowledge AI references later.",
  },
  {
    icon: CalendarCheck,
    title: "Tasks, notes, and calendar unified",
    desc: "What's due, waiting, and urgent — one view.",
  },
  {
    icon: Sparkles,
    title: "AI that knows your context",
    desc: "AI reasons across your full picture, not from zero.",
  },
  {
    icon: BookOpen,
    title: "A workspace that learns",
    desc: "Surfaces what matters. Less noise, more signal.",
  },
];

const steps = [
  {
    num: "01",
    title: "Connect the apps you already use",
    desc: "Plug in via OAuth once. The Spine starts reading immediately.",
  },
  {
    num: "02",
    title: "Your Daily Workspace",
    desc: "Tasks, emails, and messages in one clean workspace.",
  },
  {
    num: "03",
    title: "The Twin works with your full context",
    desc: "Ask a question, get an answer grounded in everything.",
  },
  {
    num: "04",
    title: "Approve in the Workspace. Nothing happens without you.",
    desc: "AI proposes actions. You review evidence and approve.",
  },
];

export function PersonalOpsContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="marketing-surface relative overflow-hidden bg-white"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-1.5"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/60">
                Personal Ops
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.4,
              }}
              className="text-[length:min(40px,var(--marketing-title-size))] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[length:min(52px,var(--marketing-title-size))] lg:text-[length:min(60px,var(--marketing-title-size))]"
            >
              A calm Personal Ops workspace{" "}
              <span className="text-primary">above all your apps.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.6,
              }}
              className="mx-auto mt-8 max-w-2xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              One clear view of today&apos;s priorities. AI that understands context and never acts without permission.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.8,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                asChild
              >
                <Link href="/product/the-adaptive-workspace">Explore the Workspace</Link>
              </Button>
            </motion.div>
            <p className="mt-6 text-[14px] font-medium text-white/30">
              For individuals, solopreneurs, and knowledge workers.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">
                You&apos;re the most productive person you know —{" "}
                <span className="text-primary">and you still feel behind.</span>
              </h2>
              <div className="mt-8 space-y-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  Every morning you open six apps just to figure out what matters. The day starts before you do.
                </p>
                <p className="text-foreground font-semibold">
                  Your apps don&apos;t talk to each other. Your AI doesn&apos;t remember yesterday.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What changes with{" "}
              <span className="text-primary">SpineWorkspace</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {whatChanges.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className={`arvio-card p-6 ${i === whatChanges.length - 1 && whatChanges.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""}`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              How it <span className="text-primary">works</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-3xl gap-8">
            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="flex gap-6"
              >
                <div className="text-[length:min(40px,var(--marketing-heading-size))] font-bold tracking-[-0.05em] text-primary/15 leading-none">
                  {num}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Use Cases */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What individuals{" "}
              <span className="text-primary">do inside SpineWorkspace</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "Morning briefing",
                quote: "Pull today's meetings, emails, and tasks into one brief.",
                desc: "AI generates a morning brief linked to actual items. Five minutes to clarity.",
              },
              {
                num: "02",
                title: "Conversation and session memory",
                quote: "Summarize recent work into a project summary I can approve.",
                desc: "AI creates session summaries. You approve what enters knowledge.",
              },
              {
                num: "03",
                title: "Promise and follow-up tracker",
                quote: "Find promises and requests without a task yet.",
                desc: "AI surfaces commitments without follow-ups. One click to create tasks.",
              },
              {
                num: "04",
                title: "Weekly planning",
                quote: "Plan my week — suggest what to move, drop, or delegate.",
                desc: "AI combines tasks, meetings, and goals. You approve the plan.",
              },
            ].map(({ num, title, quote, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", bounce: 0.2, duration: 0.6 }}
                className="arvio-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    {num}
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-[-0.03em]">{title}</h3>
                </div>
                <p className="text-[13px] font-medium italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-3">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-[13px] font-medium leading-[1.6] text-foreground/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Your apps should work for you.{" "}
              <span className="text-primary">Not the other way around.</span>
            </h2>
            <p className="mt-6 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              One calm workspace. Clear mornings. AI that remembers and waits for approval.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-white/20 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                asChild
              >
                <Link href="/platform/how-it-works">See how it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
