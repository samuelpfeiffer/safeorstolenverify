import { createFileRoute } from "@tanstack/react-router";
import GuitarSerialCheckGuide from "@/pages/blog/GuitarSerialCheckGuide";

export const Route = createFileRoute("/blog/check-if-guitar-stolen")({
  component: GuitarSerialCheckGuide,
});
