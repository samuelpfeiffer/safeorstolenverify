import { createFileRoute } from "@tanstack/react-router";
import CrunchbasePage from "@/pages/CrunchbasePage";

export const Route = createFileRoute("/crunchbase")({
  component: CrunchbasePage,
});
