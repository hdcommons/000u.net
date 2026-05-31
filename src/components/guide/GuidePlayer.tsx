"use client";

import Link from "next/link";
import { useRef } from "react";
import { GuideControls } from "./GuideControls";
import { GuideConfettiOverlay } from "./GuideConfettiOverlay";
import { GuideOverlay } from "./GuideOverlay";
import { GuideStepPanel } from "./GuideStepPanel";
import type { GuideStep } from "./types";
import { useGuideTimeline } from "./useGuideTimeline";

export function GuidePlayer<T extends Record<string, unknown>>({
  title,
  subtitle,
  headerBelowTitle,
  externalHref,
  externalLabel,
  initialState,
  steps,
  renderMock,
}: {
  title: string;
  subtitle?: string;
  headerBelowTitle?: React.ReactNode;
  externalHref?: string;
  externalLabel?: string;
  initialState: T;
  steps: GuideStep<T>[];
  renderMock: (state: T) => React.ReactNode;
}) {
  const mockRef = useRef<HTMLDivElement>(null);
  const timeline = useGuideTimeline({ initialState, steps, autoPlay: true });

  return (
    <div className="guide-page">
      <header className="guide-page-header">
        <div className="guide-page-header-inner">
          <div>
            <Link href="/" className="guide-page-back">
              ← 000u.net
            </Link>
            <h1 className="guide-page-title">{title}</h1>
            {headerBelowTitle}
            {subtitle ? <p className="guide-page-subtitle">{subtitle}</p> : null}
          </div>
          {externalHref ? (
            <a href={externalHref} className="guide-page-external" target="_blank" rel="noopener noreferrer">
              {externalLabel ?? externalHref}
            </a>
          ) : null}
        </div>
      </header>

      <div className="guide-layout">
        <div className="guide-mock-wrap">
          <div ref={mockRef} className="guide-mock-frame guide-bank-root">
            {renderMock(timeline.scene)}
            {timeline.currentStep?.celebration === "confetti" ? (
              <GuideConfettiOverlay key={timeline.stepIndex} />
            ) : null}
            <GuideOverlay containerRef={mockRef} overlay={timeline.overlay} />
          </div>
        </div>

        <aside className="guide-sidebar">
          <GuideStepPanel
            step={timeline.currentStep}
            stepIndex={timeline.stepIndex}
            totalSteps={timeline.steps.length}
          />
          <GuideControls
            playing={timeline.playing}
            stepIndex={timeline.stepIndex}
            totalSteps={timeline.steps.length}
            progress={timeline.progress}
            onPlay={timeline.play}
            onPause={timeline.pause}
            onRestart={timeline.restart}
            onPrev={timeline.prev}
            onNext={timeline.next}
          />
        </aside>
      </div>
    </div>
  );
}
