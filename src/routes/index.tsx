import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spine InnovTech | The business-context layer for humans and AI" },
      {
        name: "description",
        content:
          "Spine InnovTech Private Limited builds Spine Workspace — one governed business-context foundation with One Auth, Spine Network MCP, and Spine Workbench.",
      },
    ],
  }),
  component: HomePage,
});
