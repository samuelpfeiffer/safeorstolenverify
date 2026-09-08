import { createFileRoute } from "@tanstack/react-router";
import StolenCheckHouston from "@/pages/city/StolenCheckHouston";

export const Route = createFileRoute("/stolen-check-houston")({
  component: StolenCheckHouston,
});
