import { createRootRoute, HeadContent, Outlet, Scripts, useLocation } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteMissing } from "@/components/site/shell";
import { corporateCanonical } from "@/lib/site-seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Spine InnovTech" },
      { name: "description", content: "Spine InnovTech builds systems where people and AI work from the same business context, with the person in control." },
      { name: "theme-color", content: "#082B5E" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: SiteMissing,
});

function RootDocument() {
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <link rel="canonical" href={corporateCanonical(pathname)} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
