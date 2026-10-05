import { createFileRoute } from "@tanstack/react-router";
import BulkCheckPage from "@/pages/BulkCheckPage";

export const Route = createFileRoute("/bulk-check")({
  component: BulkCheckPage,
});
