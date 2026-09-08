import { createFileRoute } from "@tanstack/react-router";
import SafeOrStolenVsSwappa from "@/pages/comparisons/SafeOrStolenVsSwappa";

export const Route = createFileRoute("/comparisons/safeorstolen-vs-swappa")({
  component: SafeOrStolenVsSwappa,
});
