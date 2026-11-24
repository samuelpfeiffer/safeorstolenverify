import { createFileRoute } from "@tanstack/react-router";
import NintendoSwitchSerialCheck from "@/pages/items/NintendoSwitchSerialCheck";

export const Route = createFileRoute("/nintendo-switch-serial-number-check")({
  component: NintendoSwitchSerialCheck,
});
