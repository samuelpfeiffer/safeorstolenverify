import { createFileRoute } from "@tanstack/react-router";
import PoshmarkStolenCheck from "@/pages/marketplace/PoshmarkStolenCheck";

export const Route = createFileRoute("/poshmark-stolen-check")({
  component: PoshmarkStolenCheck,
});
