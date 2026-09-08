import { createFileRoute } from "@tanstack/react-router";
import CheckFirearmPage from "@/pages/CheckFirearmPage";

export const Route = createFileRoute("/check-firearm")({
  component: CheckFirearmPage,
});
