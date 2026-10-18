export function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={"marquee-track flex min-w-max gap-3 pr-3 group-hover:[animation-play-state:paused] " + (reverse ? "[animation-direction:reverse]" : "")}>
        {children}
        {children}
      </div>
    </div>
  );
}
