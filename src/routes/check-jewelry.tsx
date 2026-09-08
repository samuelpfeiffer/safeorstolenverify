import { createFileRoute } from "@tanstack/react-router";
import CheckJewelryPage from "@/pages/CheckJewelryPage";

export const Route = createFileRoute("/check-jewelry")({
  component: CheckJewelryPage,
});
