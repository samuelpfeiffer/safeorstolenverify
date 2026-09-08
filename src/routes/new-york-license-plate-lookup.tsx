import { createFileRoute } from "@tanstack/react-router";
import NewYorkLicensePlateLookupPage from "@/pages/NewYorkLicensePlateLookupPage";

export const Route = createFileRoute("/new-york-license-plate-lookup")({
  component: NewYorkLicensePlateLookupPage,
});
