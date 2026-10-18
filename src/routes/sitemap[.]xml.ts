import { createFileRoute } from "@tanstack/react-router";
import { corporateSitemapXml } from "@/lib/site-seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: { handlers: { GET: () => new Response(corporateSitemapXml(), { headers: { "Content-Type": "application/xml; charset=utf-8" } }) } },
});
