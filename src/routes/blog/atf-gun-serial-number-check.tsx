import { createFileRoute } from "@tanstack/react-router";
import ATFGunSerialNumberCheckGuide from "@/pages/blog/ATFGunSerialNumberCheckGuide";

export const Route = createFileRoute("/blog/atf-gun-serial-number-check")({
  component: ATFGunSerialNumberCheckGuide,
});
