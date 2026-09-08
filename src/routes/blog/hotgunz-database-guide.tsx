import { createFileRoute } from "@tanstack/react-router";
import HotGunzDatabaseGuide from "@/pages/blog/HotGunzDatabaseGuide";

export const Route = createFileRoute("/blog/hotgunz-database-guide")({
  component: HotGunzDatabaseGuide,
});
