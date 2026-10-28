"use client";

import { useEffect } from "react";
import { profile } from "@/lib/content/site";

/**
 * Cinematic first-visit intro.
 *
 * Server-renders as a fully hidden overlay; a small blocking script in the
 * body adds `intro-active` to <html> only when this session has not seen the
 * intro yet and reduced motion is not requested. This component then:
 *   1. marks the session as intro-seen as the overlay starts to exit,
 *   2. removes `intro-active` once the wipe has finished.
 *
 * Without `intro-active` the overlay stays invisible from its base CSS
 * (opacity 0, visibility hidden, pointer-events none), so the component can
 * stay mounted harmlessly. If the script never runs (JavaScript disabled), the
 * site remains fully usable.
 */
export function IntroOverlay() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("intro-active")) return;

    // Overlay exit starts at 1.2s and lasts 0.58s; release when the wipe ends.
    const seenTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem("intro-seen", "1");
      } catch {
        // Storage can be blocked (private mode); the intro just replays next session.
      }
    }, 1250);

    const releaseTimer = window.setTimeout(() => {
      root.classList.remove("intro-active");
    }, 1900);

    return () => {
      window.clearTimeout(seenTimer);
      window.clearTimeout(releaseTimer);
    };
  }, []);

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-stage">
        <p className="intro-meta">
          <span>{profile.role} — Portfolio</span>
        </p>
        <p className="intro-name">
          <span>{profile.name}</span>
        </p>
        <span className="intro-rule" aria-hidden="true" />
      </div>
    </div>
  );
}
