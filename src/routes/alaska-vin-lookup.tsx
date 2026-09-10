import { createFileRoute } from "@tanstack/react-router";
import AlaskaVinLookup from "@/pages/AlaskaVinLookup";

export const Route = createFileRoute("/alaska-vin-lookup")({
  component: AlaskaVinLookup,
});
