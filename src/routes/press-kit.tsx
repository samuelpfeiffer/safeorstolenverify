import { createFileRoute } from "@tanstack/react-router";
import PressKitPage from "@/pages/PressKitPage";

export const Route = createFileRoute("/press-kit")({
  component: PressKitPage,
});
