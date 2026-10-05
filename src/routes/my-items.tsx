import { createFileRoute } from "@tanstack/react-router";
import MyItemsPage from "@/pages/MyItemsPage";

export const Route = createFileRoute("/my-items")({
  component: MyItemsPage,
});
