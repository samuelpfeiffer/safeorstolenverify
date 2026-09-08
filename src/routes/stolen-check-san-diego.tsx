import { createFileRoute } from "@tanstack/react-router";
import StolenCheckSanDiego from "@/pages/city/StolenCheckSanDiego";

export const Route = createFileRoute("/stolen-check-san-diego")({
  component: StolenCheckSanDiego,
});
