import { createFileRoute } from "@tanstack/react-router";
import MobilePage from "@/pages/MobilePage";

export const Route = createFileRoute("/mobile")({
  component: MobilePage,
});
