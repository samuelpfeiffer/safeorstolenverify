import { createFileRoute } from "@tanstack/react-router";
import FirearmsCheckPage from "@/pages/FirearmsCheckPage";

export const Route = createFileRoute("/firearms-check")({
  component: FirearmsCheckPage,
});
