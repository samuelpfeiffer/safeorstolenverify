import { createFileRoute } from "@tanstack/react-router";
import TampaLicensePlateLookupPage from "@/pages/florida/TampaLicensePlateLookupPage";

export const Route = createFileRoute("/florida/tampa-license-plate-lookup")({
  component: TampaLicensePlateLookupPage,
});
