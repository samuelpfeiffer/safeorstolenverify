import { createFileRoute } from "@tanstack/react-router";
import LetgoStolenCheck from "@/pages/marketplace/LetgoStolenCheck";

export const Route = createFileRoute("/letgo-stolen-check")({
  component: LetgoStolenCheck,
});
