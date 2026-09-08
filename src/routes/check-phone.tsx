import { createFileRoute } from "@tanstack/react-router";
import CheckPhonePage from "@/pages/CheckPhonePage";

export const Route = createFileRoute("/check-phone")({
  component: CheckPhonePage,
});
