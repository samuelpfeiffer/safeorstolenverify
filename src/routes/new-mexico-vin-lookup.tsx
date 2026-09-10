import { createFileRoute } from "@tanstack/react-router";
import NewMexicoVinLookup from "@/pages/NewMexicoVinLookup";

export const Route = createFileRoute("/new-mexico-vin-lookup")({
  component: NewMexicoVinLookup,
});
