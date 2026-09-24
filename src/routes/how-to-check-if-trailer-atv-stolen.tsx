import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { TRAILER_ATV_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...TRAILER_ATV_GUIDE} />;
}

export const Route = createFileRoute("/how-to-check-if-trailer-atv-stolen")({
  component: GuidePage,
});
