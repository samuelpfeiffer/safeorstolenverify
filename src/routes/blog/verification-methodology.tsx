import { createFileRoute } from "@tanstack/react-router";
import VerificationMethodology from "@/pages/blog/VerificationMethodology";

export const Route = createFileRoute("/blog/verification-methodology")({
  component: VerificationMethodology,
});
