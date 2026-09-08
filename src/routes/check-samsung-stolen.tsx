import { createFileRoute } from "@tanstack/react-router";
import SamsungIMEICheck from "@/pages/items/SamsungIMEICheck";

export const Route = createFileRoute("/check-samsung-stolen")({
  component: SamsungIMEICheck,
});
