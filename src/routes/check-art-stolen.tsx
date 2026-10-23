import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/CheckArtStolenPage";

export const Route = createFileRoute("/check-art-stolen")({
  component: Page,
});
