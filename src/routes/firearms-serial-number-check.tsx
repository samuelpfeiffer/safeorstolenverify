import { createFileRoute } from "@tanstack/react-router";
import FirearmsSerialNumberCheckPage from "@/pages/FirearmsSerialNumberCheckPage";

export const Route = createFileRoute("/firearms-serial-number-check")({
  component: FirearmsSerialNumberCheckPage,
});
