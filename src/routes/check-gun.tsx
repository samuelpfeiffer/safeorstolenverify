import { createFileRoute } from "@tanstack/react-router";
import CheckGunPage from "@/pages/CheckGunPage";

export const Route = createFileRoute("/check-gun")({
  component: CheckGunPage,
});
