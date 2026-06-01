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
  body: "게시·일정·공유·예약·알림까지 브라우저에서 편리하게 이용할 수 있습니다. 별도 설치 없이 접속만으로 참여와 관리를 시작할 수 있습니다.",
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
    "핵심 화면 하단 탭 — 소식·공유·지도 등 주요 기능을 짧은 동선으로 연결",
    "위치 기반 추천 — 주변 단체·장소·콘텐츠를 거리순으로 제공",
    "대상 맞춤 알림 — 송금, 예약, DM, 멘션 알림을 휴대폰으로 전달",
  ],
} as const;

export const featuresIntro = {
  label: "Platform",
  title: "플랫폼 운영 기능",
  subtitle:
    "도메인 모듈이 통합 API·공통 인증·일관된 데이터 모델 위에서 웹과 앱에 동일하게 노출되도록 설계된 기능 계층",
} as const;

export const webFeatures = [
  {
    title: "Auth",
    description:
      "로그인·세션 관리, 회원 유형별 권한, 단일 휴대폰 다중 계정 전환을 API 게이트웨이에서 일관 검증합니다.",
    accent: brandColors.yellow,
  },
  {
    title: "Content",
    description:
      "콘텐츠 타입·커스텀 필드로 도메인 모델을 정의하고, 리치 텍스트·미디어·일정 메타를 통합 API로 노출합니다. 웹과 앱이 동일 데이터·본문 표시 규칙을 공유합니다.",
    accent: brandColors.red,
  },
  {
    title: "Events",
    description:
      "멘션·예약·송금 등 도메인 이벤트를 알림·SMS·푸시 채널로 라우팅합니다. 구독 정책·읽음 상태를 웹·앱에서 동일하게 동기화합니다.",
    accent: brandColors.teal,
  },
  {
    title: "Geo",
    description:
      "장소·좌표·거리 정렬을 공통 Geo 레이어로 제공합니다. 목록·지도·검색이 같은 장소 데이터를 공유해 웹·앱에서 동일한 위치 정보를 보여 줍니다.",
    accent: brandColors.purple,
  },
  {
    title: "GraphQL",
    description:
      "단일 스키마에서 조회·변경 요청을 제공하고, 웹·앱 클라이언트가 동일 계약으로 데이터를 주고받습니다.",
    accent: brandColors.green,
  },
  {
    title: "Ledger",
    description:
      "송금·지급·잔액 변경을 원장 모듈로 분리하고, 멱등 트랜잭션·감사 로그·정합성 검증으로 대량·개별 처리를 모두 수용합니다.",
    accent: brandColors.blue,
  },
] as const;

export const appHighlights = appIntro.highlights;

/** 6페이지 — 명단 기반 일괄 전송 (개발·아키텍처) */
export const bulkIntro = {
  label: "일괄 전송",
  title: "명단 기반 대량 처리",
  subtitle:
    "수신자 명단을 발송 유형과 분리한 공통 리소스로 두고, 검증·배치 실행·결과 추적 파이프라인으로 대량 트랜잭션을 처리합니다",
  flowSteps: ["수신자 해석", "사전 검증", "배치 커밋"],
  recipientSectionTitle: "명단 관리 아키텍처",
} as const;

export const bulkOperations = [
  {
    code: "Recipient",
    description:
      "회원 검색·필터 결과를 저장 가능한 수신자 명단으로 정규화합니다. 동일 명단을 반복 발송·재실행에 재사용하고, 역할별 편집·조회 권한을 분리합니다.",
    accent: brandColors.green,
    points: ["명단 스냅샷", "회원 ID 해석", "통합 API CRUD"],
  },
  {
    code: "Batch",
    description:
      "명단 단위 작업을 큐에 등록하고 청크 단위로 커밋합니다. 부분 실패 시 성공 건은 유지하고, 실패 건만 재시도할 수 있도록 멱등 키와 상태 머신을 적용합니다.",
    accent: brandColors.blue,
    points: ["청크 처리", "멱등 실행", "비동기 워커"],
  },
  {
    code: "Audit",
    description:
      "수신자별 실행 결과·오류 사유를 기록하고 알림·감사 로그와 연동합니다. 웹·앱에서 동일한 트랜잭션 ID와 진행 상태를 조회할 수 있습니다.",
    accent: brandColors.red,
    points: ["건당 상태", "실패 격리", "알림 훅"],
  },
] as const;

export const recipientGroupBenefits = [
  "도메인 독립 명단 — 발송 모듈과 분리된 공통 수신자 리소스",
  "발송 전 dry-run — 잔액·권한·중복 수신자 사전 검증",
  "운영 가시성 — 진행률·실패 원인·재실행을 관리 UI에서 확인",
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
