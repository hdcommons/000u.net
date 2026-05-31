export const brandColors = {
  red: "#df6767",
  yellow: "#fed867",
  gold: "#b8860b",
  green: "#6ba750",
  blue: "#6e9dea",
  purple: "#b87fd4",
  teal: "#5eb8a8",
} as const;

/** 2페이지(소개) — 일반 사용자 대상 특장점 요약 */
export const programHighlights = [
  {
    value: "웹·앱",
    sub: "누구나 어디서나 접근 가능",
    color: brandColors.blue,
    platforms: true,
  },
  {
    value: "공유",
    sub: "예약 시스템과 알림 서비스",
    subDetail: "정보, 공간, 물품, 활력",
    color: brandColors.red,
  },
  {
    value: "화폐",
    sub: "해시체인으로 검증되는 지역화폐",
    color: brandColors.green,
  },
  {
    value: "지도",
    sub: "위치 기반 장소 연결",
    color: brandColors.yellow,
  },
] as const;

export const programIntro = {
  label: "000u 소개",
  body: "공공공유는 정보·공간·물품·활력을 공유하고, 지역화폐·시간선물을 주고받으며, 위치 기반 서비스로 웹과 스마트폰 앱 하나로 이어 줍니다.",
  bodyDetail: "개인·단체·사업자 모두 참여할 수 있습니다.",
} as const;

/** 3페이지 — 공공공유 웹 */
export const webIntro = {
  label: "공공공유 웹",
  title: "웹 커뮤니티 플랫폼",
  body: "게시·일정·공유·예약·알림까지 필요한 업무를 브라우저에서 편리하게 진행할 수 있습니다. 별도 설치 없이 접속만으로 참여와 관리를 시작할 수 있습니다.",
  highlights: [
    "지역화폐·시간선물·DM 일괄 대량 발송과 수신자 명단 관리",
    "푸시·문자·앱 알림 등 상황에 맞는 알림 채널 지원",
    "개인·단체·사업자 회원 유형별 프로필 및 운영 권한",
  ],
} as const;

/** 4페이지 — 홍동공유 앱 */
export const appIntro = {
  label: "홍동공유 앱",
  title: "모바일 앱",
  subtitle: "iOS · Android · 위치 기반 맞춤 서비스",
  body: "일정 확인, 공유 예약, 지역화폐·시간선물 이용, 주변 장소 탐색을 스마트폰에서 편리하게 이어갈 수 있습니다.",
  highlights: [
    "홈·소식·공유·지도·설정 — 하단 탭 기반의 직관적인 화면 구성",
    "위치 기반 추천 — 주변 단체·장소·콘텐츠를 거리순으로 제공",
    "대상 맞춤 알림 — 송금, 예약, DM, 멘션 알림을 휴대폰으로 전달",
    "실시간 데이터 동기화 — 웹과 동일한 정보를 앱에서 즉시 확인",
  ],
} as const;

export const featuresIntro = {
  label: "핵심 기능",
  title: "커뮤니티 운영 기능",
  subtitle:
    "정보 공유부터 화폐·시간·알림까지, 웹과 앱에서 동일하게 제공되는 통합 서비스",
} as const;

export const webFeatures = [
  {
    title: "소식",
    description:
      "게시 기반으로 정보를 공유합니다. 일정&달력으로 이벤트를 관리하고, @·@@ 멘션으로 회원·장소를 연결하고 관련 알림을 자동 전달합니다.",
    accent: brandColors.red,
  },
  {
    title: "공유·예약",
    description:
      "정보·공간·물품·활력을 등록·예약하고, 신청·승인·알림까지 한 흐름으로 관리합니다.",
    accent: brandColors.yellow,
  },
  {
    title: "지역화폐",
    description:
      "충전·개별 송금·명단 기반 일괄 지급과 거래내역 조회를 통합 제공합니다.",
    accent: brandColors.green,
  },
  {
    title: "시간선물",
    description:
      "공동체의 시간을 기록·선물하는 크레딧입니다. 사회적 회계를 위한 명단 기반 일괄 송금을 제공합니다.",
    accent: brandColors.blue,
  },
  {
    title: "일정·지도",
    description:
      "행사·모임 일정을 달력으로 운영하고, 등록 장소를 지도에서 탐색·연결합니다.",
    accent: brandColors.purple,
  },
  {
    title: "알림·메시지",
    description:
      "푸시·SMS·인앱 알림과 1:1·일괄 메시지로 참여·거래·예약 소식을 상황에 맞게 전달합니다.",
    accent: brandColors.teal,
  },
] as const;

