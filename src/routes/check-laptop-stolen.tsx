import { createFileRoute } from "@tanstack/react-router";
import LaptopSerialCheck from "@/pages/items/LaptopSerialCheck";

export const Route = createFileRoute("/check-laptop-stolen")({
  component: LaptopSerialCheck,
});
