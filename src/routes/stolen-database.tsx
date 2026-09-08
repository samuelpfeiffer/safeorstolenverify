import { createFileRoute } from "@tanstack/react-router";
import StolenDatabasePage from "@/pages/StolenDatabasePage";

export const Route = createFileRoute("/stolen-database")({
  component: StolenDatabasePage,
});
