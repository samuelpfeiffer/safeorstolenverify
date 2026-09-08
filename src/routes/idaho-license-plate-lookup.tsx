import { createFileRoute } from "@tanstack/react-router";
import { IdahoLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/idaho-license-plate-lookup")({
  component: IdahoLicensePlateLookup,
});
