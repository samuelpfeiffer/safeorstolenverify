import { createFileRoute } from "@tanstack/react-router";
import VinCheckerApp from "@/pages/app/VinCheckerApp";

export const Route = createFileRoute("/app/vin-checker")({
  component: VinCheckerApp,
});
