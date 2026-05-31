import { buildPresentationJsonLd } from "@/data/siteMetadata";

export function PresentationJsonLd() {
  const jsonLd = buildPresentationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
