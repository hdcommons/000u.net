import { CB_MOCK_COMPLETED_CHARGE_AMOUNT } from "./cb-mock-balances";

export type CBTab = "transactions" | "charges" | "all";
export type CBTransferStep = "idle" | "select" | "review" | "confirm" | "result";

export type CBSceneState = {
  activeTab: CBTab;
  transferOpen: boolean;
  chargeOpen: boolean;
  listHidden: boolean;
  chargeAmount: string;
  chargeDepositor: string;
  chargeSuccess: boolean;
  /** 충전내역 탭 mock 행 — null이면 목록 없음 */
  chargeListRow: "pending" | "expired" | "completed" | null;
  transferStep: CBTransferStep;
  searchQuery: string;
  comboboxOpen: boolean;
  selectedUserName: string;
  transferAmount: string;
  transferMemo: string;
  confirmOpen: boolean;
  transferSuccess: boolean;
  presetPulse: boolean;
  /** 충전 완료 반영액 — 현재 잔액에 가산 (Step 12 등) */
  chargeBalanceCredit: number;
};

export const cbInitialState: CBSceneState = {
  activeTab: "transactions",
  transferOpen: false,
  chargeOpen: false,
  listHidden: false,
  chargeAmount: "",
  chargeDepositor: "",
  chargeSuccess: false,
  chargeListRow: null,
  transferStep: "idle",
  searchQuery: "",
  comboboxOpen: false,
  selectedUserName: "",
  transferAmount: "",
  transferMemo: "",
  confirmOpen: false,
  transferSuccess: false,
  presetPulse: false,
  chargeBalanceCredit: 0,
};

export function cbTransferInitialState(): CBSceneState {
  return {
    ...cbInitialState,
    activeTab: "transactions",
    /** 충전 가이드 완료(5만 잎) 후 송금 시나리오 시작 */
    chargeBalanceCredit: CB_MOCK_COMPLETED_CHARGE_AMOUNT,
  };
}

export function cbChargeInitialState(): CBSceneState {
  return {
    ...cbInitialState,
    activeTab: "transactions",
  };
}
