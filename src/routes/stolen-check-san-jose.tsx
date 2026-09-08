import { createFileRoute } from "@tanstack/react-router";
import StolenCheckSanJose from "@/pages/city/StolenCheckSanJose";

export const Route = createFileRoute("/stolen-check-san-jose")({
  component: StolenCheckSanJose,
});
