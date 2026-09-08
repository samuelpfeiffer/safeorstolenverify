import { createFileRoute } from "@tanstack/react-router";
import CompleteVinGuide from "@/pages/blog/CompleteVinGuide";

export const Route = createFileRoute("/blog/complete-vin-guide")({
  component: CompleteVinGuide,
});
