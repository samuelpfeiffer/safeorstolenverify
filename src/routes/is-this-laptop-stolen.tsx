import { createFileRoute } from "@tanstack/react-router";
import { CheckStolenLaptop as CheckStolenLaptopPage } from "@/pages/traffic/StolenCheckPages";

export const Route = createFileRoute("/is-this-laptop-stolen")({
  component: CheckStolenLaptopPage,
});
