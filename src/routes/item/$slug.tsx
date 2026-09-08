import { createFileRoute } from "@tanstack/react-router";
import StolenItemDetailPage from "@/pages/StolenItemDetailPage";

export const Route = createFileRoute("/item/$slug")({
  component: StolenItemDetailPage,
});
