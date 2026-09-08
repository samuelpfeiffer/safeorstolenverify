import { createFileRoute } from "@tanstack/react-router";
import FirearmSerialNumberVerification from "@/pages/blog/FirearmSerialNumberVerification";

export const Route = createFileRoute("/blog/firearm-serial-number-verification")({
  component: FirearmSerialNumberVerification,
});
