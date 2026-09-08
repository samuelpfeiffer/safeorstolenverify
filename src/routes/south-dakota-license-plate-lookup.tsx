import { createFileRoute } from "@tanstack/react-router";
import { SouthDakotaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/south-dakota-license-plate-lookup")({
  component: SouthDakotaLicensePlateLookup,
});
