import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type SectionAction = { label: string; href: string };

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";

const variants = {
  primary: "bg-[#006FE8] text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] hover:bg-[#0055B8]",
  outline: "sx-card sx-title border hover:border-[#006FE8]",
};

export function SectionLink({
  action,
  variant = "primary",
  arrow = variant === "primary",
  className,
  children,
}: {
  action: SectionAction;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const external = /^https?:\/\//.test(action.href) || action.href.startsWith("#");
  const content = (
    <>
      {children ?? action.label}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );
  const classes = cn(base, variants[variant], className);
  return external ? (
    <a href={action.href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={action.href} className={classes}>
      {content}
    </Link>
  );
}
