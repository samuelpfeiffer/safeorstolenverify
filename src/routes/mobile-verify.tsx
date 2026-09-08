import { createFileRoute } from "@tanstack/react-router";
import MobileVerifyPage from "@/mobile/pages/MobileVerifyPage";

export const Route = createFileRoute("/mobile-verify")({
  component: MobileVerifyPage,
});
