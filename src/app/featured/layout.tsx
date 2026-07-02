import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공공공유 특징 — 공공공유",
  description:
    "공공공유 플랫폼 특징 — 잎페이, 핑퐁, 커먼즈, 거래, 일괄 보내기, 지도, co",
};

export default function FeaturedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
