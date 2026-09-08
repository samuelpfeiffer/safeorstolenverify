import { createFileRoute } from "@tanstack/react-router";
import { IndianaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/indiana-license-plate-lookup")({
  component: IndianaLicensePlateLookup,
});
