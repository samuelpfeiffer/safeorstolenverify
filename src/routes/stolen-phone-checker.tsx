import { createFileRoute } from "@tanstack/react-router";
import StolenPhoneCheckerPage from "@/pages/StolenPhoneCheckerPage";

export const Route = createFileRoute("/stolen-phone-checker")({
  component: StolenPhoneCheckerPage,
});
