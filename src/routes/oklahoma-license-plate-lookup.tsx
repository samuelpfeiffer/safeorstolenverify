import { createFileRoute } from "@tanstack/react-router";
import { OklahomaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/oklahoma-license-plate-lookup")({
  component: OklahomaLicensePlateLookup,
});
