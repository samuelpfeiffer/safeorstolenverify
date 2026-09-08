import { createFileRoute } from "@tanstack/react-router";
import { MarylandLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/maryland-license-plate-lookup")({
  component: MarylandLicensePlateLookup,
});
