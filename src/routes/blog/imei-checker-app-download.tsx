import { createFileRoute } from "@tanstack/react-router";
import IMEICheckerAppDownload from "@/pages/blog/IMEICheckerAppDownload";

export const Route = createFileRoute("/blog/imei-checker-app-download")({
  component: IMEICheckerAppDownload,
});
