"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Server,
  KeyRound,
  Users,
  ClipboardCheck,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data protection controls",
    desc: "Encryption in transit and at rest must be verified for each deployed provider and environment.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance and compliance readiness",
    desc: "Control evidence and certification status must be independently verified; no certification is claimed.",
  },
  {
    icon: Eye,
    title: "Traceable decisions",
    desc: "Design for audit records covering requests, authority, execution and outcomes; deployment coverage requires verification.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    desc: "Each person's role decides which information they can see and what they can do.",
  },
  {
    icon: Users,
    title: "SSO & identity management",
    desc: "Identity integration depends on configured providers and the product environment.",
  },
  {
    icon: Server,
    title: "Data residency",
    desc: "Data location and residency depend on deployed infrastructure and agreements.",
  },
  {
    icon: FileCheck,
    title: "Approval before consequential actions",
    desc: "Consequential execution should require authorization under the relevant policy.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance assessment",
    desc: "Regulatory requirements and implementation controls need a scoped review.",
  },
];

const principles = [
  {
    title: "Read first",
    desc: "The tools you already use keep the record, wherever the connection allows.",
  },
  {
    title: "Minimal data footprint",
    desc: "Minimize duplication and keep sensitive source data inside defined boundaries.",
  },
  {
    title: "Least-privilege design",
    desc: "Require authentication, scoped permissions and policy checks at execution boundaries.",
  },
  {
    title: "You stay in control, always",
    desc: "Who may decide, and who is accountable, is part of how it is built.",
  },
];

export function SecurityContent() {
  return (
    <>
      {/* Security Features Grid */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              How security is built, and how people stay in control
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.06,
                }}
                className="arvio-card flex flex-col items-start p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] leading-[1.3]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Our security <span className="text-primary">principles</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="arvio-card p-8"
              >
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security CTA */}
      <section
        className="arvio-section bg-[#EAF1FC]"
      >
        <div className="mx-auto max-w-[800px] text-center">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.04em] leading-[1.2] text-[#102E55] sm:text-[length:min(40px,var(--marketing-heading-size))]">
              Security should be evaluated against{" "}
              <span className="text-primary">implementation evidence.</span>
            </h2>
            <p className="mt-6 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] text-[#506783]">
              Review actual controls, authority paths and verification evidence before depending on a security claim.
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
                <Link href="/contact?intent=demo">
                  Book a demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-[#B2C7E8] bg-white px-6 text-[15px] font-semibold text-[#153F74] hover:bg-[#E3EDFF]"
                asChild
              >
                <Link href="/platform/security">Security details</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
