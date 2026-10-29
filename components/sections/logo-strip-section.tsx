import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { FEATURED_INTEGRATION_LOGOS, type IntegrationLogo } from "@/lib/integration-logos";

type LogoStripSectionProps = {
  title?: string;
  logos?: IntegrationLogo[];
};

export function LogoStripSection({
  title = "Works with the tools you already use",
  logos = FEATURED_INTEGRATION_LOGOS,
}: LogoStripSectionProps) {
  return (
    <section aria-label={title} className="sx-surface sx-line border-y py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="sx-body text-center text-sm font-medium">{title}</p>
        <div className="relative mt-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <Marquee pauseOnHover className="[--duration:45s] [--gap:2.5rem]">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center gap-2.5 px-1">
                <Image src={logo.src || "/placeholder.svg"} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                <span className="sx-title text-sm font-semibold">{logo.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
