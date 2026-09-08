import { createFileRoute } from "@tanstack/react-router";
import CheckImeiStolenPage from "@/pages/CheckImeiStolenPage";

export const Route = createFileRoute("/check-imei-stolen")({
  component: CheckImeiStolenPage,
});
