import { createFileRoute } from "@tanstack/react-router";
import PowerToolsCheck from "@/pages/items/PowerToolsCheck";

export const Route = createFileRoute("/check-power-tools-stolen")({
  component: PowerToolsCheck,
});
