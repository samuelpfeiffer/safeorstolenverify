import { createFileRoute } from "@tanstack/react-router";
import CheckCarPage from "@/pages/CheckCarPage";

export const Route = createFileRoute("/check-car")({
  component: CheckCarPage,
});
