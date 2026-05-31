import { FingerPrintIcon } from "../BankIcons";
import type { CBSceneState } from "./cb-types";
import {
  CB_MOCK_SENDER_NAME,
  CB_MOCK_TRANSFER_AMOUNT,
  CB_MOCK_TRANSFER_DATE_LABEL,
  CB_MOCK_TRANSFER_PREV_TX_HASH,
  CB_MOCK_TRANSFER_TX_HASH,
  formatMockAmount,
} from "./cb-mock-balances";

const MOCK_USERS = ["김철수", "이영희", "박민수"];

function CBTransferResultMock({ state }: { state: CBSceneState }) {
  const amountLabel =
    state.transferAmount || formatMockAmount(CB_MOCK_TRANSFER_AMOUNT);

  return (
    <div className="bank-receipt-section">
      <div
        className="bank-transfer-receipt"
        data-guide-id="transfer-result"
        role="status"
        aria-label="송금 완료"
      >
        <div className="bank-transfer-receipt-print-row">
          <span
            className="bank-btn bank-btn--outline bank-transfer-receipt-print"
            data-guide-id="receipt-btn"
          >
            영수증 인쇄
          </span>
        </div>
        <div className="bank-transfer-receipt-status">송금 완료</div>
        <dl className="bank-transfer-receipt-dl">
          <div className="bank-transfer-receipt-row">
            <dt>보낸 회원</dt>
            <dd className="bank-transfer-receipt-name">
              {CB_MOCK_SENDER_NAME}
            </dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>받은 회원</dt>
            <dd className="bank-transfer-receipt-name">
              {state.selectedUserName}
            </dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>금액</dt>
            <dd className="bank-transfer-receipt-name">{amountLabel} 잎</dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>날짜</dt>
            <dd>{CB_MOCK_TRANSFER_DATE_LABEL}</dd>
          </div>
          <div className="bank-transfer-receipt-row">
            <dt>메모</dt>
            <dd>{state.transferMemo.trim() ? state.transferMemo : "—"}</dd>
          </div>
        </dl>
        <div className="bank-transfer-receipt-hash">
          <FingerPrintIcon className="bank-transfer-receipt-fingerprint" />
          <p className="bank-transfer-receipt-hash-line">
            <span className="bank-transfer-receipt-hash-value">
              {CB_MOCK_TRANSFER_TX_HASH}
            </span>
          </p>
          <p className="bank-transfer-receipt-hash-line">
            <span className="bank-transfer-receipt-hash-value">
              {CB_MOCK_TRANSFER_PREV_TX_HASH}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function CBTransferMock({ state }: { state: CBSceneState }) {
  if (state.transferStep === "result" || state.transferSuccess) {
    return <CBTransferResultMock state={state} />;
  }

  if (!state.transferOpen) return null;

  return (
    <div className="bank-panel" data-guide-id="transfer-panel">
      <div className="bank-transfer-tabs">
        <span
          className="bank-transfer-tab is-active"
          data-guide-id="tab-single-transfer"
        >
          개별 송금
        </span>
        <span className="bank-transfer-tab">일괄 송금</span>
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
          <div className="bank-field">
            <div className="bank-preset-row">
              {["+1만", "+5만", "+10만"].map((label) => (
                <span key={label} className="bank-preset-btn">
                  {label}
                </span>
              ))}
            </div>
            <label className="bank-field-label">잎</label>
            <div
              className="bank-input-group"
              data-guide-id="transfer-amount-field"
            >
              <input
                className="bank-input is-typing"
                readOnly
                value={state.transferAmount}
                placeholder="금액 입력"
              />
              <div className="bank-input-addon">원</div>
            </div>
          </div>
          <div className="bank-field">
            <label className="bank-field-label" htmlFor="guide-transfer-memo">
              메모
            </label>
            <div
              className="bank-input-group bank-input-group--memo"
              data-guide-id="transfer-memo-field"
            >
              <input
                id="guide-transfer-memo"
                className={`bank-input ${state.transferMemo ? "is-typing" : ""}`}
                readOnly
                value={state.transferMemo}
                placeholder="잎 내용을 기록해보세요. 받는 회원에게도 표시됩니다."
              />
              <div className="bank-input-meta">
                {state.transferMemo.length} / 50
              </div>
            </div>
          </div>
          <div className="bank-btn-row">
            <span className="bank-btn bank-btn--outline">뒤로</span>
            <span
              className="bank-btn bank-btn--primary"
              data-guide-id="transfer-send"
            >
              보내기
            </span>
          </div>
        </>
      ) : null}

      {state.confirmOpen ? (
        <div className="bank-dialog-backdrop">
          <div className="bank-dialog" data-guide-id="transfer-confirm-dialog">
            <div className="bank-dialog-title">개별 송금</div>
            <p className="bank-dialog-desc">
              {state.selectedUserName}님에게 {state.transferAmount || "10,000"}{" "}
              잎을 보내시겠습니까?
            </p>
            <div className="bank-dialog-actions">
              <span className="bank-btn bank-btn--outline">취소</span>
              <span
                className="bank-btn bank-btn--primary"
                data-guide-id="transfer-confirm"
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
