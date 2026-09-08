import { createFileRoute } from "@tanstack/react-router";
import AppFeatures from "@/pages/app/AppFeatures";

export const Route = createFileRoute("/app/features")({
  component: AppFeatures,
});
