import { createFileRoute } from "@tanstack/react-router";
import StolenCheckLosAngeles from "@/pages/city/StolenCheckLosAngeles";

export const Route = createFileRoute("/stolen-check-los-angeles")({
  component: StolenCheckLosAngeles,
});
