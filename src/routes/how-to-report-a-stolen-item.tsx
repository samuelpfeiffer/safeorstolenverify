import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { REPORT_STOLEN_HUB_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...REPORT_STOLEN_HUB_GUIDE} />;
}

export const Route = createFileRoute("/how-to-report-a-stolen-item")({
  component: GuidePage,
});
