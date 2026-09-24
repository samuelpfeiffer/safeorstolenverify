import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { FIND_STOLEN_ONLINE_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...FIND_STOLEN_ONLINE_GUIDE} />;
}

export const Route = createFileRoute("/how-to-find-stolen-item-for-sale-online")({
  component: GuidePage,
});
