import {
  CB_MOCK_BASE_BALANCE,
  formatMockAmount,
} from "./cb-mock-balances";

type MockTransaction = {
  id: string;
  otherUserName: string;
  otherUserInitial: string;
  userType?: "group" | "business";
  isSent: boolean;
  amount: number;
  balance: number;
  dateLabel: string;
  memo?: string;
};

/** build-vite TransactionItem과 동일한 4건 샘플 (최신순) */
const MOCK_TRANSACTIONS: MockTransaction[] = [
  {
    id: "tx-1",
    otherUserName: "이영희",
    otherUserInitial: "이",
    isSent: false,
    amount: 20_000,
    balance: CB_MOCK_BASE_BALANCE,
    dateLabel: "2026.05.30. 오후 3:42",
    memo: "공동구매 정산",
  },
  {
    id: "tx-2",
    otherUserName: "김철수",
    otherUserInitial: "김",
    isSent: true,
    amount: 10_000,
    balance: 100_000,
    dateLabel: "2026.05.28. 오전 10:15",
    memo: "월 회비",
  },
  {
    id: "tx-3",
    otherUserName: "마을협동조합",
    otherUserInitial: "마",
    userType: "group",
    isSent: true,
    amount: 15_000,
    balance: 110_000,
    dateLabel: "2026.05.25. 오후 2:00",
    memo: "후원금",
  },
  {
    id: "tx-4",
    otherUserName: "로컬푸드",
    otherUserInitial: "로",
    userType: "business",
    isSent: true,
    amount: 5_000,
    balance: 125_000,
    dateLabel: "2026.05.18. 오후 6:20",
  },
];

export function CBTransactionsListMock() {
  return (
    <div className="bank-list-section" data-guide-id="transactions-list">
      <h2 className="bank-list-title">송금 내역</h2>
      <div className="bank-tx-list">
        {MOCK_TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="bank-tx-item">
            <div className="bank-avatar bank-avatar--sm">{tx.otherUserInitial}</div>
            <div className="bank-tx-body">
              <div className="bank-tx-top">
                <div className="bank-tx-meta">
                  <div className="bank-tx-name-row">
                    <span className="bank-tx-name">{tx.otherUserName}</span>
                    {tx.userType === "group" ? (
                      <span className="bank-tx-type-badge">단체</span>
                    ) : null}
                    {tx.userType === "business" ? (
                      <span className="bank-tx-type-badge">사업자</span>
                    ) : null}
                  </div>
                  <span className="bank-tx-date">{tx.dateLabel}</span>
                </div>
                <div className="bank-tx-amount-col">
                  <span
                    className={`bank-tx-amount ${tx.isSent ? "is-sent" : "is-received"}`}
                  >
                    {tx.isSent ? "-" : "+"}
                    {formatMockAmount(tx.amount)}
                  </span>
                  <span className="bank-tx-balance">
                    잔액 {formatMockAmount(tx.balance)}
                  </span>
                </div>
              </div>
              {tx.memo ? <div className="bank-tx-memo">{tx.memo}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
