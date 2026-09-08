import { createFileRoute } from "@tanstack/react-router";
import { MinnesotaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/minnesota-license-plate-lookup")({
  component: MinnesotaLicensePlateLookup,
});
