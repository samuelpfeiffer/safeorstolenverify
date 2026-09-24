import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { WATCH_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...WATCH_GUIDE} />;
}

export const Route = createFileRoute("/check-watch-stolen")({
  component: GuidePage,
});
