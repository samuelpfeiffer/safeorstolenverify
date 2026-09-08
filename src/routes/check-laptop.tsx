import { createFileRoute } from "@tanstack/react-router";
import CheckLaptopPage from "@/pages/CheckLaptopPage";

export const Route = createFileRoute("/check-laptop")({
  component: CheckLaptopPage,
});
