import { createFileRoute } from "@tanstack/react-router";
import NorthCarolinaLicensePlateLookupPage from "@/pages/NorthCarolinaLicensePlateLookupPage";

export const Route = createFileRoute("/north-carolina-license-plate-lookup")({
  component: NorthCarolinaLicensePlateLookupPage,
});
