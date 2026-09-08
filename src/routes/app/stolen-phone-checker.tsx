import { createFileRoute } from "@tanstack/react-router";
import StolenPhoneCheckerApp from "@/pages/app/StolenPhoneCheckerApp";

export const Route = createFileRoute("/app/stolen-phone-checker")({
  component: StolenPhoneCheckerApp,
});
