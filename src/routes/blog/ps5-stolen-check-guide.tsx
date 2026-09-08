import { createFileRoute } from "@tanstack/react-router";
import PS5StolenCheckGuide from "@/pages/blog/PS5StolenCheckGuide";

export const Route = createFileRoute("/blog/ps5-stolen-check-guide")({
  component: PS5StolenCheckGuide,
});
