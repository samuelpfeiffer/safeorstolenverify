import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { MOTORCYCLE_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...MOTORCYCLE_GUIDE} />;
}

export const Route = createFileRoute("/check-motorcycle-stolen-vin")({
  component: GuidePage,
});
