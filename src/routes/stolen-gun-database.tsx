import { createFileRoute } from "@tanstack/react-router";
import StolenGunDatabasePage from "@/pages/StolenGunDatabasePage";

export const Route = createFileRoute("/stolen-gun-database")({
  component: StolenGunDatabasePage,
});
