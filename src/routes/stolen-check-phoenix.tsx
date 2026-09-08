import { createFileRoute } from "@tanstack/react-router";
import StolenCheckPhoenix from "@/pages/city/StolenCheckPhoenix";

export const Route = createFileRoute("/stolen-check-phoenix")({
  component: StolenCheckPhoenix,
});
