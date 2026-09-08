import { createFileRoute } from "@tanstack/react-router";
import CaliforniaLicensePlateLookupPage from "@/pages/CaliforniaLicensePlateLookupPage";

export const Route = createFileRoute("/california-license-plate-lookup")({
  component: CaliforniaLicensePlateLookupPage,
});
