import type { CBSceneState } from "./cb-types";
import { CBChargeFormMock, CBChargesListMock } from "./CBChargeMock";
import { CBHeaderMock, CBToolbarMock } from "./CBHeaderMock";
import { CBTransferMock } from "./CBTransferMock";
import { CBTransactionsListMock } from "./CBTransactionsListMock";

export function CommunityBankMock({ state }: { state: CBSceneState }) {
  const showList =
    !state.listHidden &&
    !state.chargeOpen &&
    !state.transferOpen &&
    state.activeTab === "transactions" &&
    !state.transferSuccess;

  return (
    <div className="guide-cb-root">
      <CBHeaderMock state={state} />
      <CBToolbarMock state={state} />
      <CBChargeFormMock state={state} />
      <CBTransferMock state={state} />
      <CBChargesListMock state={state} />
      {showList ? <CBTransactionsListMock /> : null}
    </div>
  );
}
