import { createFileRoute } from "@tanstack/react-router";
import CheckBoatPage from "@/pages/CheckBoatPage";

export const Route = createFileRoute("/check-boat")({
  component: CheckBoatPage,
});
