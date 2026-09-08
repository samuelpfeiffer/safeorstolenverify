import { createFileRoute } from "@tanstack/react-router";
import JacksonvilleLicensePlateLookupPage from "@/pages/florida/JacksonvilleLicensePlateLookupPage";

export const Route = createFileRoute("/florida/jacksonville-license-plate-lookup")({
  component: JacksonvilleLicensePlateLookupPage,
});
