import { createFileRoute } from "@tanstack/react-router";
import XboxStolenCheck from "@/pages/items/XboxStolenCheck";

export const Route = createFileRoute("/check-xbox")({
  component: XboxStolenCheck,
});
