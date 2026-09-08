import { createFileRoute } from "@tanstack/react-router";
import LicensePlateLookupPage from "@/pages/LicensePlateLookupPage";

export const Route = createFileRoute("/license-plate-lookup")({
  component: LicensePlateLookupPage,
});
