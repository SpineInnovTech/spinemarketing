"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export interface GatherItem {
  icon: LucideIcon;
  label: string;
  description?: string;
  color: string;
}

export function StickyGather({
  tag = "How it is built",
  heading,
  subheading,
  centerLabel,
  centerDescription,
  items,
}: {
  tag?: string;
  heading: ReactNode;
  subheading?: string;
  centerLabel: string;
  centerDescription?: string;
  items: GatherItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gatherProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const centerScale = useTransform(scrollYProgress, [0.2, 0.45], [0.7, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  if (!items || items.length === 0) return null;

  const angleStep = (2 * Math.PI) / items.length;
  const radius = 220;

  return (
    <section ref={containerRef} className="relative overflow-hidden border-t border-[#E5E5E5] bg-white py-24 md:py-32" style={{ position: "relative" }}>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{tag}</p>
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-[15px] leading-[1.6] text-[#444]">{subheading}</p>
          )}
        </motion.div>

        <div className="relative mx-auto hidden md:block" style={{ height: 520, maxWidth: 600 }}>
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ scale: centerScale, opacity: centerOpacity }}
          >
            <div className="flex flex-col items-center justify-center w-[160px] h-[160px] rounded-full border border-[#E5E5E5] bg-[#F3F6F9] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="text-[14px] font-bold text-[#032D60] tracking-[-0.02em]">{centerLabel}</span>
              {centerDescription && (
                <span className="mt-1 text-[11px] font-medium text-[#706E6B] text-center px-4">{centerDescription}</span>
              )}
            </div>
          </motion.div>

          {items.map((item, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const finalX = Math.cos(angle) * radius;
            const finalY = Math.sin(angle) * radius;

            const scatterX = Math.cos(angle) * (radius * 2.5);
            const scatterY = Math.sin(angle) * (radius * 2.5);

            return (
              <GatherNode
                key={item.label}
                item={item}
                scatterX={scatterX}
                scatterY={scatterY}
                finalX={finalX}
                finalY={finalY}
                progress={gatherProgress}
              />
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, type: "spring", damping: 18, stiffness: 70 }}
              className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                  {item.icon && <item.icon className="h-5 w-5 text-[#0176D3]" />}
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#032D60]">{item.label}</h3>
              </div>
              <p className="text-[13px] leading-[1.65] text-[#444]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GatherNode({
  item,
  scatterX,
  scatterY,
  finalX,
  finalY,
  progress,
}: {
  item: GatherItem;
  scatterX: number;
  scatterY: number;
  finalX: number;
  finalY: number;
  progress: MotionValue<number>;
}) {
  const x = useTransform(progress, [0, 1], [scatterX, finalX]);
  const y = useTransform(progress, [0, 1], [scatterY, finalY]);
  const opacity = useTransform(progress, [0, 0.3], [0.2, 1]);
  const scale = useTransform(progress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-10"
      style={{ x, y, opacity, scale, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-md border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          {item.icon && <item.icon className="h-6 w-6 text-[#0176D3]" />}
        </div>
        <span className="text-[11px] font-bold text-[#706E6B] whitespace-nowrap">{item.label}</span>
      </div>
    </motion.div>
  );
}
