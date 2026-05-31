export type TBTab = "transactions" | "all";
export type TBTransferStep = "idle" | "select" | "review" | "confirm" | "result";

export type TBSceneState = {
  activeTab: TBTab;
  transferOpen: boolean;
  listHidden: boolean;
  transferStep: TBTransferStep;
  searchQuery: string;
  comboboxOpen: boolean;
  selectedUserName: string;
  pingAmount: string;
  pingMemo: string;
  confirmOpen: boolean;
  transferSuccess: boolean;
  presetPulse: boolean;
};

export const tbInitialState: TBSceneState = {
  activeTab: "transactions",
  transferOpen: false,
  listHidden: false,
  transferStep: "idle",
  searchQuery: "",
  comboboxOpen: false,
  selectedUserName: "",
  pingAmount: "",
  pingMemo: "",
  confirmOpen: false,
  transferSuccess: false,
  presetPulse: false,
};

export function tbTransferInitialState(): TBSceneState {
  return { ...tbInitialState, activeTab: "transactions" };
}
