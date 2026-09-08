import { createFileRoute } from "@tanstack/react-router";
import OfferupScamProtection from "@/pages/guides/OfferupScamProtection";

export const Route = createFileRoute("/guides/offerup-scam-protection")({
  component: OfferupScamProtection,
});
