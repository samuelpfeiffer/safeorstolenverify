import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { CAMERA_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...CAMERA_GUIDE} />;
}

export const Route = createFileRoute("/check-camera-stolen")({
  component: GuidePage,
});
