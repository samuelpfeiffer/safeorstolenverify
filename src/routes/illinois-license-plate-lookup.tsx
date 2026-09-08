import { createFileRoute } from "@tanstack/react-router";
import IllinoisLicensePlateLookupPage from "@/pages/IllinoisLicensePlateLookupPage";

export const Route = createFileRoute("/illinois-license-plate-lookup")({
  component: IllinoisLicensePlateLookupPage,
});
