"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  MessageCircle,
  LayoutGrid,
  Image as ImageIcon,
  Megaphone,
  ChevronRight,
  X,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring", bounce: 0.2, duration: 0.6, delay },
});

type CampaignAsset = {
  src: string;
  title: string;
  channel: "linkedin" | "whatsapp";
  type: "ad" | "post" | "banner" | "carousel" | "status" | "share" | "catalog";
  persona?: "account-success" | "business-ops" | "personal-ops" | "general";
  width: number;
  height: number;
};

const assets: CampaignAsset[] = [
  { src: "/images/campaign/Ad-Pain.jpg", title: "Pain Point", channel: "linkedin", type: "ad", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Ad-Product.jpg", title: "Product", channel: "linkedin", type: "ad", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Ad-Trust.jpg", title: "Trust", channel: "linkedin", type: "ad", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Ad-Vision.jpg", title: "Vision", channel: "linkedin", type: "ad", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Ad-Curiosity.jpg", title: "Curiosity", channel: "linkedin", type: "ad", persona: "general", width: 1080, height: 1080 },

  { src: "/images/campaign/Post-Tagline.jpg", title: "Tagline", channel: "linkedin", type: "post", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-Spine.jpg", title: "Spine", channel: "linkedin", type: "post", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-Governance.jpg", title: "Governance", channel: "linkedin", type: "post", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-Workbench.jpg", title: "Workspace", channel: "linkedin", type: "post", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-Category.jpg", title: "Category", channel: "linkedin", type: "post", persona: "general", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-AccountSuccess-A.jpg", title: "Account Success A", channel: "linkedin", type: "post", persona: "account-success", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-AccountSuccess-B.jpg", title: "Account Success B", channel: "linkedin", type: "post", persona: "account-success", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-BusinessOps-A.jpg", title: "Business Ops A", channel: "linkedin", type: "post", persona: "business-ops", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-BusinessOps-B.jpg", title: "Business Ops B", channel: "linkedin", type: "post", persona: "business-ops", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-PersonalOps-A.jpg", title: "Personal Ops A", channel: "linkedin", type: "post", persona: "personal-ops", width: 1080, height: 1080 },
  { src: "/images/campaign/Post-PersonalOps-B.jpg", title: "Personal Ops B", channel: "linkedin", type: "post", persona: "personal-ops", width: 1080, height: 1080 },

  { src: "/images/campaign/Banner-Tagline.jpg", title: "Tagline", channel: "linkedin", type: "banner", persona: "general", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-Spine.jpg", title: "Spine", channel: "linkedin", type: "banner", persona: "general", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-Governance.jpg", title: "Governance", channel: "linkedin", type: "banner", persona: "general", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-AccountSuccess-A.jpg", title: "Account Success A", channel: "linkedin", type: "banner", persona: "account-success", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-AccountSuccess-B.jpg", title: "Account Success B", channel: "linkedin", type: "banner", persona: "account-success", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-BusinessOps-A.jpg", title: "Business Ops A", channel: "linkedin", type: "banner", persona: "business-ops", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-BusinessOps-B.jpg", title: "Business Ops B", channel: "linkedin", type: "banner", persona: "business-ops", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-PersonalOps-A.jpg", title: "Personal Ops A", channel: "linkedin", type: "banner", persona: "personal-ops", width: 1584, height: 396 },
  { src: "/images/campaign/Banner-PersonalOps-B.jpg", title: "Personal Ops B", channel: "linkedin", type: "banner", persona: "personal-ops", width: 1584, height: 396 },

  { src: "/images/campaign/Carousel-AccountSuccess.jpg", title: "Account Success", channel: "linkedin", type: "carousel", persona: "account-success", width: 2160, height: 1080 },
  { src: "/images/campaign/Carousel-BusinessOps.jpg", title: "Business Ops", channel: "linkedin", type: "carousel", persona: "business-ops", width: 2160, height: 1080 },
  { src: "/images/campaign/Carousel-PersonalOps.jpg", title: "Personal Ops", channel: "linkedin", type: "carousel", persona: "personal-ops", width: 2160, height: 1080 },

  { src: "/images/campaign/WA-Status-Pain.jpg", title: "Pain Point", channel: "whatsapp", type: "status", persona: "general", width: 1080, height: 1920 },
  { src: "/images/campaign/WA-Status-Product.jpg", title: "Product", channel: "whatsapp", type: "status", persona: "general", width: 1080, height: 1920 },
  { src: "/images/campaign/WA-Status-Governance.jpg", title: "Governance", channel: "whatsapp", type: "status", persona: "general", width: 1080, height: 1920 },
  { src: "/images/campaign/WA-Share-Tagline.jpg", title: "Tagline", channel: "whatsapp", type: "share", persona: "general", width: 800, height: 418 },
  { src: "/images/campaign/WA-Share-Curiosity.jpg", title: "Curiosity", channel: "whatsapp", type: "share", persona: "general", width: 800, height: 418 },
  { src: "/images/campaign/WA-Catalog-AccountSuccess.jpg", title: "Account Success", channel: "whatsapp", type: "catalog", persona: "account-success", width: 600, height: 600 },
  { src: "/images/campaign/WA-Catalog-BusinessOps.jpg", title: "Business Ops", channel: "whatsapp", type: "catalog", persona: "business-ops", width: 600, height: 600 },
  { src: "/images/campaign/WA-Catalog-PersonalOps.jpg", title: "Personal Ops", channel: "whatsapp", type: "catalog", persona: "personal-ops", width: 600, height: 600 },
];

type FilterKey = "all" | "linkedin" | "whatsapp" | "account-success" | "business-ops" | "personal-ops";

const filters: { key: FilterKey; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <LayoutGrid className="h-4 w-4" /> },
  { key: "linkedin", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { key: "whatsapp", label: "WhatsApp", icon: <MessageCircle className="h-4 w-4" /> },
  { key: "account-success", label: "Account Success", icon: <Megaphone className="h-4 w-4" /> },
  { key: "business-ops", label: "Business Ops", icon: <Megaphone className="h-4 w-4" /> },
  { key: "personal-ops", label: "Personal Ops", icon: <Megaphone className="h-4 w-4" /> },
];

function typeLabel(t: CampaignAsset["type"]) {
  const map: Record<string, string> = {
    ad: "Sponsored Ad",
    post: "Post",
    banner: "Banner",
    carousel: "Carousel",
    status: "Status",
    share: "Share Card",
    catalog: "Catalog",
  };
  return map[t] || t;
}

function typeGroupLabel(t: CampaignAsset["type"]) {
  const map: Record<string, string> = {
    ad: "Sponsored Ads",
    post: "Posts",
    banner: "Banners",
    carousel: "Carousels",
    status: "Status Updates",
    share: "Share Cards",
    catalog: "Catalogs",
  };
  return map[t] || `${typeLabel(t)}s`;
}

function channelColor(c: CampaignAsset["channel"]) {
  return c === "linkedin" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800";
}

function personaLink(p: CampaignAsset["persona"]) {
  if (p === "account-success") return "/account-success";
  if (p === "business-ops") return "/business-ops";
  if (p === "personal-ops") return "/personal-ops";
  return null;
}

function personaLabel(p: CampaignAsset["persona"]) {
  const map: Record<string, string> = {
    "account-success": "Account Success",
    "business-ops": "Business Ops",
    "personal-ops": "Personal Ops",
    general: "General",
  };
  return map[p || "general"];
}

export function CampaignGalleryContent() {
  const [active, setActive] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<CampaignAsset | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!lightbox || !dialog) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [lightbox]);

  const filtered = assets.filter((a) => {
    if (active === "all") return true;
    if (active === "linkedin" || active === "whatsapp") return a.channel === active;
    return a.persona === active;
  });

  const groups = filtered.reduce<Record<string, CampaignAsset[]>>((acc, a) => {
    const key = `${a.channel === "linkedin" ? "LinkedIn" : "WhatsApp"} ${typeGroupLabel(a.type)}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(a);
    return acc;
  }, {});

  return (
    <>
      <section className="marketing-surface relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 30%, rgba(27,167,132,0.08) 0%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-[140px] pb-[48px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              {...fade(0.1)}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] border border-white/10 bg-white/[0.04] px-4 py-1.5"
            >
              <ImageIcon className="h-3.5 w-3.5 text-primary" />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/70">
                Campaign Gallery
              </span>
            </motion.div>
            <motion.h1
              {...fade(0.2)}
              className="text-[length:min(40px,var(--marketing-title-size))] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[length:min(52px,var(--marketing-title-size))] lg:text-[length:min(60px,var(--marketing-title-size))]"
            >
              Architecture and campaign{" "}
              <span className="text-primary">concepts.</span>
            </motion.h1>
            <motion.p
              {...fade(0.3)}
              className="mx-auto mt-8 max-w-2xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Explore architecture illustrations and all 36 campaign designs for Account Success, Business Ops, and Personal Ops. These earlier concepts are illustrative assets; the product and technology pages describe the current direction.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="marketing-surface bg-[#F0F8FF] px-6 pt-8 pb-16 md:px-16 innovtech-reference-surface">
        <div className="mx-auto max-w-[1200px]">
          <motion.div {...fade()} className="mb-8 flex items-center gap-3">
            <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-[#052858]">
              The SpineWorkspace — Architecture Blueprints
            </h2>
            <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold text-primary uppercase tracking-wider">
              Core
            </span>
          </motion.div>
          <motion.p {...fade(0.05)} className="mb-10 max-w-3xl text-[15px] font-medium leading-[1.6] text-white/45">
            These illustrations explore how tools and evidence relate to shared business context. They do not establish connector availability or prove deployed controls. Explore Spine Fabric for the contextual foundation and SpineWorkspace for the product features.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                src: "/images/campaign/Post-Category.jpg",
                title: "The SpineWorkspace for Enterprise Intelligence",
                desc: "Problem vs Solution — tool sprawl and ungrounded AI risk on the left, the SpineWorkspace with governed cognitive loop on the right. Three data flows (Structured, Unstructured, AI Memory) converge at the Truth Boundary.",
              },
              {
                src: "/images/campaign/Post-Spine.jpg",
                title: "The Spine — Powering Governed, Context-Rich AI",
                desc: "Full architecture showing the Workspace, Twin, SpineWorkspace as the record the tools already keep, and the The loop (Think → Govern → Act → Adjust) — illustrative demonstration, not a customer result.",
              },
              {
                src: "/images/campaign/Post-Governance.jpg",
                title: "The workspace, Twin, and a person's decision",
                desc: "The tools stay separate. The workspace shows the work. A person decides, and an accepted change goes back to the original tool.",
              },
              {
                src: "/images/campaign/Carousel-BusinessOps.jpg",
                title: "Three Planes of Data Integration",
                desc: "The record, the evidence, and earlier conversations — all feeding the SpineWorkspace. The one connection, Governed The loop, and one view of the customer.",
              },
            ].map((arch, i) => (
              <motion.div
                key={arch.src}
                {...fade(i * 0.08)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all hover:border-primary/20 hover:bg-white/[0.04]"
              >
                <button type="button" aria-label={`View ${arch.title}`} className="relative block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0055B8]" onClick={() => setLightbox({ src: arch.src, title: arch.title, channel: "linkedin", type: "post", persona: "general", width: 1200, height: 1200 })}>
                  <Image
                    src={arch.src}
                    alt={arch.title}
                    width={1200}
                    height={1200}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </button>
                <div className="px-5 py-4">
                  <div className="text-[14px] font-semibold text-white/90 leading-snug">{arch.title}</div>
                  <p className="mt-2 text-[12px] font-medium leading-[1.5] text-[#4C5C73]">{arch.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/platform/spine-fabric"
              className="text-[13px] font-semibold text-primary hover:text-primary transition flex items-center gap-1"
            >
              Explore the SpineWorkspace
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-white/10">|</span>
            <Link
              href="/platform/how-it-works"
              className="text-[13px] font-semibold text-white/40 hover:text-white/60 transition flex items-center gap-1"
            >
              How it works
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="marketing-surface bg-[#F0F8FF] px-6 pb-24 md:px-16 innovtech-reference-surface">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <motion.div {...fade()} className="mb-8 flex items-center gap-3">
            <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-[#052858]">
              Campaign Creatives
            </h2>
            <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-bold text-white/30">
              {assets.length}
            </span>
          </motion.div>

          <motion.div {...fade()} className="mb-6 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                aria-pressed={active === f.key}
                aria-controls="campaign-results"
                onClick={() => setActive(f.key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                  active === f.key
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-white/[0.04] text-white/50 border border-white/[0.08] hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </motion.div>

          <motion.div {...fade(0.1)} role="status" className="mb-8 text-center text-[13px] font-medium text-[#4E607A]">
            {filtered.length} design{filtered.length !== 1 ? "s" : ""}
          </motion.div>

          <div id="campaign-results">
          {Object.entries(groups).map(([groupName, items], gi) => (
            <div key={groupName} className="mb-14">
              {gi > 0 && (
                <div className="mb-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              )}
              <motion.div
                {...fade(gi * 0.05)}
                className="mb-6 flex items-center gap-3"
              >
                <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#052858]/80">
                  {groupName}
                </h2>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-bold text-white/30">
                  {items.length}
                </span>
              </motion.div>
              <div
                className={`grid gap-4 ${
                  items[0]?.type === "banner"
                    ? "grid-cols-1 lg:grid-cols-2"
                    : items[0]?.type === "carousel"
                    ? "grid-cols-1"
                    : items[0]?.type === "status"
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    : items[0]?.type === "catalog"
                    ? "grid-cols-2 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {items.map((asset, i) => (
                  <motion.div
                    key={asset.src}
                    {...fade(i * 0.04)}
                    className="group cursor-pointer overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all hover:border-white/[0.15] hover:bg-white/[0.04]"
                  >
                    <button type="button" aria-label={`View ${asset.title}`} onClick={() => setLightbox(asset)} className="relative block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0055B8]">
                      <Image
                        src={asset.src}
                        alt={`${asset.title} — SpineWorkspace ${typeLabel(asset.type)}`}
                        width={asset.width}
                        height={asset.height}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </button>
                    <div className="flex items-center justify-between gap-2 px-4 py-3">
                      <div>
                        <div className="text-[13px] font-semibold text-white/80">{asset.title}</div>
                        <div className="mt-0.5 flex items-center gap-2">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${channelColor(asset.channel)}`}>
                            {asset.channel}
                          </span>
                          <span className="text-[11px] text-white/30">{typeLabel(asset.type)}</span>
                        </div>
                      </div>
                      {personaLink(asset.persona) && (
                        <Link
                          href={personaLink(asset.persona)!}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] font-semibold text-primary hover:text-primary flex items-center gap-0.5"
                        >
                          {personaLabel(asset.persona)}
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#EAF5FC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            {...fade()}
            className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(36px,var(--marketing-heading-size))]"
          >
            Ready to see it{" "}
            <span className="text-[#0176D3]">in action?</span>
          </motion.h2>
          <motion.p {...fade(0.1)} className="mt-6 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-[#444]">
            Illustrative campaign designs showing how SpineWorkspace capabilities are communicated. Book a demo to see the product demonstration.
          </motion.p>
          <motion.div {...fade(0.2)} className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Button
              size="lg"
              className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[42px] rounded-xl border-2 border-[#0176D3]/30 bg-white px-6 text-[15px] font-semibold text-[#032D60] hover:bg-[#0176D3]/5"
              asChild
            >
              <Link href="/pricing">See pricing</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <dialog
            ref={dialogRef}
            aria-labelledby="campaign-lightbox-title"
            className="fixed inset-0 z-[100] m-0 h-[100dvh] w-screen max-h-none max-w-none items-center justify-center bg-black/90 backdrop-blur-sm p-6 open:flex"
            onCancel={(event) => { event.preventDefault(); setLightbox(null); }}
            onClick={(event) => { if (event.target === event.currentTarget) setLightbox(null); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close image preview"
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#082B5E] text-white hover:bg-[#0055B8] transition"
              >
                <X className="h-4 w-4" />
              </button>
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                width={lightbox.width}
                height={lightbox.height}
                className="rounded-xl max-h-[72vh] max-w-[80vw] h-auto w-auto"
                priority
              />
              <div className="mt-4 text-center">
                <div id="campaign-lightbox-title" className="text-[15px] font-semibold text-white">{lightbox.title}</div>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${channelColor(lightbox.channel)}`}>
                    {lightbox.channel}
                  </span>
                  <span className="text-[12px] text-white/75">{typeLabel(lightbox.type)}</span>
                  {lightbox.persona !== "general" && (
                    <span className="text-[12px] text-blue-200">{personaLabel(lightbox.persona)}</span>
                  )}
                </div>
              </div>
            </motion.div>
          </dialog>
        )}
      </AnimatePresence>
    </>
  );
}
