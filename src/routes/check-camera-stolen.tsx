import { createFileRoute } from "@tanstack/react-router";
import CameraEquipmentCheck from "@/pages/items/CameraEquipmentCheck";

export const Route = createFileRoute("/check-camera-stolen")({
  component: CameraEquipmentCheck,
});
