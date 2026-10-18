import { createFileRoute, redirect } from "@tanstack/react-router";
import { referralUrl, SITE_LINKS } from "@/lib/site-links";

export const Route = createFileRoute("/solutions")({
  beforeLoad: () => {
    throw redirect({ href: referralUrl(SITE_LINKS.productSolutions) });
  },
});
