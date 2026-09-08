import { createFileRoute } from "@tanstack/react-router";
import APIPage from "@/pages/APIPage";

export const Route = createFileRoute("/developers")({
  component: APIPage,
});
