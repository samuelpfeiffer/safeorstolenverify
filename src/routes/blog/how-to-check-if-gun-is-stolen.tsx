import { createFileRoute } from "@tanstack/react-router";
import GunSerialNumberCheckGuide from "@/pages/blog/GunSerialNumberCheckGuide";

export const Route = createFileRoute("/blog/how-to-check-if-gun-is-stolen")({
  component: GunSerialNumberCheckGuide,
});
