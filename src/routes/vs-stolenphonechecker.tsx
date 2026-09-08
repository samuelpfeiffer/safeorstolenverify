import { createFileRoute } from "@tanstack/react-router";
import VsStolenPhoneChecker from "@/pages/comparisons/VsStolenPhoneChecker";

export const Route = createFileRoute("/vs-stolenphonechecker")({
  component: VsStolenPhoneChecker,
});
