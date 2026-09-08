import { createFileRoute } from "@tanstack/react-router";
import { KansasLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/kansas-license-plate-lookup")({
  component: KansasLicensePlateLookup,
});
