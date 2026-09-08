import { createFileRoute } from "@tanstack/react-router";
import DownloadApp from "@/pages/DownloadApp";

export const Route = createFileRoute("/download")({
  component: DownloadApp,
});
