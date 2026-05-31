import type { Metadata } from "next";
import { TIME_GIFT_PING_PONG_GUIDE } from "@/constants/timeGiftPingPongGuide";

export const metadata: Metadata = {
  title: `${TIME_GIFT_PING_PONG_GUIDE.guideTitle} — 공공공유`,
  description: TIME_GIFT_PING_PONG_GUIDE.metaDescription,
};

export default function GuideTimebankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
