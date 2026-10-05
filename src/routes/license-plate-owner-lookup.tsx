import { createFileRoute } from "@tanstack/react-router";
import LicensePlateOwnerLookupPage from "@/pages/LicensePlateOwnerLookupPage";

export const Route = createFileRoute("/license-plate-owner-lookup")({
  component: LicensePlateOwnerLookupPage,
});
