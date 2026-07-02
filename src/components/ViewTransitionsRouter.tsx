"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export function ViewTransitionsRouter() {
  const router = useRouter();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      if (!document.startViewTransition) return;

      const anchor = (e.target as HTMLElement).closest("a");
      if (
        !anchor ||
        (anchor.target && anchor.target !== "_self") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search)
        return;

      e.preventDefault();
      e.stopPropagation();
      document.startViewTransition(() => {
        startTransition(() => {
          router.push(url.pathname + url.search + url.hash);
        });
      });
    }

    // Capture phase: run before Next.js's own <Link> click handler (bubble
    // phase) so preventDefault() here actually stops its client-side nav
    // from firing outside of startViewTransition.
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [router]);

  return null;
}
