import { createFileRoute } from "@tanstack/react-router";
import DataSourcesPage from "@/pages/DataSourcesPage";

export const Route = createFileRoute("/data-sources")({
  component: DataSourcesPage,
});
