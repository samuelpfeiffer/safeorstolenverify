import { createFileRoute } from "@tanstack/react-router";
import SharedVerificationPage from "@/pages/SharedVerificationPage";

export const Route = createFileRoute("/verification/shared/$token")({
  component: SharedVerificationPage,
});
