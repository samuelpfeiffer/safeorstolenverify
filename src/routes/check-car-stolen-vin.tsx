import { createFileRoute } from "@tanstack/react-router";
import CarVINStolenCheck from "@/pages/items/CarVINStolenCheck";

export const Route = createFileRoute("/check-car-stolen-vin")({
  component: CarVINStolenCheck,
});
