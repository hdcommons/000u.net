import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "공공공유",
  description: "함께 쓰고 함께 나누는 커뮤니티 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
