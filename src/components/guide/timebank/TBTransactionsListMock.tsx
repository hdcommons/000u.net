type MockPingPongTransaction = {
  id: string;
  otherUserName: string;
  otherUserInitial: string;
  userType?: "group" | "business";
  isSent: boolean;
  amount: number;
  dateLabel: string;
  memo?: string;
};

/** build-vite TransactionItem과 동일한 4건 샘플 — 헤더 보낸 120핑·받은 85퐁과 합계 일치 (최신순) */
const MOCK_PING_PONG_TRANSACTIONS: MockPingPongTransaction[] = [
  {
    id: "tb-tx-1",
    otherUserName: "이영희",
    otherUserInitial: "이",
    isSent: false,
    amount: 30,
    dateLabel: "2026.05.30. 오후 3:42",
    memo: "동네 정원 가꾸기",
  },
  {
    id: "tb-tx-2",
    otherUserName: "김철수",
    otherUserInitial: "김",
    isSent: true,
    amount: 45,
    dateLabel: "2026.05.28. 오전 10:15",
    memo: "이사 도움",
  },
  {
    id: "tb-tx-3",
    otherUserName: "마을협동조합",
    otherUserInitial: "마",
    userType: "group",
    isSent: true,
    amount: 75,
    dateLabel: "2026.05.25. 오후 2:00",
    memo: "운영회의 참석",
  },
  {
    id: "tb-tx-4",
    otherUserName: "박민수",
    otherUserInitial: "박",
    isSent: false,
    amount: 55,
    dateLabel: "2026.05.18. 오후 6:20",
  },
];

export function TBTransactionsListMock() {
  return (
    <div className="bank-list-section" data-guide-id="transactions-list">
      <h2 className="bank-list-title">핑퐁내역</h2>
      <div className="bank-tx-list">
        {MOCK_PING_PONG_TRANSACTIONS.map((tx) => {
          const unit = tx.isSent ? "핑" : "퐁";

          return (
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
                      {tx.amount.toLocaleString("ko-KR")}
                      {unit}
                    </span>
                  </div>
                </div>
                {tx.memo ? <div className="bank-tx-memo">{tx.memo}</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
