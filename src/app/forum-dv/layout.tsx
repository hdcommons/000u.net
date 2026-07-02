import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제1회 주민포럼 '홍동공유로 꿈꾸는 마을' — 공공공유",
  description:
    "제1회 주민포럼 '홍동공유로 꿈꾸는 마을' 발표 자료 — 홍동공유, 잎페이, 핑퐁, 커먼즈",
};

export default function ForumDvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
