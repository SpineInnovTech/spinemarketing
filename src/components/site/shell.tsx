import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Dock, DockItem } from "@/components/magicui/dock";
import { COMPANY, LEGAL, offerings } from "@/lib/site";
import { referralUrl, SITE_LINKS } from "@/lib/site-links";

export function Mark({ className = "h-7 w-auto" }: { className?: string }) {
  return <img src="/logo.png" alt="" className={className} />;
}

const menus = [
  {
    id: "company",
    label: "Company",
    links: [
      ["/", "Home", "The company, not a product checkout."],
      ["/story", "Our story", "From connected systems to understood work."],
      ["/company", "About Spine InnovTech", "The firm and what it is building."],
      ["/contact", "Contact", "One workflow, one conversation."],
      ["/contact?topic=evaluation", "Evaluation and pricing", "An inquiry. Plans stay on the product site."],
      ["/services", "Services", "Bounded work. No fixed-price promise."],
      ["/site-map", "All pages", "What this site carries, and what it does not."],
    ],
  },
  {
    id: "products",
    label: "Product",
    links: [
      [referralUrl(SITE_LINKS.product), "Explore Spine Workspace", "Our flagship product. Keep your AI and your tools."],
      [referralUrl(SITE_LINKS.productSolutions), "Product solutions", "Find the product journey for your team."],
      [referralUrl(SITE_LINKS.productPricing), "Product pricing", "Plans and evaluation on the product site."],
      ...offerings.map((item) => [item.href, item.name, item.line] as const),
      ["/platform", "Technology overview", "One Spine. How the parts fit."],
      ["/docs", "Docs and developers", "The evaluator map. Not a second product site."],
    ],
  },
  {
    id: "learn",
    label: "Insights",
    links: [
      ["/blog", "Blog", "Published only when there is a claim to stand behind."],
      ["/faq", "Questions", "What shared context does and does not mean."],
    ],
  },
  {
    id: "trust",
    label: "Trust",
    links: [
      ["/security", "Trust and security", "Boundaries. No certification is claimed here."],
      ["/privacy", "Privacy", "How this website handles an inquiry."],
      ["/terms", "Website terms", "The corporate site, not a subscription agreement."],
    ],
  },
] as const;

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-navy">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const active = menus.find((item) => item.id === menu);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <Mark className="h-7 w-auto" />
          <span>{COMPANY}</span>
        </Link>
        <nav className="ml-auto hidden lg:block" aria-label="Primary">
          <Dock>
            {menus.map((item) => (
              <DockItem key={item.id}>
                <button
                  type="button"
                  className={"rounded-xl px-3 py-2 text-sm font-medium " + (menu === item.id ? "bg-paper text-navy" : "text-navy")}
                  aria-expanded={menu === item.id}
                  onClick={() => setMenu(menu === item.id ? null : item.id)}
                >
                  {item.label}
                </button>
              </DockItem>
            ))}
            </Dock>
        </nav>
        <a href={SITE_LINKS.workspace} className="ml-2 hidden min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold lg:inline-flex">
          Open workspace
        </a>
        <Link to="/contact" search={{ topic: "general" }} className="hidden min-h-11 items-center rounded-full bg-blue px-4 text-sm font-semibold text-paper lg:inline-flex">
          Talk to us
        </Link>
        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-md border border-line lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {active ? (
        <div className="hidden border-t border-line bg-paper lg:block">
          <div className="mx-auto grid max-w-6xl gap-2 px-5 py-4 sm:grid-cols-2 lg:grid-cols-3">
            {active.links.map(([href, label, line]) => (
              <a key={href} href={href} className="rounded-card px-3 py-3 hover:bg-ice" onClick={() => setMenu(null)}>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="mt-1 block text-xs text-muted">{line}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
      {open ? (
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line px-5 py-3 lg:hidden" aria-label="Mobile">
          <a href={SITE_LINKS.workspace} className="mb-3 flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold" onClick={() => setOpen(false)}>
            Open workspace
          </a>
          {menus.map((item) => (
            <div key={item.id} className="py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-deep">{item.label}</p>
              {item.links.map(([href, label]) => (
                <a key={href} href={href} className="flex min-h-11 items-center text-sm font-medium" onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          ))}
          <a href="/platform" className="flex min-h-11 items-center text-sm font-medium" onClick={() => setOpen(false)}>
            Technology
          </a>
          <Link to="/contact" search={{ topic: "general" }} className="mt-2 inline-flex min-h-11 items-center rounded-full bg-blue px-4 text-sm font-semibold text-paper" onClick={() => setOpen(false)}>
            Talk to us
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-semibold">The business-context layer for the agentic era.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Spine InnovTech builds Spine Workspace and the memory, surfaces, counterpart, and governed network around it.
          </p>
        </div>
        <FooterCol heading="Company" links={[["/company", "About"], ["/story", "Story"], ["/services", "Services"], ["/site-map", "All pages"], ["/contact", "Contact"]]} />
        <FooterCol heading="Product and platform" links={[
          [referralUrl(SITE_LINKS.product), "Explore Spine Workspace"],
          ...offerings.map((item) => [item.href, item.name] as const),
          [SITE_LINKS.workspace, "Open workspace"],
        ]} />
        <FooterCol heading="Insights" links={[["/blog", "Blog"], ["/docs", "Documentation"], ["/faq", "Questions"]]} />
        <FooterCol heading="Trust" links={[["/security", "Security"], ["/privacy", "Privacy"], ["/terms", "Terms"]]} />
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted">© {new Date().getFullYear()} {LEGAL}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterCol({ heading, links }: { heading: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-sm font-semibold">{heading}</p>
      <ul className="mt-3 space-y-2">
        {links.map(([to, label]) => (
          <li key={to}>
            <a href={to} className="text-sm text-muted hover:text-navy">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteMissing() {
  return (
    <Page>
      <section className="mx-auto max-w-6xl px-5 py-24">
        <h1 className="text-4xl font-semibold tracking-tight">We couldn’t find that page.</h1>
        <p className="mt-4 max-w-xl text-muted">It may have moved. Start from the company, the platform, or a conversation.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex h-9 items-center rounded-md bg-blue px-4 text-sm font-medium text-paper">
            Homepage
          </Link>
          <a href="/platform" className="inline-flex h-9 items-center rounded-md border border-line px-4 text-sm font-medium">
            Technology
          </a>
        </div>
      </section>
    </Page>
  );
}
