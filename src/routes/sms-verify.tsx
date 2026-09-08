import { createFileRoute } from "@tanstack/react-router";
import SMSVerifyPage from "@/pages/SMSVerifyPage";

export const Route = createFileRoute("/sms-verify")({
  component: SMSVerifyPage,
});
