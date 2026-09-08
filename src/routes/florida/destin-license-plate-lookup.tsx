import { createFileRoute } from "@tanstack/react-router";
import DestinLicensePlateLookupPage from "@/pages/florida/DestinLicensePlateLookupPage";

export const Route = createFileRoute("/florida/destin-license-plate-lookup")({
  component: DestinLicensePlateLookupPage,
});
