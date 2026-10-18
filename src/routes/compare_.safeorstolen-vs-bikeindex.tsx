import { createFileRoute } from "@tanstack/react-router";
import { HonestComparePage, compareHead } from "@/components/compare/HonestComparePage";

export const Route = createFileRoute("/compare_/safeorstolen-vs-bikeindex")({
  head: () => compareHead("safeorstolen-vs-bikeindex"),
  component: () => <HonestComparePage slug="safeorstolen-vs-bikeindex" />,
});
