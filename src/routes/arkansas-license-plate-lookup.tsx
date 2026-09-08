import { createFileRoute } from "@tanstack/react-router";
import { ArkansasLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/arkansas-license-plate-lookup")({
  component: ArkansasLicensePlateLookup,
});
