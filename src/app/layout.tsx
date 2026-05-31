import type { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { AppConfig } from "@/utils/AppConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: [...siteMetadata.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.ogTitle,
    description: siteMetadata.ogDescription,
    url: AppConfig.url,
    siteName: AppConfig.name,
    locale: "ko_KR",
    type: "website",
    images: [siteMetadata.ogImage],
  },
  twitter: {
    card: "summary",
    title: siteMetadata.ogTitle,
    description: siteMetadata.ogDescription,
    images: [siteMetadata.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased selection:bg-primary/15 selection:text-foreground">{children}</body>
    </html>
  );
}
