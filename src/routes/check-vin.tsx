import { createFileRoute } from "@tanstack/react-router";
import CheckVinPage from "@/pages/CheckVinPage";

export const Route = createFileRoute("/check-vin")({
  component: CheckVinPage,
});
