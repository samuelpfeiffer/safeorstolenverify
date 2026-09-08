import { createFileRoute } from "@tanstack/react-router";
import WatchSerialCheck from "@/pages/items/WatchSerialCheck";

export const Route = createFileRoute("/check-watch-stolen")({
  component: WatchSerialCheck,
});