export const appHighlights = appIntro.highlights;

/** 6페이지 — 명단 기반 일괄 전송 */
export const bulkIntro = {
  label: "일괄 전송",
  title: "명단 기반 대량 처리",
  subtitle:
    "수신자 명단을 구성·저장하고, 지역화폐·시간선물·메시지를 한 번에 발송합니다",
  flowSteps: ["대상 회원 검색", "수신자 명단 구성", "일괄 발송 실행"],
  recipientSectionTitle: "명단 관리",
} as const;

export const bulkOperations = [
  {
    code: "지역화폐",
    title: "지역화폐",
    subtitle: "지역화폐 일괄 지급",
    description:
      "물품 구입·서비스 제공 대상에게 지역화폐를 명단 기반 일괄 지급합니다.",
    accent: brandColors.green,
    points: ["개별·일괄 송금", "명단 연동·재사용", "해시체인"],
  },
  {
    code: "시간선물",
    title: "시간선물",
    subtitle: "시간 크레딧 일괄 지급",
    description:
      "봉사 활동, 프로그램 참여 보상 등에 활용합니다. 명단 기반 일괄 송금을 제공합니다.",
    accent: brandColors.blue,
    points: ["개별·일괄 선물", "명단 연동·재사용", "사회적 회계"],
  },
  {
    code: "메시지",
    title: "메시지",
    subtitle: "공지·안내 일괄 발송",
    description:
      "행사 소식, 안내, 운영 공지 등을 대상 회원에게 전달합니다. 회원 간 1:1 대화를 나눌 수 있습니다.",
    accent: brandColors.red,
    points: ["명단 기반 일괄 발송", "읽음·알림 연동", "1:1 대화"],
  },
] as const;

export const recipientGroupBenefits = [
  "통합 수신자 명단 — 지역화폐·시간선물·메시지 발송에 공통 활용",
  "회원 검색·추가 — 반복 대상을 빠르게 선정하고 명단을 유지·관리",
  "발송 전 검증 — 명단 기반으로 대량 처리의 오류·누락을 최소화",
] as const;

export const notificationChannels = [
  {
    title: "푸시 알림",
    abbr: "Push",
    description:
      "앱 푸시 알림으로 댓글·멘션·DM·지역화폐·시간선물 거래를 즉시 전달. 앱 밖에서도 놓치지 않습니다.",
    accent: brandColors.blue,
  },
  {
    title: "SMS",
    abbr: "SMS",
    description:
      "인증·예약·중요 안내를 문자로 발송. 로그인·비밀번호 변경·예약 알림 등 신뢰 채널.",
    accent: brandColors.gold,
  },
  {
    title: "인앱 알림",
    abbr: "In-app",
    description:
      "알림함에서 읽음·미읽음을 관리하고, DM 읽음과 연동해 배지·카운트를 동기화합니다.",
    accent: brandColors.green,
  },
] as const;

export const notificationBenefits = [
  "이벤트별 구독 — 멘션·댓글·DM·지역화폐·시간선물 등 알림 유형을 세분화",
  "읽음 처리 연동 — DM 스레드 열람 시 관련 알림도 함께 정리",
  "웹·앱 동일 정책 — 통합 알림 서비스로 일관된 경험 제공",
] as const;

export const editorIntro = {
  subtitle: "통합 편집 환경 — 작성·저장·표시가 웹과 앱에서 일관됩니다",
} as const;

export const editorBenefits = [
  {
    title: "웹표준 리치 텍스트 에디터",
    description:
      "시각 편집 방식으로 작성하고, 시맨틱 HTML로 저장해 접근성·검색·앱 본문 표시에 뛰어난 타이포그라피를 제공합니다.",
    accent: brandColors.blue,
  },
  {
    title: "마크다운 지원",
    description:
      "익숙한 `#`, `**`, 리스트 문법을 그대로 쓰고, 저장 시 구조화된 콘텐츠로 제공합니다.",
    accent: brandColors.green,
  },
  {
    title: "웹·앱 동일 본문",
    description:
      "작성한 글이 웹·앱·알림 미리보기에서 같은 규칙으로 표시됩니다.",
    accent: brandColors.red,
  },
] as const;

export const editorHighlights = [
  "표·인용·코드·임베드·하이라이트 등 풍부한 서식",
  "이미지 업로드·대표 이미지 — 통합 데이터 연동",
  "통일된 본문 스타일 — 앱·웹에서 동일한 가독성",
] as const;

