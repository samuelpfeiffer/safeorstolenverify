import { createFileRoute } from "@tanstack/react-router";
import { CheckStolenPhone as CheckStolenPhonePage } from "@/pages/traffic/StolenCheckPages";

export const Route = createFileRoute("/check-stolen-phone")({
  component: CheckStolenPhonePage,
});
