import { createFileRoute } from "@tanstack/react-router";
import TheftAZPage from "@/pages/TheftAZPage";

export const Route = createFileRoute("/theftaz")({
  component: TheftAZPage,
});
