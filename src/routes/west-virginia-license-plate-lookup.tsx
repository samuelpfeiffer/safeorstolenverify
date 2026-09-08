import { createFileRoute } from "@tanstack/react-router";
import { WestVirginiaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/west-virginia-license-plate-lookup")({
  component: WestVirginiaLicensePlateLookup,
});
