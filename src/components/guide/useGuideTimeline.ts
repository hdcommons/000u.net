"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  defaultOverlay,
  type GuideOverlayState,
  type GuideStep,
} from "./types";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGuideTimeline<T extends Record<string, unknown>>({
  initialState,
  steps,
  autoPlay = true,
}: {
  initialState: T;
  steps: GuideStep<T>[];
  autoPlay?: boolean;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [scene, setScene] = useState<T>(initialState);
  const [overlay, setOverlay] = useState<GuideOverlayState>(defaultOverlay);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useRef(prefersReducedMotion());

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  const buildAt = useCallback(
    (index: number) => {
      let built = { ...initialState } as T;
      for (let i = 0; i <= index; i++) {
        const step = steps[i];
        if (!step) continue;
        built = { ...built, ...step.patch };
      }
      const currentStep = steps[index];
      const builtOverlay = {
        ...defaultOverlay,
        ...(currentStep?.overlay ?? {}),
      };
      return { scene: built, overlay: builtOverlay };
    },
    [initialState, steps],
  );

  const applyStep = useCallback(
    (index: number) => {
      const { scene: built, overlay: builtOverlay } = buildAt(index);
      setScene(built);
      setOverlay(builtOverlay);
      setProgress(0);
    },
    [buildAt],
  );

  const scheduleNext = useCallback(
    (index: number) => {
      clearTimers();
      const step = steps[index];
      if (!step) return;

      if (reducedMotion.current) {
        setProgress(100);
        timerRef.current = setTimeout(() => {
          if (index < steps.length - 1) {
            const next = index + 1;
            setStepIndex(next);
            applyStep(next);
            scheduleNext(next);
          } else {
            setPlaying(false);
          }
        }, 400);
        return;
      }

      const start = Date.now();
      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        setProgress(Math.min(100, (elapsed / step.durationMs) * 100));
      }, 50);

      timerRef.current = setTimeout(() => {
        if (index < steps.length - 1) {
          const next = index + 1;
          setStepIndex(next);
          applyStep(next);
          scheduleNext(next);
        } else {
          setPlaying(false);
          setProgress(100);
        }
      }, step.durationMs);
    },
    [applyStep, clearTimers, steps],
  );

  const play = useCallback(() => {
    setPlaying(true);
    scheduleNext(stepIndex);
  }, [scheduleNext, stepIndex]);

  const pause = useCallback(() => {
    setPlaying(false);
    clearTimers();
  }, [clearTimers]);

  const restart = useCallback(() => {
    clearTimers();
    setStepIndex(0);
    applyStep(0);
    setProgress(0);
    setPlaying(true);
    scheduleNext(0);
  }, [applyStep, clearTimers, scheduleNext]);

  const goTo = useCallback(
    (index: number) => {
      clearTimers();
      const clamped = Math.max(0, Math.min(steps.length - 1, index));
      setStepIndex(clamped);
      applyStep(clamped);
      setProgress(0);
      if (playing) scheduleNext(clamped);
    },
    [applyStep, clearTimers, playing, scheduleNext, steps.length],
  );

  const next = useCallback(() => goTo(stepIndex + 1), [goTo, stepIndex]);
  const prev = useCallback(() => goTo(stepIndex - 1), [goTo, stepIndex]);

  useEffect(() => {
    applyStep(0);
    if (autoPlay) {
      setPlaying(true);
      scheduleNext(0);
    }
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  return {
    stepIndex,
    currentStep: steps[stepIndex],
    steps,
    scene,
    overlay,
    playing,
    progress,
    play,
    pause,
    restart,
    next,
    prev,
    goTo,
  };
}
