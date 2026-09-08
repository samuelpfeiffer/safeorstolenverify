import { createFileRoute } from "@tanstack/react-router";
import GetAppPage from "@/pages/GetAppPage";

export const Route = createFileRoute("/get-app")({
  component: GetAppPage,
});
