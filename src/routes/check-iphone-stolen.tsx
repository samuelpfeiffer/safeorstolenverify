import { createFileRoute } from "@tanstack/react-router";
import IPhoneIMEICheck from "@/pages/items/IPhoneIMEICheck";

export const Route = createFileRoute("/check-iphone-stolen")({
  component: IPhoneIMEICheck,
});
