"use client";

export function GuideControls({
  playing,
  stepIndex,
  totalSteps,
  progress,
  onPlay,
  onPause,
  onRestart,
  onPrev,
  onNext,
}: {
  playing: boolean;
  stepIndex: number;
  totalSteps: number;
  progress: number;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="guide-controls">
      <div className="guide-controls-progress">
        <div className="guide-controls-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="guide-controls-row">
        <span className="guide-controls-step">
          {String(stepIndex + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
        </span>
        <div className="guide-controls-buttons">
          <button type="button" onClick={onRestart} className="guide-controls-btn" aria-label="처음부터">
            ↺
          </button>
          <button
            type="button"
            onClick={onPrev}
            disabled={stepIndex === 0}
            className="guide-controls-btn"
            aria-label="이전"
          >
            ←
          </button>
          <button
            type="button"
            onClick={playing ? onPause : onPlay}
            className="guide-controls-btn guide-controls-btn--primary"
            aria-label={playing ? "일시정지" : "재생"}
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={stepIndex >= totalSteps - 1}
            className="guide-controls-btn"
            aria-label="다음"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
