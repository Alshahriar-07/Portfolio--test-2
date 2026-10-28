"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, type ReactNode } from "react";

declare global {
  interface Window {
    __portfolioBooted?: boolean;
  }
}

/**
 * Route transition wrapper.
 *
 * - Renders an opaque `page-curtain` that is inert by default (direct URL
 *   access and refreshes never show it — the gate is the persistent
 *   `html.route-armed` class, which is only added once the site has finished
 *   its first paint).
 * - `route-page` plays a short fade/rise on client navigations only; on the
 *   very first paint it has no animation at all.
 * - `key={pathname}` gives every route change a fresh wrapper, so the curtain
 *   wipe and the page rise always cover the incoming content, back/forward
 *   included. Restored bfcache pages keep their already-settled state and do
 *   not replay anything.
 *
 * If JavaScript fails, no class is ever added: the curtain stays `display:none`
 * and the page is fully visible.
 */
export default function RouteTemplate({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!window.__portfolioBooted) {
      // Very first paint of the site: no curtain, content fades in as-is.
      window.__portfolioBooted = true;
      return;
    }
    // Any later client navigation: arm the curtain for this paint.
    document.documentElement.classList.add("route-armed");
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="route-content"
      data-route={pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/\/$/, "") || "home"}
    >
      <div className="page-curtain" aria-hidden="true" />
      <div className="route-page">{children}</div>
    </div>
  );
}
