import { createFileRoute } from "@tanstack/react-router";
import StateStolenGunDatabaseGuide from "@/pages/blog/StateStolenGunDatabaseGuide";

export const Route = createFileRoute("/blog/state-stolen-gun-database-guide")({
  component: StateStolenGunDatabaseGuide,
});
