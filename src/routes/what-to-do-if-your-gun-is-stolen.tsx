import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { STOLEN_GUN_VICTIM_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...STOLEN_GUN_VICTIM_GUIDE} />;
}

export const Route = createFileRoute("/what-to-do-if-your-gun-is-stolen")({
  component: GuidePage,
});
