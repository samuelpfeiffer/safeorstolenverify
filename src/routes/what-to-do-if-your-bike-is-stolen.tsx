import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { STOLEN_BIKE_VICTIM_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...STOLEN_BIKE_VICTIM_GUIDE} />;
}

export const Route = createFileRoute("/what-to-do-if-your-bike-is-stolen")({
  component: GuidePage,
});
