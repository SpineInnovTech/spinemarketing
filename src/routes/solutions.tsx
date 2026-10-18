import { createFileRoute, redirect } from "@tanstack/react-router";
import { PRODUCT_SITE } from "@/lib/site";

export const Route = createFileRoute("/solutions")({
  beforeLoad: () => {
    throw redirect({ href: PRODUCT_SITE });
  },
});
