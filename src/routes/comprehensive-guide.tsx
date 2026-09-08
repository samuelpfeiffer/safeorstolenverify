import { createFileRoute } from "@tanstack/react-router";
import ComprehensiveGuidePage from "@/pages/ComprehensiveGuidePage";

export const Route = createFileRoute("/comprehensive-guide")({
  component: ComprehensiveGuidePage,
});
