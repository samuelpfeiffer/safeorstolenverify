import { createFileRoute } from "@tanstack/react-router";
import IMEICheckPage from "@/pages/IMEICheckPage";

export const Route = createFileRoute("/imei-check")({
  component: IMEICheckPage,
});
