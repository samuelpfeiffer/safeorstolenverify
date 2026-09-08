import { createFileRoute } from "@tanstack/react-router";
import { OregonLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/oregon-license-plate-lookup")({
  component: OregonLicensePlateLookup,
});
