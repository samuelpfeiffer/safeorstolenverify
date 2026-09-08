import { createFileRoute } from "@tanstack/react-router";
import GeorgiaLicensePlateLookupPage from "@/pages/GeorgiaLicensePlateLookupPage";

export const Route = createFileRoute("/georgia-license-plate-lookup")({
  component: GeorgiaLicensePlateLookupPage,
});
