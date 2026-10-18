import { createFileRoute } from "@tanstack/react-router";
import { HonestComparePage, compareHead } from "@/components/compare/HonestComparePage";

export const Route = createFileRoute("/compare_/safeorstolen-vs-nicb-vincheck")({
  head: () => compareHead("safeorstolen-vs-nicb-vincheck"),
  component: () => <HonestComparePage slug="safeorstolen-vs-nicb-vincheck" />,
});
