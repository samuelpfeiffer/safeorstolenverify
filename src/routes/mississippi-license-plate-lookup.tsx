import { createFileRoute } from "@tanstack/react-router";
import { MississippiLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/mississippi-license-plate-lookup")({
  component: MississippiLicensePlateLookup,
});
