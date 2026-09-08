import { createFileRoute } from "@tanstack/react-router";
import CheckEBikePage from "@/pages/CheckEBikePage";

export const Route = createFileRoute("/check-ebike")({
  component: CheckEBikePage,
});
