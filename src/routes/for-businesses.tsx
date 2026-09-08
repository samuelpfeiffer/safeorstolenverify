import { createFileRoute } from "@tanstack/react-router";
import ForBusinesses from "@/pages/business/ForBusinesses";

export const Route = createFileRoute("/for-businesses")({
  component: ForBusinesses,
});
