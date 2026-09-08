import { createFileRoute } from "@tanstack/react-router";
import BicycleStolenSerialNumberCheck from "@/pages/blog/BicycleStolenSerialNumberCheck";

export const Route = createFileRoute("/blog/bicycle-stolen-serial-number-check")({
  component: BicycleStolenSerialNumberCheck,
});
