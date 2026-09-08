import { createFileRoute } from "@tanstack/react-router";
import MotorcycleVINCheck from "@/pages/items/MotorcycleVINCheck";

export const Route = createFileRoute("/check-motorcycle-stolen-vin")({
  component: MotorcycleVINCheck,
});
