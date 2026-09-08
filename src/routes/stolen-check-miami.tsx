import { createFileRoute } from "@tanstack/react-router";
import StolenCheckMiami from "@/pages/city/StolenCheckMiami";

export const Route = createFileRoute("/stolen-check-miami")({
  component: StolenCheckMiami,
});
