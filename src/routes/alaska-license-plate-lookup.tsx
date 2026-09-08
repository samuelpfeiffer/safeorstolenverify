import { createFileRoute } from "@tanstack/react-router";
import { AlaskaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/alaska-license-plate-lookup")({
  component: AlaskaLicensePlateLookup,
});
