import { createFileRoute } from "@tanstack/react-router";
import { VirginiaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/virginia-license-plate-lookup")({
  component: VirginiaLicensePlateLookup,
});
