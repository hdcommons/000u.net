/** 송금 mock 기준 — CBTransactionsListMock·헤더와 동기화 */
export const CB_MOCK_BASE_BALANCE = 120_000;
export const CB_MOCK_TOTAL_SENT = 30_000;
export const CB_MOCK_TOTAL_RECEIVED = 20_000;
export const CB_MOCK_COMPLETED_CHARGE_AMOUNT = 50_000;
export const CB_MOCK_TRANSFER_AMOUNT = 10_000;
export const CB_MOCK_SENDER_NAME = "홍길동";
export const CB_MOCK_TRANSFER_TX_HASH = "K7mN2pQx9L";
export const CB_MOCK_TRANSFER_PREV_TX_HASH = "aB3x9Hm2Qp";
export const CB_MOCK_TRANSFER_DATE_LABEL = "2026년 5월 31일 오후 2:30";

export function formatMockAmount(n: number) {
  return n.toLocaleString("ko-KR");
}
