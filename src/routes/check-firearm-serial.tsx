import { createFileRoute } from "@tanstack/react-router";
import FirearmSerialCheck from "@/pages/items/FirearmSerialCheck";

export const Route = createFileRoute("/check-firearm-serial")({
  component: FirearmSerialCheck,
});
