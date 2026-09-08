import { createFileRoute } from "@tanstack/react-router";
import { IowaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/iowa-license-plate-lookup")({
  component: IowaLicensePlateLookup,
});
