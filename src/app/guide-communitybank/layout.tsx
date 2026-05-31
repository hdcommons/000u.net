import type { Metadata } from "next";
import { COMMUNITY_BANK_GUIDE } from "@/constants/communityBankGuide";

export const metadata: Metadata = {
  title: `${COMMUNITY_BANK_GUIDE.guideTitle} — 공공공유`,
  description: COMMUNITY_BANK_GUIDE.metaDescription,
};

export default function GuideCommunityBankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
