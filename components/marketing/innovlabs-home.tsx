import Link from "next/link";
import {
  BadgeDollarSign,
  BarChart3,
  Briefcase,
  Building2,
  Cable,
  Eye,
  FileSearch,
  Files,
  Handshake,
  HeartHandshake,
  Layers,
  LifeBuoy,
  ListChecks,
  Megaphone,
  MessagesSquare,
  Settings2,
  ShieldCheck,
  Unplug,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  ArticlesSection,
  BentoSection,
  CtaBandSection,
  FaqBlockSection,
  FeatureTabsSection,
  FounderNoteSection,
  HeroSection,
  LogoStripSection,
  ProblemSection,
  Section,
  SectionHeader,
  SectionLink,
  StepsSection,
  TeamStripSection,
} from "@/components/sections";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CorporateOrbitalHero } from "./corporate-orbital-hero";
import { CorporateArchitectureStoryboard } from "./corporate-architecture-storyboard";
import { WorkspaceBenefits } from "./workspace-benefits";
import { INSIGHT_ARTICLES } from "@/lib/insights";

const SPINEWORKSPACE_URL = "https://spineworkspace.com";
const shot = (path: string) => `/images/workbench/${path}`;

const heroExplanationCards = [
  { name: "Data", description: "Data shows what is happening.", Icon: BarChart3 },
  { name: "Context", description: "Context helps explain why.", Icon: MessagesSquare },
  { name: "Next step", description: "Together, they help you decide what to do next.", Icon: ListChecks },
  { name: "Your tools", description: "Your tools, with the conversations and history behind them.", Icon: Cable },
  { name: "Full picture", description: "People and AI see the full picture and the next step.", Icon: Eye },
  { name: "Your approval", description: "Changes to your tools happen only with your approval.", Icon: ShieldCheck },
] as const;

const problems = [
  {
    icon: Unplug,
    title: "The picture is split across tools.",
    body: "Answers live in many tools, so the full picture is never in one place.",
  },
  {
    icon: Files,
    title: "Facts get copied by hand.",
    body: "People copy facts between systems by hand, and detail gets lost.",
  },
  {
    icon: FileSearch,
    title: "AI work is hard to check.",
    body: "AI can draft work, but no one can see what it used or approve it.",
  },
] as const;

// Three operating principles, plus the shared view they produce.
const principles = [
  {
    icon: ShieldCheck,
    size: "large",
    title: "Your tools keep the record.",
    body: "Your existing tools stay the place of record. SpineWorkspace reads and writes with their permission, never instead of them.",
  },
  {
    icon: UserCheck,
    size: "small",
    title: "Your people keep the authority.",
    body: "AI prepares the work. A person approves every important action before it happens.",
  },
  {
    icon: Workflow,
    size: "small",
    title: "Context continues with the work.",
    body: "Context stays with the work, so the next step continues from where the last one left off.",
  },
  {
    icon: Layers,
    size: "large",
    title: "One shared view of the work.",
    body: "People and AI can see the same facts about the work. A person stays in charge.",
    href: SPINEWORKSPACE_URL,
    linkLabel: "Explore SpineWorkspace",
  },
] as const;

const renewalExamples = [
  { data: "Renewal date and contract value", explains: "What the customer needs before renewing" },
  { data: "Number of open support tickets", explains: "Which issue could make the customer leave" },
  { data: "Product usage trend", explains: "Why usage changed and what the customer said" },
] as const;

// The Acme renewal story, grouped under Connect -> Prepare -> Review. Illustrative example, not a live record.
const workflowSteps = [
  {
    label: "Connect",
    title: "Bring the account into view",
    body: "Bring up the account, support and contract details you are allowed to see for the renewal.",
    image: { src: shot("account-success/account-health.webp"), alt: "Account health view for the Acme account" },
  },
  {
    label: "Connect",
    title: "Show the evidence",
    body: "Show the source evidence behind it and flag the gaps that are still unresolved.",
    image: { src: shot("common/knowledge.webp"), alt: "Source evidence gathered for the renewal" },
  },
  {
    label: "Prepare",
    title: "Prepare the next step",
    body: "The AI Twin prepares a renewal-risk summary and a proposed next action.",
    image: { src: shot("account-success/twin-action.webp"), alt: "AI Twin proposing a next action for the renewal" },
  },
  {
    label: "Review",
    title: "The person approves",
    body: "The person reviews the proposal and approves the exact change to make.",
    image: { src: shot("common/approvals.webp"), alt: "Approval queue where a person reviews the proposed change" },
  },
  {
    label: "Review",
    title: "The change is executed",
    body: "The approved update is made in the tool that owns the record.",
    image: { src: shot("account-success/dashboard.webp"), alt: "Account dashboard after the approved update" },
  },
  {
    label: "Review",
    title: "The record is kept",
    body: "Show how the tool looks now, and the record kept of what was done.",
    image: { src: shot("book-of-records/audit-trail.webp"), alt: "Record of what was done and who approved it" },
  },
] as const;

