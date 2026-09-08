import { createFileRoute } from "@tanstack/react-router";
import FreeTools from "@/pages/FreeTools";

export const Route = createFileRoute("/free-tools")({
  component: FreeTools,
});
