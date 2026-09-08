import { createFileRoute } from "@tanstack/react-router";
import { UtahLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/utah-license-plate-lookup")({
  component: UtahLicensePlateLookup,
});
