import { createFileRoute } from "@tanstack/react-router";
import { HonestComparePage, compareHead } from "@/components/compare/HonestComparePage";

export const Route = createFileRoute("/compare_/safeorstolen-vs-asking-police")({
  head: () => compareHead("safeorstolen-vs-asking-police"),
  component: () => <HonestComparePage slug="safeorstolen-vs-asking-police" />,
});
