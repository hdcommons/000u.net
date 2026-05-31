"use client";

import { LogoColorsIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import {
  appIntro,
  brandColors,
  bulkIntro,
  bulkOperations,
  editorBenefits,
  editorHighlights,
  editorIntro,
  featuresIntro,
  locationAppPoints,
  locationBenefits,
  memberBenefits,
  memberTypes,
  mentionBenefits,
  mentionFeatures,
  notificationBenefits,
  notificationChannels,
  programHighlights,
  programIntro,
  platformArchitecture,
  recipientGroupBenefits,
  slides,
  techStack,
  webFeatures,
  webIntro,
} from "@/data/presentationContent";
import { AppConfig } from "@/utils/AppConfig";
import { useCallback, useEffect, useRef, useState } from "react";

type SlideVariant =
  | "hero"
  | "light"
  | "soft-warm"
  | "soft-cool"
  | "soft-mint"
  | "dark";

function Slide({
  id,
  children,
  variant = "light",
  className = "",
  orbs,
}: {
  id: string;
  children: React.ReactNode;
  variant?: SlideVariant;
  className?: string;
  orbs?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-slide
      data-variant={variant}
      className={`presentation-slide presentation-slide--${variant} ${className}`}
    >
      <div className="presentation-slide-bg" aria-hidden />
      <div className="presentation-grain" aria-hidden />
      {orbs}
      <div className="presentation-slide-inner">{children}</div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
  accent,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`presentation-glass ${hover ? "presentation-glass--hover" : ""} ${className}`}
      style={
        accent
          ? ({ "--card-accent": accent } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}

function DarkPanel({
  children,
  accent,
  className = "",
}: {
  children: React.ReactNode;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`presentation-dark-panel ${className}`}
      style={{ "--panel-accent": accent } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function SlideHeader({
  label,
  title,
  subtitle,
  center = false,
  light = false,
  compactTitle = false,
  labelAccent,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  compactTitle?: boolean;
  labelAccent?: "gold";
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <p
        className={`presentation-label ${light ? "presentation-label--light" : ""} ${
          labelAccent === "gold" ? "presentation-label--gold" : ""
        } ${center ? "mx-auto" : ""}`}
      >
        {label}
      </p>
      <h2
        className={`presentation-title ${compactTitle ? "presentation-title--compact" : ""} ${light ? "presentation-title--light" : ""} ${
          center ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`presentation-subtitle ${light ? "presentation-subtitle--light" : ""} ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function BulletList({
  items,
  accent = brandColors.blue,
  light = false,
}: {
  items: readonly string[];
  accent?: string;
  light?: boolean;
}) {
  return (
    <ul
      className={`presentation-list ${light ? "presentation-list--light" : ""}`}
    >
      {items.map((item) => (
        <li key={item}>
          <span
            className="presentation-list-dot"
            style={{ background: accent }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Tag({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <span
      className="presentation-tag"
      style={
        accent ? ({ "--tag-accent": accent } as React.CSSProperties) : undefined
      }
    >
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`presentation-btn ${dark ? "presentation-btn--ghost-dark" : "presentation-btn--primary"}`}
    >
      {children}
    </a>
  );
}

function LinkOutIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function BrowserMockup() {
  return (
    <div className="presentation-browser presentation-device">
      <GlassCard
        hover={false}
        className="presentation-device-frame overflow-hidden p-0"
      >
        <div className="presentation-device-chrome">
          <span className="presentation-dot presentation-dot--red" />
          <span className="presentation-dot presentation-dot--yellow" />
          <span className="presentation-dot presentation-dot--green" />
          <div className="presentation-device-url">hd.000u.net</div>
        </div>
        <div className="presentation-device-body space-y-3">
          <div className="flex items-center gap-3">
            <LogoColorsIcon size={28} />
            <div className="presentation-skeleton presentation-skeleton--md" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              brandColors.red,
              brandColors.yellow,
              brandColors.green,
              brandColors.blue,
            ].map((color) => (
              <div
                key={color}
                className="presentation-mini-card"
                style={{ "--card-accent": color } as React.CSSProperties}
              >
                <div className="presentation-skeleton presentation-skeleton--sm" />
                <div className="presentation-skeleton presentation-skeleton--line" />
                <div className="presentation-skeleton presentation-skeleton--line-short" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["소식", "일정", "공유", "지도", "지역화폐", "시간선물"].map(
              (tab) => (
                <Tag key={tab}>{tab}</Tag>
              ),
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function PhoneMockup({ showLocation = false }: { showLocation?: boolean }) {
  const tabs = ["홈", "소식", "공유", "지도", "설정"];
  const activeTab = showLocation ? 3 : 0;

  return (
    <div className="presentation-phone presentation-device">
      <div className="presentation-phone-shell">
        <div className="presentation-phone-screen">
          <div className="presentation-phone-status">
            <span>9:41</span>
            <span className="font-bold">홍동공유</span>
            <span>100%</span>
          </div>
          <div className="presentation-phone-content space-y-2">
            {showLocation ? (
              <div className="presentation-location-card">
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold text-[#1a7f37]">
                  <span className="size-2 rounded-full bg-[#6ba750]" />내 주변 ·
                  1.2km
                </div>
                {["마을회관", "협동조합", "동네카페"].map((name, i) => (
                  <div key={name} className="presentation-location-row">
                    <span>{name}</span>
                    <span>{(0.3 + i * 0.4).toFixed(1)}km</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="presentation-phone-hero-card">
                <LogoColorsIcon size={22} />
                <div>
                  <div className="text-xs font-bold text-foreground">
                    공공공유
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    커뮤니티
                  </div>
                </div>
              </div>
            )}
            {[0, 1, 2].map((i) => (
              <div key={i} className="presentation-phone-feed-item">
                <div className="presentation-skeleton presentation-skeleton--sm" />
                <div className="presentation-skeleton presentation-skeleton--line" />
              </div>
            ))}
          </div>
          <div className="presentation-phone-tabs">
            {tabs.map((tab, i) => (
              <div
                key={tab}
                className={i === activeTab ? "is-active" : undefined}
              >
                <span
                  style={{
                    background:
                      i === activeTab ? brandColors.blue : "transparent",
                  }}
                />
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PresentationDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const target = container.querySelectorAll("[data-slide]")[index];
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nodes = Array.from(
              container.querySelectorAll("[data-slide]"),
            );
            const index = nodes.indexOf(entry.target as Element);
            if (index >= 0) setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: 0.55 },
    );

    container
      .querySelectorAll("[data-slide]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSlide(Math.min(activeIndex + 1, slides.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSlide(Math.max(activeIndex - 1, 0));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, scrollToSlide]);

  const progress = ((activeIndex + 1) / slides.length) * 100;
  const slideNumber = String(activeIndex + 1).padStart(2, "0");
  const slideTotal = String(slides.length).padStart(2, "0");

  const heroOrbs = (
    <>
      <div className="presentation-orb presentation-orb-red" aria-hidden />
      <div className="presentation-orb presentation-orb-yellow" aria-hidden />
      <div className="presentation-orb presentation-orb-green" aria-hidden />
      <div className="presentation-orb presentation-orb-blue" aria-hidden />
    </>
  );

  return (
    <div className="presentation-root">
      <div
        className="presentation-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      <div className="presentation-counter" aria-live="polite">
        <span className="presentation-counter-current">{slideNumber}</span>
        <span className="presentation-counter-sep">/</span>
        <span className="presentation-counter-total">{slideTotal}</span>
      </div>

      <nav className="presentation-nav" aria-label="슬라이드 탐색">
        <div className="presentation-nav-dock">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollToSlide(i)}
              className={i === activeIndex ? "is-active" : undefined}
              aria-label={`${slide.label} 슬라이드로 이동`}
              aria-current={i === activeIndex ? "true" : undefined}
            >
              <span className="presentation-nav-dot" />
              <span className="presentation-nav-label">{slide.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div ref={containerRef} className="presentation-scroll">
        <Slide id="hero" variant="hero" orbs={heroOrbs}>
          <div className="flex flex-col items-center text-center">
            <div className="presentation-fade-up flex items-center gap-5 sm:gap-8">
              <LogoColorsIcon
                size={72}
                className="presentation-logo presentation-logo--hero shrink-0 sm:!size-[88px] md:!size-[104px]"
              />
              <h1 className="presentation-hero-title">{AppConfig.name}</h1>
            </div>
            <a
              href={AppConfig.appUrl}
              className="presentation-fade-up presentation-delay-1 presentation-hero-app-link group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkOutIcon className="presentation-hero-app-link-icon" />
              {AppConfig.appName} - 바로가기
            </a>
            <p className="presentation-fade-up presentation-delay-2 presentation-hero-desc">
              {AppConfig.description}
            </p>
            <p className="presentation-fade-up presentation-delay-3 presentation-hero-meta">
              커뮤니티 플랫폼 · 웹 &amp; 모바일 앱
            </p>
            <button
              type="button"
              onClick={() => scrollToSlide(1)}
              className="presentation-fade-up presentation-delay-4 presentation-scroll-cta"
            >
              <span>Explore</span>
              <span className="presentation-scroll-hint" aria-hidden />
            </button>
          </div>
        </Slide>

        <Slide id="vision" variant="light">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SlideHeader
                label={programIntro.label}
                title={
                  <>
                    함께 쓰고,
                    <br />
                    <span className="presentation-gradient-text">
                      함께 나누는
                    </span>
                    <br />
                    커뮤니티 웹 & 모바일 앱
                  </>
                }
              />
              <div className="mt-8 max-w-lg space-y-4">
                <p className="presentation-body">{programIntro.body}</p>
                <p className="presentation-body">{programIntro.bodyDetail}</p>
              </div>
            </div>
            <div className="presentation-bento-grid presentation-bento-grid--2">
              {programHighlights.map((item) => (
                <GlassCard
                  key={item.value}
                  accent={item.color}
                  className="presentation-stat-card p-6 sm:p-7"
                >
                  <div className="presentation-stat-value">{item.value}</div>
                  <div className="presentation-stat-sub">{item.sub}</div>
                  {"subDetail" in item && item.subDetail ? (
                    <div className="presentation-stat-sub">
                      {item.subDetail}
                    </div>
                  ) : null}
                  {"platforms" in item && item.platforms ? (
                    <div
                      className="presentation-stat-platforms"
                      aria-label="iOS, Android"
                    >
                      <span
                        className="presentation-stat-platform-icon"
                        title="iOS"
                      >
                        <Image
                          src="/icons/platform-ios.svg"
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden
                        />
                      </span>
                      <span
                        className="presentation-stat-platform-icon"
                        title="Android"
                      >
                        <Image
                          src="/icons/platform-android.svg"
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden
                        />
                      </span>
                    </div>
                  ) : null}
                </GlassCard>
              ))}
            </div>
          </div>
        </Slide>

        <Slide id="web" variant="soft-cool">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <BrowserMockup />
            <div className="lg:order-first">
              <SlideHeader label={webIntro.label} title={webIntro.title} />
              <p className="presentation-url mt-3">{AppConfig.appUrl}</p>
              <p className="presentation-body mt-6">{webIntro.body}</p>
              <div className="mt-8">
                <BulletList
                  items={webIntro.highlights}
                  accent={brandColors.blue}
                />
              </div>
              <PrimaryButton href={AppConfig.appUrl}>
                웹사이트 방문 <span aria-hidden>→</span>
              </PrimaryButton>
            </div>
          </div>
        </Slide>

        <Slide id="app" variant="dark">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SlideHeader
                label={appIntro.label}
                title={appIntro.title}
                subtitle={appIntro.subtitle}
                light
              />
              <p className="presentation-body presentation-body--light mt-6 max-w-lg">
                {appIntro.body}
              </p>
              <div className="mt-8">
                <BulletList
                  items={appIntro.highlights}
                  accent={brandColors.green}
                  light
                />
              </div>
              <div className="presentation-store-badges mt-8 flex flex-row flex-nowrap items-center gap-3">
                <a
                  href={AppConfig.iosAppStoreUrl}
                  className="presentation-store-badge-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/app-store-badge.svg"
                    alt="App Store에서 다운로드"
                    width={104}
                    height={32}
                    className="presentation-store-badge-img"
                  />
                </a>
                <a
                  href={AppConfig.androidPlayStoreUrl}
                  className="presentation-store-badge-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/google-play-badge.svg"
                    alt="Google Play에서 다운로드"
                    width={108}
                    height={32}
                    className="presentation-store-badge-img"
                  />
                </a>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </Slide>

        <Slide id="features" variant="light">
          <SlideHeader
            label={featuresIntro.label}
            title={featuresIntro.title}
            subtitle={featuresIntro.subtitle}
            center
          />
          <div className="presentation-bento-grid presentation-bento-grid--3 mt-14">
            {webFeatures.map((feature) => (
              <GlassCard
                key={feature.title}
                accent={feature.accent}
                className="presentation-feature-card p-6 sm:p-7"
                hover
              >
                <div
                  className="presentation-feature-icon"
                  style={{ background: feature.accent }}
                >
                  {feature.title.charAt(0)}
                </div>
                <h3 className="presentation-feature-title">{feature.title}</h3>
                <p className="presentation-feature-desc">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Slide>

        <Slide id="bulk" variant="soft-warm">
          <SlideHeader
            label={bulkIntro.label}
            title={bulkIntro.title}
            subtitle={bulkIntro.subtitle}
            center
          />

          <div className="presentation-flow mt-12">
            {bulkIntro.flowSteps.map((step, i) => (
              <span key={step} className="contents">
                {i > 0 && (
                  <span className="presentation-flow-arrow" aria-hidden>
                    →
                  </span>
                )}
                <span
                  className={
                    i === 2
                      ? "presentation-flow-step presentation-flow-step--accent"
                      : "presentation-flow-step"
                  }
                >
                  {step}
                </span>
              </span>
            ))}
          </div>

          <div className="presentation-bento-grid presentation-bento-grid--3 mt-12">
            {bulkOperations.map((op) => (
              <GlassCard
                key={op.code}
                accent={op.accent}
                className="p-6 sm:p-7"
              >
                <span
                  className="presentation-code-badge"
                  style={{ background: op.accent }}
                >
                  {op.code}
                </span>
                <h3 className="presentation-feature-title mt-4">{op.title}</h3>
                <p className="presentation-url text-sm">{op.subtitle}</p>
                <p className="presentation-feature-desc presentation-bulk-desc mt-3">
                  {op.description}
                </p>
                <ul className="presentation-tag-row mt-5">
                  {op.points.map((point) => (
                    <li key={point}>
                      <Tag>{point}</Tag>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-8 p-6 sm:p-8" hover={false}>
            <h3 className="presentation-bulk-section-title">
              {bulkIntro.recipientSectionTitle}
            </h3>
            <div className="mt-5">
              <BulletList
                items={recipientGroupBenefits}
                accent={brandColors.green}
              />
            </div>
          </GlassCard>
        </Slide>

        <Slide id="notify" variant="soft-mint">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SlideHeader
                label="Notifications"
                labelAccent="gold"
                compactTitle
                title={<>푸시 · SMS · 인앱 알림</>}
                subtitle="중요한 순간을 놓치지 않도록, 채널별로 최적의 방식으로 전달합니다"
              />
              <div className="mt-8">
                <BulletList
                  items={notificationBenefits}
                  accent={brandColors.gold}
                />
              </div>
            </div>
            <div className="space-y-4">
              {notificationChannels.map((channel) => (
                <GlassCard
                  key={channel.title}
                  accent={channel.accent}
                  className="presentation-channel-card flex gap-5 p-5 sm:p-6"
                >
                  <span
                    className="presentation-channel-icon"
                    style={{
                      background: `${channel.accent}22`,
                      color: channel.accent,
                    }}
                  >
                    {channel.abbr}
                  </span>
                  <div>
                    <h3
                      className="presentation-feature-title"
                      style={
                        channel.accent === brandColors.gold
                          ? { color: brandColors.gold }
                          : undefined
                      }
                    >
                      {channel.title}
                    </h3>
                    <p className="presentation-feature-desc mt-1">
                      {channel.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </Slide>

        <Slide id="editor" variant="dark">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SlideHeader
                label="Editor"
                title="웹표준 에디터 & 마크다운"
                subtitle={editorIntro.subtitle}
                light
              />
              <div className="mt-8 space-y-4">
                {editorBenefits.map((item) => (
                  <DarkPanel key={item.title} accent={item.accent}>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">
                      {item.description}
                    </p>
                  </DarkPanel>
                ))}
              </div>
            </div>
            <div className="presentation-editor-demo">
              <div className="presentation-device-chrome presentation-device-chrome--dark">
                <span className="presentation-dot presentation-dot--red" />
                <span className="presentation-dot presentation-dot--yellow" />
                <span className="presentation-dot presentation-dot--green" />
                <span className="presentation-editor-tab">게시글-작성.md</span>
              </div>
              <pre className="presentation-editor-code">
                <code>{`# 마을 행사 안내

**일시** 6월 15일 · **장소** @@마을회관

- 참가 신청 @홍길동 멘션
- 봉사 시간은 시간선물로 일괄 지급

> 웹표준 HTML + 마크다운 입력`}</code>
              </pre>
              <div className="presentation-editor-footer">
                <BulletList
                  items={editorHighlights}
                  accent={brandColors.blue}
                  light
                />
              </div>
            </div>
          </div>
        </Slide>

        <Slide id="mention" variant="soft-cool">
          <SlideHeader
            label="Mentions"
            title="@ 사용자 · @@ 장소 멘션"
            subtitle="글과 댓글에서 사람과 장소를 직접 연결하고, 알림까지 자동 발송"
            center
          />
          <div className="presentation-bento-grid presentation-bento-grid--2 mt-14">
            {mentionFeatures.map((feature) => (
              <GlassCard
                key={feature.type}
                accent={feature.accent}
                className="p-7 sm:p-8"
              >
                <span
                  className="presentation-mention-trigger"
                  style={{ background: feature.accent }}
                >
                  {feature.trigger}
                </span>
                <h3 className="presentation-feature-title mt-5">
                  {feature.title}
                </h3>
                <p className="presentation-feature-desc mt-2">
                  {feature.description}
                </p>
                <div className="presentation-mention-example mt-6">
                  {feature.example}
                </div>
              </GlassCard>
            ))}
          </div>
          <GlassCard
            className="presentation-mention-note mt-8 p-6 sm:p-8"
            hover={false}
          >
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              댓글에서도 동일하게 <strong className="text-primary">@</strong> ·{" "}
              <strong className="text-primary">@@</strong> 사용 → 저장된 멘션을
              누르면 프로필·장소·지도로 이동
            </p>
            <div className="mt-5">
              <BulletList items={mentionBenefits} accent={brandColors.blue} />
            </div>
          </GlassCard>
        </Slide>

        <Slide id="members" variant="light">
          <SlideHeader
            label="Member Types"
            title="개인 · 단체 · 사업자"
            subtitle="역할에 맞는 프로필과 공개 범위 — 인증된 하나의 휴대폰번로로 여러 계정 선택"
            center
          />
          <div className="presentation-bento-grid presentation-bento-grid--3 mt-14">
            {memberTypes.map((member) => (
              <GlassCard
                key={member.type}
                accent={member.accent}
                className="presentation-member-card p-6 sm:p-7"
              >
                <h3 className="presentation-feature-title">{member.label}</h3>
                <p className="presentation-feature-desc mt-3">
                  {member.description}
                </p>
                <ul className="presentation-member-fields mt-5">
                  {member.fields.map((field) => (
                    <li key={field}>
                      <span style={{ background: member.accent }} />
                      {field}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          <div className="mt-10">
            <BulletList items={memberBenefits} accent={brandColors.yellow} />
          </div>
        </Slide>

        <Slide
          id="location"
          variant="hero"
          orbs={
            <>
              <div
                className="presentation-orb presentation-orb-green presentation-orb-sm"
                aria-hidden
              />
              <div
                className="presentation-orb presentation-orb-blue presentation-orb-sm"
                aria-hidden
              />
            </>
          }
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SlideHeader
                label="Location"
                title="위치 기반 맞춤 서비스"
                subtitle="앱에서 현재 위치를 활용해 가까운 단체·장소·콘텐츠를 우선 제공"
                light
              />
              <div className="mt-8 space-y-4">
                {locationBenefits.map((item) => (
                  <DarkPanel key={item.title} accent={item.accent}>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">
                      {item.description}
                    </p>
                  </DarkPanel>
                ))}
              </div>
              <div className="mt-6">
                <BulletList
                  items={locationAppPoints}
                  accent={brandColors.green}
                  light
                />
              </div>
            </div>
            <PhoneMockup showLocation />
          </div>
        </Slide>

        <Slide id="tech" variant="soft-warm">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <SlideHeader
                label="Architecture"
                title={
                  <>
                    하나의 API,
                    <br />두 개의 클라이언트
                  </>
                }
              />
              <p className="presentation-body mt-8">
                {platformArchitecture.body}
              </p>
              <div className="presentation-arch-diagram mt-10">
                {platformArchitecture.diagram.map((node, i) => (
                  <span key={node.label} className="contents">
                    {i > 0 && (
                      <span className="presentation-arch-arrow">→</span>
                    )}
                    <span
                      className="presentation-arch-node"
                      style={{
                        background: `${node.color}18`,
                        color: node.color,
                        borderColor: `${node.color}40`,
                      }}
                    >
                      {node.label}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {techStack.map((group) => (
                <GlassCard
                  key={group.layer}
                  className="p-6 sm:p-7"
                  hover={false}
                >
                  <div className="presentation-section-kicker">
                    {group.layer}
                  </div>
                  <ul className="presentation-tag-row mt-4">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </Slide>

        <Slide
          id="cta"
          variant="hero"
          className="presentation-cta-slide"
          orbs={
            <>
              <div
                className="presentation-orb presentation-orb-red presentation-orb-sm"
                aria-hidden
              />
              <div
                className="presentation-orb presentation-orb-blue presentation-orb-sm"
                aria-hidden
              />
            </>
          }
        >
          <div className="flex flex-col items-center text-center">
            <LogoColorsIcon size={64} className="presentation-logo mb-8" />
            <h2 className="presentation-title presentation-title--light">
              지금, 공동체에 참여하세요
            </h2>
            <p className="presentation-subtitle presentation-subtitle--light mt-5 max-w-xl">
              웹에서 바로 접속하고, 앱으로 더 가까이 연결하세요.
            </p>
            <div className="presentation-cta-actions mt-12">
              <a
                href={AppConfig.appUrl}
                className="presentation-btn presentation-btn--white"
              >
                {AppConfig.appUrl.replace("https://", "")}
              </a>
              <a
                href={AppConfig.url}
                className="presentation-btn presentation-btn--ghost-dark"
              >
                000u.net
              </a>
            </div>
            <p className="presentation-footer-copy mt-14">
              © {new Date().getFullYear()} 공공공유 · Powered by 000u ·
              contact@000u.net
            </p>
          </div>
        </Slide>
      </div>

      {activeIndex === 0 ? (
        <nav className="presentation-hero-guide-links" aria-label="사용 안내">
          <Link
            href="/guide-communitybank"
            className="presentation-hero-guide-link"
          >
            지역화폐 잎 안내
          </Link>
          <Link href="/guide-timebank" className="presentation-hero-guide-link">
            시간선물 핑퐁 안내
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
