import { createFileRoute } from "@tanstack/react-router";
import InstallAppPage from "@/pages/InstallAppPage";

export const Route = createFileRoute("/install-app")({
  component: InstallAppPage,
});
