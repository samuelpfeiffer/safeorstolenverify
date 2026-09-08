import { createFileRoute } from "@tanstack/react-router";
import StolenCheckSanAntonio from "@/pages/city/StolenCheckSanAntonio";

export const Route = createFileRoute("/stolen-check-san-antonio")({
  component: StolenCheckSanAntonio,
});
