import { createFileRoute } from "@tanstack/react-router";
import AirPodsSerialCheck from "@/pages/items/AirPodsSerialCheck";

export const Route = createFileRoute("/airpods-serial-number-check")({
  component: AirPodsSerialCheck,
});
