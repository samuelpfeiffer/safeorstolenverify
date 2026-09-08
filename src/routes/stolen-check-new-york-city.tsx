import { createFileRoute } from "@tanstack/react-router";
import StolenCheckNewYorkCity from "@/pages/city/StolenCheckNewYorkCity";

export const Route = createFileRoute("/stolen-check-new-york-city")({
  component: StolenCheckNewYorkCity,
});
