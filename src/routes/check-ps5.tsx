import { createFileRoute } from "@tanstack/react-router";
import CheckPS5Page from "@/pages/CheckPS5Page";

export const Route = createFileRoute("/check-ps5")({
  component: CheckPS5Page,
});
