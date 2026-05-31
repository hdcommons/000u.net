import type { TBSceneState, TBTab } from "./tb-types";
import { BankMockUserAvatar } from "../BankMockUserAvatar";
import {
  formatMinutesToTimeLabel,
  formatPingPongTotalDisplay,
  formatSignedNetAmount,
  formatSignedNetMinutesLabel,
  metricPrefixNumber,
  TB_MOCK_BASE_RECEIVED_PONG,
  TB_MOCK_BASE_SENT_PING,
  TB_MOCK_TRANSFER_PING,
} from "./tb-mock-balances";
import { TBTransferIcon, TBViewIcon } from "../BankIcons";

const TABS: { id: TBTab; label: string }[] = [
  { id: "transactions", label: "핑퐁내역" },
  { id: "all", label: "전체조회" },
];

function formatPingPongBalanceAmount(minutes: number): string {
  if (minutes >= 1000) {
    return metricPrefixNumber(minutes, 1) ?? minutes.toLocaleString("ko-KR");
  }
  return minutes.toLocaleString("ko-KR");
}

export function TBHeaderMock({ state }: { state: TBSceneState }) {
  const sentDebit = state.transferSuccess ? TB_MOCK_TRANSFER_PING : 0;
  const sentPing = TB_MOCK_BASE_SENT_PING + sentDebit;
  const receivedPong = TB_MOCK_BASE_RECEIVED_PONG;
  const totalTime = sentPing + receivedPong;
  const netTime = receivedPong - sentPing;

  return (
    <header className="bank-header">
      <div className="bank-header-row">
        <div className="bank-header-user">
          <BankMockUserAvatar />
          <span className="bank-header-name">홍길동</span>
        </div>
        <div className="bank-balance-row">
          <div className="bank-balance-block">
            <div className="bank-balance-value" data-guide-id="tb-sent-ping">
              {formatPingPongBalanceAmount(sentPing)}
              <span className="bank-balance-unit">핑</span>
            </div>
            {sentPing > 0 ? (
              <div className="bank-balance-sublabel">{formatMinutesToTimeLabel(sentPing)}</div>
            ) : null}
          </div>
          <div className="bank-balance-block">
            <div className="bank-balance-value">
              {formatPingPongBalanceAmount(receivedPong)}
              <span className="bank-balance-unit">퐁</span>
            </div>
            {receivedPong > 0 ? (
              <div className="bank-balance-sublabel">{formatMinutesToTimeLabel(receivedPong)}</div>
            ) : null}
          </div>
        </div>
      </div>
      {totalTime !== 0 ? (
        <div className="bank-stats-row">
          <div className="bank-stats-item">
            <strong>총 시간</strong> {formatPingPongTotalDisplay(totalTime)}{" "}
            <span className="bank-stats-unit-suffix" aria-label="핑 더하기 퐁">
              <span>핑</span>
              <span>+</span>
              <span>퐁</span>
            </span>
          </div>
          <span className="bank-stats-sep" aria-hidden>
            ·
          </span>
          <div className="bank-stats-item">
            <strong>순 시간</strong> {formatSignedNetAmount(netTime)} (
            {formatSignedNetMinutesLabel(netTime)}){" "}
            <span className="bank-stats-unit-suffix" aria-label="퐁 빼기 핑">
              <span>퐁</span>
              <span>−</span>
              <span>핑</span>
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function TBToolbarMock({ state }: { state: TBSceneState }) {
  return (
    <div className="bank-toolbar">
      <div className="bank-toolbar-actions" style={{ paddingLeft: 4 }}>
        <button
          type="button"
          data-guide-id="ping-gift-button"
          data-accordion-open={state.transferOpen ? "true" : "false"}
          className={`bank-toolbar-action ${state.transferOpen ? "is-active" : ""}`}
        >
          <TBTransferIcon />
          <span>핑 선물</span>
        </button>
      </div>
      <div className={`bank-toolbar-tabs ${state.transferOpen ? "is-disabled" : ""}`}>
        <span style={{ opacity: 0.3, padding: "0 0.5rem" }} aria-hidden>
          <TBViewIcon />
        </span>
        {TABS.map((tab) => (
          <span
            key={tab.id}
            data-guide-id={`tab-${tab.id}`}
            className={`bank-toolbar-tab ${state.activeTab === tab.id ? "is-active" : ""}`}
          >
            {tab.label}
          </span>
        ))}
      </div>
    </div>
  );
}
