import { createFileRoute } from "@tanstack/react-router";
import StolenCheckChicago from "@/pages/city/StolenCheckChicago";

export const Route = createFileRoute("/stolen-check-chicago")({
  component: StolenCheckChicago,
});
