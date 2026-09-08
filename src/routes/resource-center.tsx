import { createFileRoute } from "@tanstack/react-router";
import ResourceCenterPage from "@/pages/ResourceCenterPage";

export const Route = createFileRoute("/resource-center")({
  component: ResourceCenterPage,
});
