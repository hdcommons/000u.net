import type { TBSceneState } from "./tb-types";
import { TBHeaderMock, TBToolbarMock } from "./TBHeaderMock";
import { TBTransactionsListMock } from "./TBTransactionsListMock";
import { TBTransferMock } from "./TBTransferMock";

export function TimebankMock({ state }: { state: TBSceneState }) {
  const showList =
    !state.listHidden &&
    !state.transferOpen &&
    state.activeTab === "transactions" &&
    !state.transferSuccess;

  return (
    <div className="guide-tb-root">
      <TBHeaderMock state={state} />
      <TBToolbarMock state={state} />
      <TBTransferMock state={state} />
      {showList ? <TBTransactionsListMock /> : null}
    </div>
  );
}
