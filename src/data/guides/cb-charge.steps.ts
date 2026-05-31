import { CB_MOCK_COMPLETED_CHARGE_AMOUNT } from "@/components/guide/communitybank/cb-mock-balances";
import type { GuideStep } from "@/components/guide/types";
import type { CBSceneState } from "@/components/guide/communitybank/cb-types";
import { cbChargeInitialState } from "@/components/guide/communitybank/cb-types";
import { COMMUNITY_BANK_GUIDE } from "@/constants/communityBankGuide";

export const cbChargeSteps: GuideStep<CBSceneState>[] = [
  {
    id: "intro",
    title: COMMUNITY_BANK_GUIDE.screenTitle,
    caption: `${COMMUNITY_BANK_GUIDE.productName} 화면에서 현재 잔액(잎)을 확인하고, 「송금」·「충전」·「전체」 내역을 조회할 수 있습니다.`,
    durationMs: 2800,
    patch: cbChargeInitialState(),
  },
  {
    id: "click-charge",
    title: "충전 버튼 클릭",
    caption: "메뉴에서 「충전」 버튼을 누르면 충전 신청 폼이 열립니다.",
    durationMs: 2200,
    patch: { chargeOpen: true, listHidden: true, transferOpen: false },
    overlay: {
      highlightId: "charge-button",
      clickPulseId: "charge-button",
      showCursor: true,
    },
  },
  {
    id: "form-open",
    title: "충전 신청 폼",
    caption:
      "충전 신청 폼에서 「신청금액」과 「입금자명」의 안내 글을 확인합니다.",
    detailCaption: "charge-application-guide",
    durationMs: 2000,
    patch: { chargeOpen: true, listHidden: true },
    overlay: { highlightId: "charge-info-box", showCursor: false },
  },
  {
    id: "type-amount",
    title: "신청금액 입력",
    caption:
      "+1만·+5만·+10만 버튼으로 빠르게 추가하거나, 10,000원 단위로 직접 입력합니다.",
    durationMs: 2800,
    patch: {
      chargeOpen: true,
      listHidden: true,
      chargeAmount: "50,000",
      presetPulse: true,
    },
    overlay: {
      highlightId: "charge-preset-5man",
      clickPulseId: "charge-preset-5man",
      showCursor: true,
    },
  },
  {
    id: "type-depositor",
    title: "입금자명 입력",
    captionList: [
      "실제 입금 시 사용할 입금자명을 입력합니다.",
      "회원가입 시 입력한 프로필의 실명이 자동으로 채워집니다.",
      "프로필 설정에서 실명을 변경할 수 있습니다.",
      "최대 6자만 입력할 수 있습니다.",
    ],
    durationMs: 2400,
    patch: {
      chargeOpen: true,
      listHidden: true,
      chargeAmount: "50,000",
      chargeDepositor: "홍길동",
    },
    overlay: {
      highlightId: "charge-depositor-field",
      clickPulseId: "charge-depositor-field",
      showCursor: true,
      cursorAnchor: { x: 1.12, y: 0.5 },
    },
  },
  {
    id: "submit",
    title: "신청 버튼 클릭",
    caption: "「신청」을 누르면 완료됩니다.",
    durationMs: 2000,
    patch: {
      chargeOpen: true,
      listHidden: true,
      chargeAmount: "50,000",
      chargeDepositor: "홍길동",
    },
    overlay: {
      highlightId: "charge-submit",
      clickPulseId: "charge-submit",
      showCursor: true,
    },
  },
  {
    id: "success",
    title: "신청 완료",
    caption: "'신청이 완료되었습니다' 메시지가 표시됩니다.",
    durationMs: 2600,
    patch: {
      chargeOpen: true,
      listHidden: true,
      chargeAmount: "50,000",
      chargeDepositor: "홍길동",
      chargeSuccess: true,
    },
    overlay: { highlightId: "charge-success", showCursor: false },
  },
  {
    id: "tab-charges",
    title: "충전내역 탭으로 이동",
    captionList: [
      "신청 후 자동으로 「충전내역」 탭으로 전환되어 처리 상태를 확인할 수 있습니다.",
      "신청 금액과 입금자명 항목이 「대기중」으로 표시됩니다.",
    ],
    durationMs: 2200,
    patch: {
      chargeOpen: false,
      listHidden: false,
      activeTab: "charges",
      chargeSuccess: false,
      chargeListRow: "pending",
    },
    overlay: {
      highlightId: "tab-charges",
      clickPulseId: "tab-charges",
      showCursor: true,
    },
  },
  {
    id: "deposit-info",
    title: "입금 안내",
    captionList: [
      "은행명·계좌번호·예금주 정보를 확인합니다.",
      "위 계좌로 신청 금액을 입금하세요.",
      "입금자명은 신청 시 입력한 이름과 동일해야 합니다.",
    ],
    durationMs: 3200,
    patch: {
      chargeOpen: false,
      activeTab: "charges",
      chargeListRow: "pending",
    },
    overlay: { highlightId: "deposit-info", showCursor: false },
  },
  {
    id: "pending-row",
    title: "대기중 내역",
    captionList: ["입금 확인 전까지 「대기중」 상태로 표시됩니다."],
    durationMs: 3500,
    patch: {
      chargeOpen: false,
      activeTab: "charges",
      chargeListRow: "pending",
    },
    overlay: { highlightId: "pending-charge-row", showCursor: false },
  },
  {
    id: "expired-row",
    title: "만료 내역",
    captionList: [
      "충전 신청 후 1시간 내 입금해야 합니다. 1시간 경과 시 만료됩니다.",
      "만료 시 다시 신청을 하면 만료된 신청 내역은 자동 삭제됩니다.",
      "언제든지 다시 충전 신청을 할 수 있습니다.",
    ],
    durationMs: 3500,
    patch: {
      chargeOpen: false,
      activeTab: "charges",
      chargeListRow: "expired",
    },
    overlay: { highlightId: "expired-charge-row", showCursor: false },
  },
  {
    id: "completed-row",
    title: "완료 내역",
    captionList: [
      "입금 확인 후 「완료」 상태로 표시됩니다.",
      "충전된 금액이 잔액에 반영됩니다.",
    ],
    durationMs: 3500,
    patch: {
      chargeOpen: false,
      activeTab: "charges",
      chargeListRow: "completed",
      chargeBalanceCredit: CB_MOCK_COMPLETED_CHARGE_AMOUNT,
    },
    overlay: { highlightId: "completed-charge-row", showCursor: false },
  },
];
