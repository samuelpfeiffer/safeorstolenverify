import { createFileRoute } from "@tanstack/react-router";
import PhoneBlacklistCheckPage from "@/pages/PhoneBlacklistCheckPage";

export const Route = createFileRoute("/phone-blacklist-check")({
  component: PhoneBlacklistCheckPage,
});
