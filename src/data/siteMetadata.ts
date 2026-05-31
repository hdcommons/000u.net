import { programIntro } from "@/data/presentationContent";
import { AppConfig } from "@/utils/AppConfig";

export const siteMetadata = {
  title: `${AppConfig.name} — 000u 지역 커뮤니티`,
  ogTitle: `${AppConfig.name} — 000u`,
  description:
    "공공공유(000u)는 정보·공간·물품·활력 공유, 지역화폐·시간선물, 위치 기반 지도를 웹과 홍동공유 앱(iOS·Android) 하나로 이어 주는 지역 커뮤니티 플랫폼입니다.",
  ogDescription: programIntro.body,
  keywords: [
    "공공공유",
    "000u",
    "홍동공유",
    "지역 커뮤니티",
    "지역화폐",
    "시간선물",
    "공유 플랫폼",
    "위치 기반 서비스",
    "커뮤니티 앱",
  ],
  ogImage: {
    url: "/android-chrome-512x512.png",
    width: 512,
    height: 512,
    alt: "공공공유 000u",
  },
} as const;

export function buildPresentationJsonLd() {
  const { url, appUrl, name, appName, description } = AppConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name,
        alternateName: "000u",
        description: siteMetadata.description,
        inLanguage: "ko-KR",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        alternateName: "000u",
        url,
        description,
        sameAs: [appUrl],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${appUrl}/#app`,
        name: appName,
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "iOS, Android",
        url: appUrl,
        description:
          "일정·공유·지역화폐·시간선물·지도를 스마트폰에서 이용하는 000u 공식 모바일 앱",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "KRW",
        },
        isPartOf: { "@id": `${url}/#website` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: siteMetadata.title,
        description: siteMetadata.description,
        inLanguage: "ko-KR",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${url}${siteMetadata.ogImage.url}`,
        },
      },
    ],
  };
}
