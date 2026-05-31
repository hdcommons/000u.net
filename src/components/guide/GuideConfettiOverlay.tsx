"use client";

import type { Container } from "@tsparticles/engine";
import { useLayoutEffect, useRef } from "react";

/** confetti.js.org Realistic Look — canvas-confetti realistic()와 동일한 다중 burst */
const REALISTIC_CENTER = { x: 50, y: 50 } as const;
const REALISTIC_TOTAL = 200;

const REALISTIC_BURSTS: Array<{
  ratio: number;
  spread: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}> = [
  { ratio: 0.25, spread: 26, startVelocity: 55 },
  { ratio: 0.2, spread: 60 },
  { ratio: 0.35, spread: 100, decay: 0.91, scalar: 0.8 },
  { ratio: 0.1, spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 },
  { ratio: 0.1, spread: 120, startVelocity: 45 },
];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function fitLayerToHost(layer: HTMLElement): boolean {
  const host = layer.parentElement;
  if (!host) return false;

  const { width, height } = host.getBoundingClientRect();
  if (width <= 0 || height <= 0) return false;

  layer.style.width = `${width}px`;
  layer.style.height = `${height}px`;
  return true;
}

async function fireRealisticConfetti(
  fire: (options: {
    count: number;
    spread: number;
    position: { x: number; y: number };
    flat: boolean;
    startVelocity?: number;
    decay?: number;
    scalar?: number;
  }) => Promise<Container | undefined>,
): Promise<Container | undefined> {
  let container: Container | undefined;

  for (const burst of REALISTIC_BURSTS) {
    container = await fire({
      count: Math.floor(REALISTIC_TOTAL * burst.ratio),
      spread: burst.spread,
      position: REALISTIC_CENTER,
      flat: false,
      ...(burst.startVelocity !== undefined ? { startVelocity: burst.startVelocity } : {}),
      ...(burst.decay !== undefined ? { decay: burst.decay } : {}),
      ...(burst.scalar !== undefined ? { scalar: burst.scalar } : {}),
    });
  }

  return container;
}

export function GuideConfettiOverlay() {
  const layerRef = useRef<HTMLDivElement>(null);
  const runRef = useRef(0);

  useLayoutEffect(() => {
    const layer = layerRef.current;
    if (!layer || prefersReducedMotion()) return;

    const runId = ++runRef.current;
    let cancelled = false;
    let container: Container | undefined;

    const start = async () => {
      if (cancelled || runId !== runRef.current) return;
      if (!fitLayerToHost(layer)) {
        requestAnimationFrame(() => void start());
        return;
      }

      layer.replaceChildren();
      const canvas = document.createElement("canvas");
      canvas.id = `guide-confetti-${runId}-${Date.now()}`;
      layer.appendChild(canvas);

      try {
        const { confetti } = await import("@tsparticles/confetti");
        const fire = await confetti.create(canvas, {
          flat: false,
          disableForReducedMotion: false,
          zIndex: 20,
          position: REALISTIC_CENTER,
        });

        if (cancelled || runId !== runRef.current) {
          return;
        }

        container = await fireRealisticConfetti(fire);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[GuideConfettiOverlay]", error);
        }
      }
    };

    requestAnimationFrame(() => void start());

    const resizeObserver = new ResizeObserver(() => {
      fitLayerToHost(layer);
    });
    if (layer.parentElement) {
      resizeObserver.observe(layer.parentElement);
    }

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
      container?.destroy();
      layer.replaceChildren();
    };
  }, []);

  return <div ref={layerRef} className="guide-confetti-layer" aria-hidden />;
}
