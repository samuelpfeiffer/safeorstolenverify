import { createFileRoute } from "@tanstack/react-router";
import { RhodeIslandLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/rhode-island-license-plate-lookup")({
  component: RhodeIslandLicensePlateLookup,
});
