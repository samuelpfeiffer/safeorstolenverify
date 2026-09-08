import { createFileRoute } from "@tanstack/react-router";
import VsDeviceCheckCA from "@/pages/comparisons/VsDeviceCheckCA";

export const Route = createFileRoute("/vs-devicecheck-ca")({
  component: VsDeviceCheckCA,
});
