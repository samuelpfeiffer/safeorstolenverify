import { createFileRoute } from "@tanstack/react-router";
import HowToFindImeiNumber from "@/pages/blog/cluster/HowToFindImeiNumber";

export const Route = createFileRoute("/blog/how-to-find-imei-number")({
  component: HowToFindImeiNumber,
});