const featureTabs = [
  {
    id: "twin",
    label: "Spine Twin",
    title: "Prepares the work for a person to approve.",
    body: "Spine Twin prepares summaries and proposed next actions from the context you are allowed to see. A person approves every important action before it happens.",
    href: "/twin",
    image: { src: shot("account-success/twin-action.webp"), alt: "Spine Twin preparing a proposed action" },
  },
  {
    id: "coworker",
    label: "Spine Coworker",
    title: "Gathers the records and evidence this person may use.",
    body: "Spine Coworker watches authorized signals, assembles relevant evidence and prepares useful context. It does not send messages, change business records or commit the organization on its own.",
    href: "/twin",
    image: { src: shot("common/knowledge.webp"), alt: "Evidence gathered by Spine Coworker" },
  },
  {
    id: "triage",
    label: "Spine Triage Bot",
    title: "Sorts what just arrived so a person sees what needs a decision.",
    body: "Spine Triage Bot sorts a new message, file, or ticket so a person can see what needs attention. It does not write the record. The tools keep the record.",
    href: "/triage-bot",
    image: { src: shot("support/tickets.webp"), alt: "Incoming tickets sorted by Spine Triage Bot" },
  },
  {
    id: "folder-monitor",
    label: "Spine Folder Monitor",
    title: "Watches the folders the business already uses.",
    body: "Spine Folder Monitor notices new and changed files in the folders your team already works in. The file stays in the folder.",
    href: "/folder-monitor",
    image: { src: shot("canvas/library-20261015.webp"), alt: "Library of files watched by Spine Folder Monitor" },
  },
] as const;

const teams = [
  { icon: HeartHandshake, name: "Customer Success", line: "Renewals with the full account picture.", href: "/solutions/customer-success" },
  { icon: Handshake, name: "Sales", line: "Deals with the history behind them.", href: "/solutions/sales" },
  { icon: Megaphone, name: "Marketing", line: "Campaigns tied to the accounts they reach.", href: "/solutions/marketing" },
  { icon: LifeBuoy, name: "Customer Support", line: "Tickets with the account context in view.", href: "/solutions/customer-support" },
  { icon: BadgeDollarSign, name: "Finance", line: "Numbers with the reasons behind them.", href: "/solutions/finance" },
  { icon: Settings2, name: "Operations", line: "Handovers that do not start from zero.", href: "/solutions/operations" },
  { icon: Users, name: "RevOps", line: "One view across sales, success and finance.", href: "/solutions/revops" },
  { icon: Building2, name: "Founders", line: "The whole business in one reviewed picture.", href: "/solutions/founders" },
  { icon: Briefcase, name: "Services", line: "Client work that keeps its context.", href: "/solutions/services" },
] as const;

const faqs = [
  {
    question: "What is the difference between Spine InnovTech and SpineWorkspace?",
    answer: "Spine InnovTech is the company. SpineWorkspace is our flagship product, where people and AI work from the same business context.",
  },
  {
    question: "Does SpineWorkspace replace our existing tools?",
    answer: "No. Your existing tools stay the place of record. SpineWorkspace reads and writes with their permission, never instead of them.",
  },
  {
    question: "Can the AI change our records on its own?",
    answer: "No. AI prepares the work. A person approves every important action before it happens, and the approved change is made in the tool that owns the record.",
  },
  {
    question: "What information can the AI see?",
    answer: "Only what the person is allowed to see in the connected tools. Permissions stay with the tools that own the data.",
  },
  {
    question: "Who is it built for first?",
    answer: "Account and customer success teams. Other teams, such as sales, finance and operations, can see how SpineWorkspace fits their work on the solutions pages.",
  },
] as const;

const buildPoints = [
  "Your information brought together.",
  "People approve the AI.",
  "Work carries on from one AI tool to the next.",
] as const;

const articles = INSIGHT_ARTICLES.map((article) => ({
  href: `/insights/${article.slug}`,
  category: article.category,
  title: article.title,
}));

