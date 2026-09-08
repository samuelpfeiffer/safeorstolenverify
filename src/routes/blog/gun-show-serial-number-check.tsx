import { createFileRoute } from "@tanstack/react-router";
import GunShowSerialNumberCheckGuide from "@/pages/blog/GunShowSerialNumberCheckGuide";

export const Route = createFileRoute("/blog/gun-show-serial-number-check")({
  component: GunShowSerialNumberCheckGuide,
});
