import { createFileRoute } from "@tanstack/react-router";
import MercariStolenCheck from "@/pages/marketplace/MercariStolenCheck";

export const Route = createFileRoute("/mercari-stolen-check")({
  component: MercariStolenCheck,
});
