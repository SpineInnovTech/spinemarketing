import { useRef } from "react";

export function Dock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function scaleTo(event: React.MouseEvent<HTMLDivElement>) {
    const dock = ref.current;
    if (!dock || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    dock.querySelectorAll<HTMLElement>("[data-dock-item]").forEach((item) => {
      const box = item.getBoundingClientRect();
      const distance = Math.abs(event.clientX - (box.left + box.width / 2));
      const scale = Math.min(1.12, Math.max(1, 1.28 - distance / 220));
      item.style.transform = `scale(${scale})`;
    });
  }

  function reset() {
    ref.current?.querySelectorAll<HTMLElement>("[data-dock-item]").forEach((item) => {
      item.style.transform = "scale(1)";
    });
  }

  return (
    <div
      ref={ref}
      className={"flex items-end gap-1 rounded-2xl border border-line bg-ice px-1.5 py-1 " + className}
      onMouseMove={scaleTo}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}

export function DockItem({ children }: { children: React.ReactNode }) {
  return (
    <div data-dock-item className="origin-bottom transition-transform duration-150">
      {children}
    </div>
  );
}
