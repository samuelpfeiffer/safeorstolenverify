import { createFileRoute } from "@tanstack/react-router";
import HowToCheckIfCarStolenPage from "@/pages/HowToCheckIfCarStolenPage";

export const Route = createFileRoute("/how-to-check-if-car-stolen")({
  component: HowToCheckIfCarStolenPage,
});
