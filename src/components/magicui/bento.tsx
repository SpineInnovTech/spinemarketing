export function BentoGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-3">{children}</div>;
}

export function BentoCard({
  eyebrow,
  title,
  body,
  className = "",
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={"beam-frame relative overflow-hidden rounded-card border border-line bg-paper p-6 " + className}>
      <p className="text-xs font-semibold tracking-wide text-deep">{eyebrow}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      {children}
    </article>
  );
}
