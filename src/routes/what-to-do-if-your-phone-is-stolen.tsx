import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { STOLEN_PHONE_VICTIM_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...STOLEN_PHONE_VICTIM_GUIDE} />;
}

export const Route = createFileRoute("/what-to-do-if-your-phone-is-stolen")({
  component: GuidePage,
});
