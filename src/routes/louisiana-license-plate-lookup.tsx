import { createFileRoute } from "@tanstack/react-router";
import { LouisianaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/louisiana-license-plate-lookup")({
  component: LouisianaLicensePlateLookup,
});
