import { createFileRoute } from "@tanstack/react-router";
import { VermontLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/vermont-license-plate-lookup")({
  component: VermontLicensePlateLookup,
});
