import { createFileRoute } from "@tanstack/react-router";
import BicycleSerialCheck from "@/pages/items/BicycleSerialCheck";

export const Route = createFileRoute("/check-bicycle-stolen")({
  component: BicycleSerialCheck,
});
