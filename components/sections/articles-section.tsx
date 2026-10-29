import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Section, SectionHeader, type SectionTone } from "./section";

export type ArticleCard = { href: string; category: string; title: string };

type ArticlesSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  articles: readonly ArticleCard[];
  viewAllHref?: string;
};

export function ArticlesSection({
  id = "articles",
  tone = "default",
  eyebrow = "Insights",
  title = "Latest from our Insights",
  articles,
  viewAllHref = "/insights",
}: ArticlesSectionProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {articles.map((article, index) => (
          <BlurFade key={article.href} delay={index * 0.08} inView className="h-full">
            <Link
              href={article.href}
              className="sx-card group flex h-full flex-col rounded-xl border p-6 transition-all hover:border-[#006FE8] hover:shadow-[0_12px_32px_rgba(0,111,232,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
            >
              <span className="w-fit rounded-full bg-[#006FE8]/10 px-2.5 py-0.5 text-xs font-semibold text-[#006FE8]">{article.category}</span>
              <h3 className="sx-title mt-4 text-lg font-semibold leading-snug">{article.title}</h3>
              <span className="sx-accent mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </BlurFade>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href={viewAllHref} className="sx-accent inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
          View all insights <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
