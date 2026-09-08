import { createFileRoute } from "@tanstack/react-router";
import ForLawEnforcement from "@/pages/business/ForLawEnforcement";

export const Route = createFileRoute("/for-law-enforcement")({
  component: ForLawEnforcement,
});
