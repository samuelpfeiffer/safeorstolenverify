import { createFileRoute } from "@tanstack/react-router";
import CheckBikePage from "@/pages/CheckBikePage";

export const Route = createFileRoute("/check-bike")({
  component: CheckBikePage,
});