function RenewalExampleTable() {
  return (
    <div className="max-w-3xl">
      <div className="sx-card overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Illustrative example of data and what helps explain it</caption>
          <thead className="sx-muted sx-title">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Data</th>
              <th scope="col" className="px-4 py-3 font-semibold">What helps explain it</th>
            </tr>
          </thead>
          <tbody>
            {renewalExamples.map((row) => (
              <tr key={row.data} className="sx-line border-t">
                <th scope="row" className="sx-title w-1/2 px-4 py-3 align-top font-medium">{row.data}</th>
                <td className="sx-body w-1/2 px-4 py-3 align-top leading-6">{row.explains}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sx-body mt-4 text-sm leading-relaxed md:text-base">
        {"A conversation is data too. It adds context when it helps you understand the customer\u2019s situation. These are examples, not separate boxes."}
      </p>
    </div>
  );
}

export function InnovLabsHome() {
  return (
    <div className="sx-surface">
      <HeroSection
        id="company-title"
        chip="Spine InnovTech"
        title={
          <>
            <span className="block">Your Business Tools</span>
            <span className="block">Your Business Context</span>
            <span className="block">Your Decisions</span>
            <span className="block">AI Acts With Your Approval</span>
          </>
        }
        lead="Your data and the story behind it, in one place."
        primary={{ label: "See the workflow", href: "#workflow" }}
        secondary={{ label: "Explore SpineWorkspace", href: SPINEWORKSPACE_URL }}
      >
        <BentoGrid className="auto-rows-auto text-left sm:grid-cols-2 lg:grid-cols-3">
          {heroExplanationCards.map(({ name, description, Icon }) => (
            <BentoCard key={name} name={name} description={description} Icon={Icon} />
          ))}
        </BentoGrid>
      </HeroSection>

      {/* SPINEWORKSPACE BLOCK — right after the hero, with the workbench diagram */}
      <Section id="spineworkspace" labelledBy="home-spineworkspace-title" className="pt-4 md:pt-8">
        <SectionHeader
          id="home-spineworkspace-title"
          eyebrow="SpineWorkspace"
          title="Connected context. Human control. AI-ready."
          intro="Your tools. Your context. Your decisions."
        />
        <div className="mt-8 flex justify-center">
          <SectionLink action={{ label: "Explore SpineWorkspace", href: SPINEWORKSPACE_URL }} />
        </div>
        <BlurFade delay={0.08} inView className="mt-12 w-full">
          <CorporateOrbitalHero />
        </BlurFade>
      </Section>

      <LogoStripSection />

      <ProblemSection eyebrow="What is hard today" title="Work stalls when context is scattered." items={problems} />

      <BentoSection id="principles" eyebrow="How people stay in control" title="Three principles the product runs on." items={principles} />

      <StepsSection
        id="workflow"
        eyebrow="One workflow, end to end"
        badge="Illustrative example"
        title="See how it works: a customer renewal"
        intro="A renewal for the Acme account. Maya, a customer success lead, works with her AI Twin across Salesforce, Zendesk and Gmail."
        aside={<RenewalExampleTable />}
        steps={workflowSteps}
      />

      <FounderNoteSection
        quote="The lasting need was a shared picture of the work that stays with the next person. That is what we set out to build."
        name="Spine InnovTech"
        role="Why we started"
        href="/about"
      />

      <FeatureTabsSection id="features" eyebrow="Inside SpineWorkspace" title="Helpers that prepare the work. People decide." tabs={featureTabs} />

      <TestimonialsSection heading="What the work looks like" />

      <WorkspaceBenefits />

      {/* CONCISE ARCHITECTURE (3-scene storyboard, plain copy) */}
      <Section id="architecture-story" labelledBy="home-architecture-title" tone="muted">
        <SectionHeader id="home-architecture-title" eyebrow="How it is built" title="From your tools to work that keeps going."
          intro="Three parts: your information brought together, Agentic Governance (AI prepares the work and a person approves it), and work that carries on from one AI tool to the next."
          align="left"
        />
        <ul className="sx-body mt-4 max-w-3xl list-disc space-y-2 pl-5 text-base leading-relaxed">
          {buildPoints.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-5 text-sm">
          <Link href="/platform" className="sx-accent font-semibold hover:underline">
            More detail is on the platform pages.
          </Link>
        </p>
        <div className="mt-10">
          <CorporateArchitectureStoryboard />
        </div>
      </Section>

      <TeamStripSection
        id="who-it-serves"
        eyebrow="Who it serves first"
        title="Built first for account and customer success teams."
        intro="Renewals bring the account record, support history and contract terms together. The team can see the risk. A person decides what to do."
        teams={teams}
      />

      <FaqBlockSection tone="muted" items={faqs} />

      <ArticlesSection title="From our Insights" articles={articles} />

      <CtaBandSection
        id="company-insights"
        title="The company behind SpineWorkspace."
        body="Spine InnovTech builds SpineWorkspace. People and AI can see the same facts about the work. A person stays in charge."
        primary={{ label: "Discover our approach", href: "/company" }}
        secondary={{ label: "Explore SpineWorkspace", href: SPINEWORKSPACE_URL }}
      />
    </div>
  );
}
