import { createFileRoute } from "@tanstack/react-router";
import HowToCheckIfItemStolenPage from "@/pages/HowToCheckIfItemStolenPage";

export const Route = createFileRoute("/how-to-check-if-item-stolen")({
  component: HowToCheckIfItemStolenPage,
});
