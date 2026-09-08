import { createFileRoute } from "@tanstack/react-router";
import { SouthCarolinaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/south-carolina-license-plate-lookup")({
  component: SouthCarolinaLicensePlateLookup,
});
