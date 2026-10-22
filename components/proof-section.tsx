"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { NumberTicker } from "@/components/ui/number-ticker"

export function ProofSection() {
  return (
    <section className="arvio-section bg-muted">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="section-heading">
            Eight million saved.{" "}
            <span className="text-primary">Zero unauthorized moves.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="arvio-card p-10">
            <p className="text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.6] tracking-[-0.02em] text-foreground">
              An eight million account showed quiet distress across many tools. SpineWorkspace caught the pattern early, so the team stepped in with full control.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-[length:min(34px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] leading-[1.3] text-primary">
                  $<NumberTicker value={8} className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary" />M
                </div>
                <div className="mt-1 text-[14px] font-medium tracking-[-0.03em] text-muted-foreground">Account saved</div>
              </div>
              <div className="text-center">
                <div className="text-[length:min(34px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] leading-[1.3] text-primary">
                  <NumberTicker value={70} className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary" />+
                </div>
                <div className="mt-1 text-[14px] font-medium tracking-[-0.03em] text-muted-foreground">Nerve endings connected</div>
              </div>
              <div className="text-center">
                <div className="text-[length:min(34px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] leading-[1.3] text-primary">
                  <NumberTicker value={0} className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary" />
                </div>
                <div className="mt-1 text-[14px] font-medium tracking-[-0.03em] text-muted-foreground">Unauthorized actions</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
            style={{ background: "var(--gradient-primary)", border: "2px solid rgba(248,248,250,0.12)", boxShadow: "var(--shadow-button)" }}
            asChild
          >
            <Link href="/contact?intent=demo">See it live</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
