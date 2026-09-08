import { createFileRoute } from "@tanstack/react-router";
import TransparencyPage from "@/pages/TransparencyPage";

export const Route = createFileRoute("/transparency")({
  component: TransparencyPage,
});