export const mentionFeatures = [
  {
    type: "user" as const,
    trigger: "@",
    title: "사용자 멘션",
    description:
      "글·댓글에서 `@`로 회원을 지정하면 알림이 가고, 프로필로 바로 연결됩니다.",
    example: "@홍길동",
    accent: brandColors.blue,
  },
  {
    type: "place" as const,
    trigger: "@@",
    title: "장소 멘션",
    description:
      "`@@`로 등록된 장소를 검색·선택해 본문에 연결하고, 장소·지도 페이지로 이동합니다.",
    example: "@@마을활력소",
    accent: brandColors.green,
  },
] as const;

export const mentionBenefits = [
  "본문·댓글 모두 지원 — 글타래 속에서도 멘션 가능",
  "저장 후 클릭 가능한 링크 — 프로필·장소·지도로 자연스럽게 이동",
  "멘션 알림 자동 발송 — 구독 설정에 따라 즉시 전달",
] as const;

export const memberTypes = [
  {
    type: "individual",
    label: "개인 회원",
    description: "주민·일반 회원. 실명 기반 프로필, 주소는 비공개로 관리.",
    accent: brandColors.blue,
    fields: ["실명", "표시 이름", "휴대폰"],
  },
  {
    type: "group",
    label: "단체 회원",
    description:
      "공동체 단체·협회·비영리 조직, 비공개 모임 등 공식 명·주소·업무 연락처를 공개 프로필로 운영.",
    accent: brandColors.green,
    fields: ["단체 공식 명", "주소", "업무 전화"],
  },
  {
    type: "business",
    label: "사업자 회원",
    description: "지역 상점·업체. 사업장 정보와 위치를 노출해 주민과 연결.",
    accent: brandColors.yellow,
    fields: ["사업자명", "주소·좌표", "업무 전화"],
  },
] as const;

export const memberBenefits = [
  "동일 휴대폰·다중 계정 — 로그인 시 개인·단체·사업자 중 선택",
  "유형별 프로필 필드·공개 범위 — 역할에 맞는 정보 구조",
  "단체·사업자 목록·지도 — 위치 기반 탐색과 송금·멘션 대상 구분",
] as const;

export const locationBenefits = [
  {
    title: "주변 단체·사업자",
    description: "현재 위치 기준 가까운 순으로 단체·사업자 목록을 제공합니다.",
    accent: brandColors.green,
  },
  {
    title: "지도·장소 탐색",
    description: "등록된 장소와 지도 탭에서 동네 시설·모임 장소를 찾습니다.",
    accent: brandColors.blue,
  },
  {
    title: "맞춤형 콘텐츠",
    description: "위치 정보와 연동된 검색·목록으로 지역 연관성을 높입니다.",
    accent: brandColors.red,
  },
] as const;

export const locationAppPoints = [
  "스마트폰 위치 정보 — 앱 사용 중 위치 권한으로 서비스 제공",
  "거리순 정렬 — 현재 위치 기준 가까운 단체·장소 우선 표시",
  "웹·앱 데이터 통합 — 브라우저와 앱이 같은 장소·회원 정보 공유",
] as const;

export const platformArchitecture = {
  body: "웹 플랫폼과 모바일 앱이 통합 API를 통해 동일한 데이터와 기능을 제공합니다. 명단·알림·멘션·회원 유형까지 한 곳에서 일관되게 처리합니다.",
  diagram: [
    { label: "모바일 앱", color: brandColors.blue },
    { label: "웹 플랫폼", color: brandColors.green },
    { label: "통합 API", color: brandColors.red },
    { label: "운영 백엔드", color: brandColors.gold },
  ],
} as const;

export const techStack = [
  {
    layer: "웹",
    items: ["반응형 웹 인터페이스", "통합 콘텐츠", "검색·접근성 최적화"],
  },
  {
    layer: "모바일",
    items: [
      "iOS·Android 리액트 네이티브 앱",
      "위치·푸시·본문 연동",
      "웹·앱 실시간 동기화",
    ],
  },
  {
    layer: "플랫폼",
    items: ["통합 API", "인증·알림·메시징", "회원·명단·확장 모듈"],
  },
] as const;

export const slides = [
  { id: "hero", label: "시작" },
  { id: "vision", label: "소개" },
  { id: "web", label: "웹" },
  { id: "app", label: "앱" },
  { id: "features", label: "기능" },
  { id: "bulk", label: "일괄" },
  { id: "notify", label: "알림" },
  { id: "editor", label: "에디터" },
  { id: "mention", label: "멘션" },
  { id: "members", label: "회원" },
  { id: "location", label: "위치" },
  { id: "tech", label: "기술" },
  { id: "cta", label: "방문" },
] as const;
