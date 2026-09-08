import { createFileRoute } from "@tanstack/react-router";
import VerifyCraigslistItems from "@/pages/guides/VerifyCraigslistItems";

export const Route = createFileRoute("/guides/verify-craigslist-items")({
  component: VerifyCraigslistItems,
});
