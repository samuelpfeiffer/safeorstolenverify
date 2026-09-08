import { createFileRoute } from "@tanstack/react-router";
import { ConnecticutLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/connecticut-license-plate-lookup")({
  component: ConnecticutLicensePlateLookup,
});
