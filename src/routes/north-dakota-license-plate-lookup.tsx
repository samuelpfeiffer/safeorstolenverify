import { createFileRoute } from "@tanstack/react-router";
import { NorthDakotaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/north-dakota-license-plate-lookup")({
  component: NorthDakotaLicensePlateLookup,
});
