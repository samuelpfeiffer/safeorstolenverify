import { createFileRoute } from "@tanstack/react-router";
import WisconsinVinLookup from "@/pages/WisconsinVinLookup";

export const Route = createFileRoute("/wisconsin-vin-lookup")({
  component: WisconsinVinLookup,
});
