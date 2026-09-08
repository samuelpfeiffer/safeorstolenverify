import { createFileRoute } from "@tanstack/react-router";
import CheckIfStolenPage from "@/pages/CheckIfStolenPage";

export const Route = createFileRoute("/check-if-stolen")({
  component: CheckIfStolenPage,
});
