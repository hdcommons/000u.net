"use client";

import { ChargeApplicationGuideTable } from "./communitybank/ChargeApplicationGuideTable";
import type { GuideStep } from "./types";

function GuideStepDetail({ kind }: { kind: NonNullable<GuideStep<Record<string, unknown>>["detailCaption"]> }) {
  if (kind === "charge-application-guide") {
    return (
      <div className="guide-step-panel-detail">
        <ChargeApplicationGuideTable tableClassName="guide-step-panel-detail-table" />
      </div>
    );
  }
  return null;
}

export function GuideStepPanel<T extends Record<string, unknown>>({
  step,
  stepIndex,
  totalSteps,
}: {
  step: GuideStep<T> | undefined;
  stepIndex: number;
  totalSteps: number;
}) {
  if (!step) return null;

  return (
    <div className="guide-step-panel">
      <p className="guide-step-panel-kicker">
        Step {stepIndex + 1} of {totalSteps}
      </p>
      <h2 className="guide-step-panel-title">{step.title}</h2>
      {step.captionList ? (
        <ul className="guide-step-panel-caption guide-step-panel-caption-list">
          {step.captionList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : step.caption ? (
        <p className="guide-step-panel-caption">{step.caption}</p>
      ) : null}
      {step.detailCaption ? <GuideStepDetail kind={step.detailCaption} /> : null}
    </div>
  );
}
