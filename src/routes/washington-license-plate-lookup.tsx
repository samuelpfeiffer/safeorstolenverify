import { createFileRoute } from "@tanstack/react-router";
import WashingtonLicensePlateLookupPage from "@/pages/WashingtonLicensePlateLookupPage";

export const Route = createFileRoute("/washington-license-plate-lookup")({
  component: WashingtonLicensePlateLookupPage,
});
