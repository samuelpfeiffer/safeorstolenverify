import { createFileRoute } from "@tanstack/react-router";
import PressPage from "@/pages/PressPage";

export const Route = createFileRoute("/press")({
  component: PressPage,
});
