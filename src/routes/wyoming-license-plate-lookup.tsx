import { createFileRoute } from "@tanstack/react-router";
import { WyomingLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/wyoming-license-plate-lookup")({
  component: WyomingLicensePlateLookup,
});
