import { createFileRoute } from "@tanstack/react-router";
import AppDownloadPage from "@/pages/AppDownloadPage";

export const Route = createFileRoute("/download-app")({
  component: AppDownloadPage,
});
