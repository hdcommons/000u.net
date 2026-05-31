/** 개별 핑 mock 기준 — TBHeaderMock·영수증과 동기화 */
export const TB_MOCK_BASE_SENT_PING = 120;
export const TB_MOCK_BASE_RECEIVED_PONG = 85;
export const TB_MOCK_TRANSFER_PING = 60;
export const TB_MOCK_SENDER_NAME = "홍길동";
export const TB_MOCK_TRANSFER_TRANSACTION_ID = "8402";
export const TB_MOCK_TRANSFER_DATE_LABEL = "2026년 5월 31일 오후 2:30";

const METRIC_LOOKUP = [
  { value: 1e12, symbol: "T" },
  { value: 1e9, symbol: "B" },
  { value: 1e6, symbol: "M" },
  { value: 1e3, symbol: "k" },
] as const;

/** build-vite metricPrefixNumber — 1000 미만이면 null */
export function metricPrefixNumber(number: number, digits = 0): string | null {
  if (!Number.isFinite(number) || number < 1000) return null;

  let item: (typeof METRIC_LOOKUP)[number] | null = null;
  for (let i = METRIC_LOOKUP.length - 1; i >= 0; i--) {
    if (number >= METRIC_LOOKUP[i].value) {
      item = METRIC_LOOKUP[i];
      break;
    }
  }
  if (item === null) return null;

  const divided = number / item.value;
  let result =
    digits === 0 ? String(Math.round(divided)) : divided.toFixed(digits);
  result = result.replace(/\.?0+$/, "");
  return result + item.symbol;
}

/** build-vite formatMinutesToTimeLabel */
export function formatMinutesToTimeLabel(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}시간`);
  if (minutes > 0) parts.push(`${minutes}분`);
  if (parts.length === 0) return "0분";
  return parts.join(" ");
}

export function formatCompactMinutesAmount(
  minutes: number,
  digits = 1,
): string {
  return metricPrefixNumber(minutes, digits) ?? minutes.toLocaleString("ko-KR");
}

export function formatSignedNetAmount(minutes: number, digits = 1): string {
  const sign = minutes < 0 ? "-" : "";
  const abs = Math.abs(minutes);
  return (
    sign + (metricPrefixNumber(abs, digits) ?? abs.toLocaleString("ko-KR"))
  );
}

export function formatSignedNetMinutesLabel(minutes: number): string {
  if (minutes === 0) return formatMinutesToTimeLabel(0);
  const sign = minutes < 0 ? "-" : "";
  return sign + formatMinutesToTimeLabel(Math.abs(minutes));
}

export function formatPingPongTotalDisplay(minutes: number): string {
  return `${formatCompactMinutesAmount(minutes)} (${formatMinutesToTimeLabel(minutes)})`;
}

/** @deprecated formatMinutesToTimeLabel 사용 */
export function formatMockMinutesLabel(totalMinutes: number): string {
  return formatMinutesToTimeLabel(totalMinutes);
}
