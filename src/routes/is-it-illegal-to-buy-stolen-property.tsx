import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { BUYING_STOLEN_LEGAL_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...BUYING_STOLEN_LEGAL_GUIDE} />;
}

export const Route = createFileRoute("/is-it-illegal-to-buy-stolen-property")({
  component: GuidePage,
});
