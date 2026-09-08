import { createFileRoute } from "@tanstack/react-router";
import GamingConsoleCheck from "@/pages/items/GamingConsoleCheck";

export const Route = createFileRoute("/check-gaming-console-stolen")({
  component: GamingConsoleCheck,
});
