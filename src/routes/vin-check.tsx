import { createFileRoute } from "@tanstack/react-router";
import VINCheckPage from "@/pages/VINCheckPage";

export const Route = createFileRoute("/vin-check")({
  component: VINCheckPage,
});
