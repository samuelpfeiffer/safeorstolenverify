import { createFileRoute } from "@tanstack/react-router";
import { NevadaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/nevada-license-plate-lookup")({
  component: NevadaLicensePlateLookup,
});
