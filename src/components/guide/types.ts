export type GuideOverlayState = {
  highlightId: string | null;
  clickPulseId: string | null;
  showCursor: boolean;
  /** 대상 rect 기준 커서 위치 (0–1). 미설정 시 x 0.7, y 0.55 */
  cursorAnchor?: { x: number; y: number };
};

export type GuideStepDetailCaption = "charge-application-guide";

export type GuideStep<T extends Record<string, unknown>> = {
  id: string;
  title: string;
  caption?: string;
  /** guide-step-panel-caption 대신 ul/li 목록으로 표시 */
  captionList?: string[];
  /** mock UI 안내 — guide-step-panel에 table 등으로 표시 */
  detailCaption?: GuideStepDetailCaption;
  durationMs: number;
  patch: Partial<T>;
  overlay?: Partial<GuideOverlayState>;
  /** 송금 완료 등 — mock 위 축하 효과 */
  celebration?: "confetti";
};

export type GuideTimelineState<T extends Record<string, unknown>> = {
  stepIndex: number;
  scene: T;
  overlay: GuideOverlayState;
  playing: boolean;
  progress: number;
};

export const defaultOverlay: GuideOverlayState = {
  highlightId: null,
  clickPulseId: null,
  showCursor: false,
};
