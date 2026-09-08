import { createFileRoute } from "@tanstack/react-router";
import VsIMEIInfoPage from "@/pages/ComparisonIMEIInfo";

export const Route = createFileRoute("/vs-imeiinfo")({
  component: VsIMEIInfoPage,
});
