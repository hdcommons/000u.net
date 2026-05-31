"use client";

import { GuidePlayer } from "@/components/guide/GuidePlayer";
import { TimebankMock } from "@/components/guide/timebank/TimebankMock";
import { tbTransferInitialState } from "@/components/guide/timebank/tb-types";
import { TIME_GIFT_PING_PONG_GUIDE } from "@/constants/timeGiftPingPongGuide";
import { tbSingleSteps } from "@/data/guides/tb-single.steps";

export default function GuideTimebankPage() {
  return (
    <GuidePlayer
      title={TIME_GIFT_PING_PONG_GUIDE.guideTitle}
      subtitle="시간선물 핑퐁을 안내해 드립니다."
      initialState={tbTransferInitialState()}
      steps={tbSingleSteps}
      renderMock={(state) => <TimebankMock state={state} />}
    />
  );
}
