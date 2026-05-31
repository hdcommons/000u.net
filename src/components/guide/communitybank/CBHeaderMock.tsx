import type { CBSceneState, CBTab } from "./cb-types";
import { BankMockUserAvatar } from "../BankMockUserAvatar";
import { CBChargeIcon, CBTransferIcon, ViewIcon } from "../BankIcons";
import {
  CB_MOCK_BASE_BALANCE,
  CB_MOCK_TOTAL_RECEIVED,
  CB_MOCK_TOTAL_SENT,
  CB_MOCK_TRANSFER_AMOUNT,
  formatMockAmount,
} from "./cb-mock-balances";

const TABS: { id: CBTab; label: string }[] = [
  { id: "transactions", label: "송금내역" },
  { id: "charges", label: "충전내역" },
  { id: "all", label: "전체조회" },
];

export function CBHeaderMock({ state }: { state: CBSceneState }) {
  const transferDebit = state.transferSuccess ? CB_MOCK_TRANSFER_AMOUNT : 0;
  const currentBalance =
    CB_MOCK_BASE_BALANCE + state.chargeBalanceCredit - transferDebit;
  const totalSent = CB_MOCK_TOTAL_SENT + transferDebit;

  return (
    <header className="bank-header">
      <div className="bank-header-row">
        <div className="bank-header-user">
          <BankMockUserAvatar />
          <span className="bank-header-name">홍길동</span>
        </div>
        <div className="bank-balance-block">
          <div className="bank-balance-label">현재 잔액</div>
          <div className="bank-balance-value" data-guide-id="cb-balance">
            {formatMockAmount(currentBalance)}{" "}
            <span style={{ fontSize: "0.875rem" }}>잎</span>
          </div>
        </div>
      </div>
      <div className="bank-stats-row">
        <span>보낸 총금액 {formatMockAmount(totalSent)} 잎</span>
        <span>받은 총금액 {formatMockAmount(CB_MOCK_TOTAL_RECEIVED)} 잎</span>
      </div>
    </header>
  );
}

export function CBToolbarMock({ state }: { state: CBSceneState }) {
  const formOpen = state.transferOpen || state.chargeOpen;

  return (
    <div className="bank-toolbar">
      <div className="bank-toolbar-actions">
        <button
          type="button"
          data-guide-id="transfer-button"
          data-accordion-open={state.transferOpen ? "true" : "false"}
          className={`bank-toolbar-action ${state.transferOpen ? "is-active" : ""}`}
        >
          <CBTransferIcon />
          <span>송금</span>
        </button>
        <button
          type="button"
          data-guide-id="charge-button"
          data-accordion-open={state.chargeOpen ? "true" : "false"}
          className={`bank-toolbar-action ${state.chargeOpen ? "is-active" : ""}`}
        >
          <CBChargeIcon />
          <span>충전</span>
        </button>
      </div>
      <div className={`bank-toolbar-tabs ${formOpen ? "is-disabled" : ""}`}>
        <span style={{ opacity: 0.3, padding: "0 0.5rem" }} aria-hidden>
          <ViewIcon />
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
