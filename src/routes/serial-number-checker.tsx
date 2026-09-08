import { createFileRoute } from "@tanstack/react-router";
import SerialNumberCheckerPage from "@/pages/SerialNumberCheckerPage";

export const Route = createFileRoute("/serial-number-checker")({
  component: SerialNumberCheckerPage,
});
