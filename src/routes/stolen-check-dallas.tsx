import { createFileRoute } from "@tanstack/react-router";
import StolenCheckDallas from "@/pages/city/StolenCheckDallas";

export const Route = createFileRoute("/stolen-check-dallas")({
  component: StolenCheckDallas,
});
