"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { SculpturePoster } from "./SculpturePoster";

const HeroSculpture = dynamic(() => import("./HeroSculpture"), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

/**
 * Progressive enhancement:
 * - The static poster is always in the initial HTML, so the hero is complete
 *   without JavaScript.
 * - The WebGL scene is only requested on desktop-sized viewports with a
 *   working context, and swaps in once its first frame has rendered.
 */
export function HeroVisual() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    let idleHandle: number | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const evaluate = () => {
      if (cancelled) return;

      if (!query.matches || !supportsWebGL()) {
        setEnabled(false);
        return;
      }

      const enable = () => {
        if (!cancelled) setEnabled(true);
      };

      // Let the static poster and text paint before pulling the WebGL chunk.
      if (typeof window.requestIdleCallback === "function") {
        idleHandle = window.requestIdleCallback(enable, { timeout: 1600 });
      } else {
        timeout = setTimeout(enable, 700);
      }
    };

    evaluate();
    query.addEventListener("change", evaluate);

    return () => {
      cancelled = true;
      query.removeEventListener("change", evaluate);
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <SculpturePoster
        className={`absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-out ${
          ready ? "opacity-0" : "opacity-55 md:opacity-100"
        }`}
      />

      {enabled ? (
        <div
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <HeroSculpture reducedMotion={reducedMotion} onReady={() => setReady(true)} />
        </div>
      ) : null}
    </div>
  );
}
