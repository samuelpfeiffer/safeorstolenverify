import { createFileRoute } from "@tanstack/react-router";
import TabletCheck from "@/pages/items/TabletCheck";

export const Route = createFileRoute("/check-tablet-stolen")({
  component: TabletCheck,
});
