import { createFileRoute } from "@tanstack/react-router";
import AndroidPhoneCheck from "@/pages/items/AndroidPhoneCheck";

export const Route = createFileRoute("/check-android-phone-stolen")({
  component: AndroidPhoneCheck,
});
