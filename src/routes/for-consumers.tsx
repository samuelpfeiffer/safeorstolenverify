import { createFileRoute } from "@tanstack/react-router";
import ForConsumersPage from "@/pages/ForConsumersPage";

export const Route = createFileRoute("/for-consumers")({
  component: ForConsumersPage,
});
