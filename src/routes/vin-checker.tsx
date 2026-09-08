import { createFileRoute } from "@tanstack/react-router";
import VINCheckerPage from "@/pages/VINCheckerPage";

export const Route = createFileRoute("/vin-checker")({
  component: VINCheckerPage,
});
