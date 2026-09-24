import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { STOLEN_CAR_VICTIM_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...STOLEN_CAR_VICTIM_GUIDE} />;
}

export const Route = createFileRoute("/what-to-do-if-your-car-is-stolen")({
  component: GuidePage,
});
