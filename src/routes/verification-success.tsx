import { createFileRoute } from "@tanstack/react-router";
import VerificationSuccessPage from "@/pages/VerificationSuccessPage";

export const Route = createFileRoute("/verification-success")({
  component: VerificationSuccessPage,
});
