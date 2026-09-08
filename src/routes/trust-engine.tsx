import { createFileRoute } from "@tanstack/react-router";
import TrustEnginePage from "@/pages/TrustEnginePage";

export const Route = createFileRoute("/trust-engine")({
  component: TrustEnginePage,
});
