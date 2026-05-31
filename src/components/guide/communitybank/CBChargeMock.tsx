import type { CBSceneState } from "./cb-types";
import { ChargeApplicationGuideTable } from "./ChargeApplicationGuideTable";
import { ChargeDepositInfoTable } from "./ChargeDepositInfoTable";
import {
  CB_MOCK_COMPLETED_CHARGE_AMOUNT,
  formatMockAmount,
} from "./cb-mock-balances";

const CHARGE_AMOUNT_LABEL = `${formatMockAmount(CB_MOCK_COMPLETED_CHARGE_AMOUNT)} 잎`;

const CHARGE_ROW_CONFIG = {
  pending: {
    guideId: "pending-charge-row",
    amount: CHARGE_AMOUNT_LABEL,
    badgeClass: "bank-badge--pending",
    status: "대기중",
    depositor: "홍길동",
  },
  expired: {
    guideId: "expired-charge-row",
    amount: CHARGE_AMOUNT_LABEL,
    badgeClass: "bank-badge--expired",
    status: "만료",
    depositor: "홍길동",
  },
  completed: {
    guideId: "completed-charge-row",
    amount: CHARGE_AMOUNT_LABEL,
    badgeClass: "bank-badge--done",
    status: "완료",
    depositor: "홍길동",
  },
} as const;

export function CBChargeFormMock({ state }: { state: CBSceneState }) {
  if (!state.chargeOpen) return null;

  if (state.chargeSuccess) {
    return (
      <div className="bank-panel">
        <div className="bank-panel-title">충전 신청</div>
        <div className="bank-alert bank-alert--success" data-guide-id="charge-success">
          신청이 완료되었습니다
        </div>
      </div>
    );
  }

  return (
    <div className="bank-panel" data-guide-id="charge-panel">
      <div className="bank-panel-title">충전 신청</div>
      <div className="bank-field">
        <div className="bank-preset-row">
          {["+1만", "+5만", "+10만"].map((label) => (
            <span
              key={label}
              data-guide-id={label === "+5만" ? "charge-preset-5man" : undefined}
              className={`bank-preset-btn ${state.presetPulse && label === "+5만" ? "is-pulse" : ""}`}
            >
              {label}
            </span>
          ))}
        </div>
        <label className="bank-field-label" htmlFor="guide-charge-amount">
          신청금액
        </label>
        <div className="bank-input-group" data-guide-id="charge-amount-field">
          <input
            id="guide-charge-amount"
            className={`bank-input ${state.chargeAmount ? "is-typing" : ""}`}
            readOnly
            value={state.chargeAmount}
            placeholder="10,000원 단위로 입력"
          />
          <div className="bank-input-addon">
            {state.chargeAmount ? "오만 원" : "0 원"}
          </div>
        </div>
      </div>
      <div className="bank-field">
        <label className="bank-field-label" htmlFor="guide-charge-depositor">
          입금자명
        </label>
        <div className="bank-input-group bank-input-group--overlay-target">
          <input
            id="guide-charge-depositor"
            className={`bank-input ${state.chargeDepositor ? "is-typing" : ""}`}
            readOnly
            value={state.chargeDepositor}
            placeholder="입금자명 입력"
          />
          {state.chargeDepositor ? (
            <span
              data-guide-id="charge-depositor-field"
              className="bank-guide-text-highlight-target"
              aria-hidden
            >
              {state.chargeDepositor}
            </span>
          ) : null}
        </div>
      </div>
      <div className="bank-info-box" data-guide-id="charge-info-box">
        <ChargeApplicationGuideTable showTitle />
      </div>
      <div className="bank-btn-row">
        <span className="bank-btn bank-btn--outline">취소</span>
        <span className="bank-btn bank-btn--primary" data-guide-id="charge-submit">
          신청
        </span>
      </div>
    </div>
  );
}

export function CBChargesListMock({ state }: { state: CBSceneState }) {
  if (state.listHidden || state.activeTab !== "charges") return null;

  const rowKey = state.chargeListRow;
  const row = rowKey ? CHARGE_ROW_CONFIG[rowKey] : null;

  return (
    <div className="bank-list-section">
      <h2 className="bank-list-title">충전 내역</h2>
      {row ? (
        <>
          {rowKey === "pending" ? <ChargeDepositInfoTable /> : null}
          <table className="bank-table">
            <thead>
              <tr>
                <th>금액</th>
                <th>상태</th>
                <th>입금자명</th>
              </tr>
            </thead>
            <tbody>
              <tr data-guide-id={row.guideId}>
                <td>{row.amount}</td>
                <td>
                  <span className={`bank-badge ${row.badgeClass}`}>{row.status}</span>
                </td>
                <td>{row.depositor}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          충전 내역이 없습니다.
        </p>
      )}
    </div>
  );
}
