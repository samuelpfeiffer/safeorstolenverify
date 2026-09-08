import { createFileRoute } from "@tanstack/react-router";
import { NebraskaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/nebraska-license-plate-lookup")({
  component: NebraskaLicensePlateLookup,
});
