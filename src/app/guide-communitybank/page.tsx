"use client";

import { useState } from "react";
import { GuidePlayer } from "@/components/guide/GuidePlayer";
import { CommunityBankMock } from "@/components/guide/communitybank/CommunityBankMock";
import {
  cbChargeInitialState,
  cbTransferInitialState,
} from "@/components/guide/communitybank/cb-types";
import { cbChargeSteps } from "@/data/guides/cb-charge.steps";
import { cbTransferSteps } from "@/data/guides/cb-transfer.steps";
import { COMMUNITY_BANK_GUIDE } from "@/constants/communityBankGuide";

type CBScenario = "charge" | "transfer";

const SCENARIOS: { id: CBScenario; label: string }[] = [
  { id: "charge", label: "충전" },
  { id: "transfer", label: "개별 송금" },
];

export default function GuideCommunityBankPage() {
  const [scenario, setScenario] = useState<CBScenario>("charge");

  const config =
    scenario === "charge"
      ? {
          subtitle: "충전 신청 방법을 안내해 드립니다.",
          initialState: cbChargeInitialState(),
          steps: cbChargeSteps,
        }
      : {
          subtitle: "개별 송금 방법을 안내해 드립니다.",
          initialState: cbTransferInitialState(),
          steps: cbTransferSteps,
        };

  return (
    <GuidePlayer
      key={scenario}
      title={COMMUNITY_BANK_GUIDE.guideTitle}
      subtitle={config.subtitle}
      headerBelowTitle={
        <div className="guide-scenario-tabs">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`guide-scenario-tab ${scenario === s.id ? "is-active" : ""}`}
              onClick={() => setScenario(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      }
      initialState={config.initialState}
      steps={config.steps}
      renderMock={(state) => <CommunityBankMock state={state} />}
      sidebarFooter={({ stepIndex, totalSteps }) =>
        scenario === "charge" && stepIndex === totalSteps - 1 ? (
          <div className="guide-continue">
            <button
              type="button"
              className="guide-continue-btn"
              onClick={() => setScenario("transfer")}
            >
              개별 송금 가이드 보기 →
            </button>
          </div>
        ) : null
      }
    />
  );
}
