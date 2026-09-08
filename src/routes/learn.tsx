import { createFileRoute } from "@tanstack/react-router";
import LearnHubPage from "@/pages/LearnHubPage";

export const Route = createFileRoute("/learn")({
  component: LearnHubPage,
});
