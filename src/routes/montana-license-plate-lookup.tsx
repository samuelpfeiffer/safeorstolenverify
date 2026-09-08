import { createFileRoute } from "@tanstack/react-router";
import { MontanaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/montana-license-plate-lookup")({
  component: MontanaLicensePlateLookup,
});
