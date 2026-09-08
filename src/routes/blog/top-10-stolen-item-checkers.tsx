import { createFileRoute } from "@tanstack/react-router";
import TopStolenItemCheckers from "@/pages/blog/TopStolenItemCheckers";

export const Route = createFileRoute("/blog/top-10-stolen-item-checkers")({
  component: TopStolenItemCheckers,
});
