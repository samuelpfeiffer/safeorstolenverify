import { createFileRoute } from "@tanstack/react-router";
import JewelryCheck from "@/pages/items/JewelryCheck";

export const Route = createFileRoute("/check-jewelry-stolen")({
  component: JewelryCheck,
});
