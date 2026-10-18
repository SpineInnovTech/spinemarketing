import { createFileRoute } from "@tanstack/react-router";
import { corporateRobots } from "@/lib/site-seo";

export const Route = createFileRoute("/robots.txt")({
  server: { handlers: { GET: () => new Response(corporateRobots(), { headers: { "Content-Type": "text/plain; charset=utf-8" } }) } },
});
