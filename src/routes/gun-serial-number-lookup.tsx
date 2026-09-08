import { createFileRoute } from "@tanstack/react-router";
import GunSerialNumberLookupPage from "@/pages/GunSerialNumberLookupPage";

export const Route = createFileRoute("/gun-serial-number-lookup")({
  component: GunSerialNumberLookupPage,
});
