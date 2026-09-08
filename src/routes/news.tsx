import { createFileRoute } from "@tanstack/react-router";
import NewsIndexPage from "@/pages/NewsIndexPage";

export const Route = createFileRoute("/news")({
  component: NewsIndexPage,
});
