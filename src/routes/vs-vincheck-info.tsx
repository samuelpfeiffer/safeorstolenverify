import { createFileRoute } from "@tanstack/react-router";
import VsVinCheckInfo from "@/pages/comparisons/VsVinCheckInfo";

export const Route = createFileRoute("/vs-vincheck-info")({
  component: VsVinCheckInfo,
});
