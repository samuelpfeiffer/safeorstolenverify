import { createFileRoute } from "@tanstack/react-router";
import SerialNumberStolenCheckPage from "@/pages/SerialNumberStolenCheckPage";

export const Route = createFileRoute("/serial-number-stolen-check")({
  component: SerialNumberStolenCheckPage,
});
