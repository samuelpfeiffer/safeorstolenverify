import { createFileRoute } from "@tanstack/react-router";
import HowToCheckPhoneStolen from "@/pages/blog/HowToCheckPhoneStolen";

export const Route = createFileRoute("/blog/how-to-check-if-phone-stolen")({
  component: HowToCheckPhoneStolen,
});
