import { createFileRoute } from "@tanstack/react-router";
import ProductHuntPage from "@/pages/ProductHuntPage";

export const Route = createFileRoute("/product-hunt")({
  component: ProductHuntPage,
});
