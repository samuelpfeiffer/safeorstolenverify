import { createFileRoute } from "@tanstack/react-router";
import StolenCheckPhiladelphia from "@/pages/city/StolenCheckPhiladelphia";

export const Route = createFileRoute("/stolen-check-philadelphia")({
  component: StolenCheckPhiladelphia,
});
