import { createFileRoute } from "@tanstack/react-router";
import CheckElectronicsPage from "@/pages/CheckElectronicsPage";

export const Route = createFileRoute("/check-electronics")({
  component: CheckElectronicsPage,
});
