import { FingerPrintIcon } from "../BankIcons";
import type { TBSceneState } from "./tb-types";
import {
  TB_MOCK_SENDER_NAME,
  TB_MOCK_TRANSFER_DATE_LABEL,
  TB_MOCK_TRANSFER_PING,
  TB_MOCK_TRANSFER_TRANSACTION_ID,
} from "./tb-mock-balances";
import { TIME_GIFT_PING_PONG_GUIDE } from "@/constants/timeGiftPingPongGuide";

const MOCK_USERS = ["김철수", "이영희", "박민수"];

function TBTransferResultMock({ state }: { state: TBSceneState }) {
  const pingLabel = state.pingAmount || String(TB_MOCK_TRANSFER_PING);

  return (
    <div className="bank-receipt-section">
      <div
        className="bank-transfer-receipt"
        data-guide-id="ping-result"
        role="status"
        aria-label="핑 선물 완료"
      >
        <div className="bank-transfer-receipt-print-row">
          <span
            className="bank-btn bank-btn--outline bank-transfer-receipt-print"
            data-guide-id="receipt-btn"
          >
            핑 이음표 인쇄
          </span>
        </div>
        <div className="bank-transfer-receipt-status">핑 선물 완료</div>
        <dl className="bank-transfer-receipt-dl">
          <div className="bank-transfer-receipt-row">
            <dt>보낸 회원</dt>
            <dd className="bank-transfer-receipt-name">
              {TB_MOCK_SENDER_NAME}
            </dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>받은 회원</dt>
            <dd className="bank-transfer-receipt-name">
              {state.selectedUserName}
            </dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>{TIME_GIFT_PING_PONG_GUIDE.productName}</dt>
            <dd className="bank-transfer-receipt-name">{pingLabel}핑</dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>날짜</dt>
            <dd>{TB_MOCK_TRANSFER_DATE_LABEL}</dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>메모</dt>
            <dd>{state.pingMemo.trim() ? state.pingMemo : "—"}</dd>
          </div>
        </dl>
        <div className="bank-transfer-receipt-hash bank-transfer-receipt-hash--inline">
          <FingerPrintIcon className="bank-transfer-receipt-fingerprint" />
          <span className="bank-transfer-receipt-hash-value">
            {TB_MOCK_TRANSFER_TRANSACTION_ID}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TBTransferMock({ state }: { state: TBSceneState }) {
  if (state.transferStep === "result" || state.transferSuccess) {
    return <TBTransferResultMock state={state} />;
  }

  if (!state.transferOpen) return null;

  return (
    <div className="bank-panel" data-guide-id="ping-panel">
      <div className="bank-transfer-tabs">
        <span
          className="bank-transfer-tab is-active"
          data-guide-id="tab-single-ping"
        >
          개별 핑
        </span>
        <span className="bank-transfer-tab">일괄 핑</span>
      </div>

      {state.transferStep === "select" || state.transferStep === "idle" ? (
        <>
          <label className="bank-field-label">회원 검색</label>
          <div className="bank-search-box" data-guide-id="member-search">
            <input
              className="bank-search-input"
              readOnly
              value={state.searchQuery}
              placeholder="이름, 실명, 이메일, 휴대폰으로 검색"
            />
          </div>
          {state.comboboxOpen ? (
            <div className="bank-user-list" data-guide-id="member-list">
              {MOCK_USERS.map((name) => (
                <div
                  key={name}
                  className={`bank-user-row ${state.selectedUserName === name ? "is-selected" : ""}`}
                >
                  <div
                    className="bank-avatar"
                    style={{ width: 28, height: 28, fontSize: 10 }}
                  >
                    {name.charAt(0)}
                  </div>
                  {name === "김철수" ? (
                    <span
                      className="bank-guide-user-name-target"
                      data-guide-id="member-kim"
                    >
                      {name}
                    </span>
                  ) : (
                    name
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}

      {state.transferStep === "review" || state.transferStep === "confirm" ? (
        <>
          <div
            className="bank-user-row is-selected"
            style={{ marginBottom: "1rem", borderRadius: "0.375rem" }}
          >
            <div
              className="bank-avatar"
              style={{ width: 28, height: 28, fontSize: 10 }}
            >
              {state.selectedUserName.charAt(0)}
            </div>
            {state.selectedUserName}
          </div>
          <div className="bank-preset-row">
            {["+30핑", "+60핑", "+120핑"].map((label) => (
              <span
                key={label}
                className={`bank-preset-btn ${state.presetPulse && label === "+60핑" ? "is-pulse" : ""}`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="bank-field">
            <label className="bank-field-label">핑 (분)</label>
            <div className="bank-input-group" data-guide-id="ping-amount-field">
              <input
                className="bank-input is-typing"
                readOnly
                value={state.pingAmount}
                placeholder="몇 핑을 보낼까요?"
              />
            </div>
          </div>
          <div className="bank-field">
            <label className="bank-field-label" htmlFor="guide-ping-memo">
              메모
            </label>
            <div
              className="bank-input-group bank-input-group--memo"
              data-guide-id="ping-memo-field"
            >
              <input
                id="guide-ping-memo"
                className={`bank-input ${state.pingMemo ? "is-typing" : ""}`}
                readOnly
                value={state.pingMemo}
                placeholder="선물 내용을 기록해보세요. 받는 회원에게도 표시됩니다."
              />
              <div className="bank-input-meta">
                {state.pingMemo.length} / 50
              </div>
            </div>
          </div>
          <div className="bank-btn-row">
            <span className="bank-btn bank-btn--outline">뒤로</span>
            <span
              className="bank-btn bank-btn--primary"
              data-guide-id="ping-send"
            >
              보내기
            </span>
          </div>
        </>
      ) : null}

      {state.confirmOpen ? (
        <div className="bank-dialog-backdrop">
          <div className="bank-dialog" data-guide-id="ping-confirm-dialog">
            <div className="bank-dialog-title">개별 핑 선물</div>
            <p className="bank-dialog-desc">
              {state.selectedUserName}님에게{" "}
              {state.pingAmount || String(TB_MOCK_TRANSFER_PING)}핑을
              선물합니다.
            </p>
            <div className="bank-dialog-actions">
              <span className="bank-btn bank-btn--outline">취소</span>
              <span
                className="bank-btn bank-btn--primary"
                data-guide-id="ping-confirm"
              >
                확인
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
