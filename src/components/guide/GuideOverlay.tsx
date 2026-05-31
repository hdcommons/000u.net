"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import type { GuideOverlayState } from "./types";

type ContainerRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function toContainerRect(el: Element, container: HTMLElement): ContainerRect {
  const containerBox = container.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left - containerBox.left - container.clientLeft,
    top: rect.top - containerBox.top - container.clientTop,
    width: rect.width,
    height: rect.height,
  };
}

export function GuideOverlay({
  containerRef,
  overlay,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  overlay: GuideOverlayState;
}) {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [pulseRect, setPulseRect] = useState<ContainerRect | null>(null);

  const syncOverlay = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container
      .querySelectorAll(".guide-highlight-target")
      .forEach((node) => node.classList.remove("guide-highlight-target"));

    const resolve = (id: string | null) => {
      if (!id) return null;
      const el = container.querySelector(`[data-guide-id="${id}"]`);
      if (!el) return null;
      return toContainerRect(el, container);
    };

    if (overlay.highlightId) {
      const el = container.querySelector(`[data-guide-id="${overlay.highlightId}"]`);
      el?.classList.add("guide-highlight-target");
    }

    const highlight = resolve(overlay.highlightId);
    const pulse = resolve(overlay.clickPulseId);
    setPulseRect(pulse);

    if (overlay.showCursor && (highlight || pulse)) {
      const target = pulse ?? highlight;
      if (target) {
        const ax = overlay.cursorAnchor?.x ?? 0.7;
        const ay = overlay.cursorAnchor?.y ?? 0.55;
        setCursorPos({
          x: target.left + target.width * ax,
          y: target.top + target.height * ay,
        });
      }
    } else {
      setCursorPos(null);
    }
  }, [containerRef, overlay]);

  useLayoutEffect(() => {
    syncOverlay();

    const container = containerRef.current;
    if (!container) return;

    const onUpdate = () => syncOverlay();
    window.addEventListener("resize", onUpdate);
    window.addEventListener("scroll", onUpdate, true);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onUpdate) : null;
    ro?.observe(container);

    return () => {
      window.removeEventListener("resize", onUpdate);
      window.removeEventListener("scroll", onUpdate, true);
      ro?.disconnect();
      container
        .querySelectorAll(".guide-highlight-target")
        .forEach((node) => node.classList.remove("guide-highlight-target"));
    };
  }, [containerRef, syncOverlay]);

  if (!overlay.showCursor && !overlay.highlightId && !overlay.clickPulseId) {
    return null;
  }

  return (
    <div className="guide-overlay" aria-hidden>
      {pulseRect ? (
        <div
          className="guide-click-pulse"
          style={{
            left: pulseRect.left + pulseRect.width / 2,
            top: pulseRect.top + pulseRect.height / 2,
          }}
        />
      ) : null}
      {cursorPos ? (
        <svg
          className="guide-cursor"
          style={{ left: cursorPos.x, top: cursorPos.y }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 3L19 12L11 13L9 21L5 3Z"
            fill="#18181b"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>
      ) : null}
    </div>
  );
}
