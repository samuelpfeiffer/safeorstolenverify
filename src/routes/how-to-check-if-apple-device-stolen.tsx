import { createFileRoute } from "@tanstack/react-router";
import { DefinitiveItemGuide } from "@/components/guides/DefinitiveItemGuide";
import { APPLE_DEVICE_GUIDE } from "@/data/moreGuides";

function GuidePage() {
  return <DefinitiveItemGuide {...APPLE_DEVICE_GUIDE} />;
}

export const Route = createFileRoute("/how-to-check-if-apple-device-stolen")({
  component: GuidePage,
});
