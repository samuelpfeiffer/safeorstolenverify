import { createFileRoute } from "@tanstack/react-router";
import WashingtonDCLicensePlateLookup from "@/pages/WashingtonDCLicensePlateLookup";

export const Route = createFileRoute("/washington-dc-license-plate-lookup")({
  component: WashingtonDCLicensePlateLookup,
});
