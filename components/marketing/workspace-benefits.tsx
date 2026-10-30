import Link from "next/link";
import { ArrowRight, Database, Layers3, PanelsTopLeft } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

const benefits = [
  {
    icon: Database,
    title: "The facts about the work",
    lines: [
      "Connect the tools you already use, such as your CRM, email and help desk.",
      "See the facts behind each task, with a link to where each one came from.",
      "People only see what they already have access to.",
      "Your data stays in your tools. Nothing is moved or copied away.",
    ],
    href: "/business-context",
    link: "Explore business context",
  },
  {
    icon: Layers3,
    title: "One shared view across teams",
    lines: [
      "Spine Fabric is the part that pulls your information together into one view.",
      "Each team sees the view that fits its job, on the same facts.",
      "Each person sees only what their role allows.",
    ],
    href: "/platform/spine-fabric",
    link: "How Spine Fabric works",
  },
  {
    icon: PanelsTopLeft,
    title: "Editable dashboards and documents",
    lines: [
      "See your key numbers on a dashboard and edit drafts right there.",
      "Write documents and build tables and charts in Canvas, the built-in editor.",
    ],
    href: "https://spineworkspace.com",
    link: "Explore SpineWorkspace",
  },
];

const solutions = [
  ["Customer Success", "Prepare renewals with account health, commitments and service history.", "/solutions/customer-success"],
  ["Sales & Revenue Operations", "See open deals, recent conversations and next steps for each customer in one place.", "/solutions/revops"],
  ["Finance", "Review financial records with the decisions and work behind them.", "/solutions/finance"],
  ["Operations", "See what each task is waiting on, who must approve it and who picks it up next.", "/solutions/operations"],
  ["Product & Engineering", "Connect customer feedback, incidents and delivery work.", "/solutions/product-engineering"],
  ["Leadership", "Review goals, progress and decisions, with the facts behind each one.", "/solutions/founders"],
] as const;

export function WorkspaceBenefits({ detailed = false }: { detailed?: boolean }) {
  return (
    <section
      id={detailed ? "benefits" : "what-we-build"}
      aria-labelledby="workspace-benefits-title"
      className="scroll-mt-24 bg-white py-16 text-[#082B5E] sm:py-20"
    >
      <div id={detailed ? "features" : "why-spineworkspace"} className="mx-auto max-w-[1320px] scroll-mt-24 px-5 sm:px-8 lg:px-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
          What you get
        </p>
        <h2 id="workspace-benefits-title" className="mt-5 max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">
          Shared context. Views built for your role.
        </h2>
        <p className="mt-5 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#4E607A]">
          Bring the information behind the work into a workspace your team can use.
        </p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, lines, href, link }, index) => (
            <BlurFade key={title} delay={index * 0.06} inView className="h-full">
              <MagicCard className="h-full" innerClassName="justify-between p-6 sm:p-7">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8] shadow-2xs">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-[length:var(--marketing-card-size)] font-semibold leading-[1.4] tracking-[-.025em]">{title}</h3>
                  <ul className="mt-4 space-y-2 text-[14px] leading-6 text-[#4E607A]">
                    {lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                {href.startsWith("http") ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm border-t border-[#EBF2F9] pt-4 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
                  >
                    {link} <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm border-t border-[#EBF2F9] pt-4 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
                  >
                    {link} <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                )}
              </MagicCard>
            </BlurFade>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-[#596F89]">What you can see depends on the tools you connect, your role and what you are allowed to do.</p>
      </div>
    </section>
  );
}

export function WorkspaceSolutions() {
  return (
    <section id="solutions" aria-labelledby="workspace-solutions-title" className="relative scroll-mt-24 overflow-hidden border-t border-[#D6E8F8] bg-[#EBF7FF] py-16 text-[#082B5E] sm:py-20">
      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
          Solutions for your team
        </p>
        <h2 id="workspace-solutions-title" className="mt-5 max-w-[850px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">Built for the work your team repeats.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([title, description, href], index) => (
            <BlurFade key={title} delay={index * 0.05} inView className="h-full">
              <Link href={href} className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
                <MagicCard className="h-full" innerClassName="justify-between p-6">
                  <div>
                    <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-[1.4] group-hover:text-[#006FE8] transition-colors">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4E607A]">{description}</p>
                  </div>
                  <ArrowRight className="mt-5 h-4 w-4 text-[#006FE8] transition-transform group-hover:translate-x-0.5" aria-hidden />
                </MagicCard>
              </Link>
            </BlurFade>
          ))}
        </div>
        <Link href="/solutions" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Explore all solutions <ArrowRight className="h-4 w-4" aria-hidden /></Link>
      </div>
    </section>
  );
}
