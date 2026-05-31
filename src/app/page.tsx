import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { PresentationJsonLd } from "@/components/presentation/PresentationJsonLd";

export default function Home() {
  return (
    <>
      <PresentationJsonLd />
      <PresentationDeck />
    </>
  );
}
