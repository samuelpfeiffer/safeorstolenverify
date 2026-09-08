import { createFileRoute } from "@tanstack/react-router";
import VerifiedResultPage from "@/pages/VerifiedResultPage";

export const Route = createFileRoute("/verified/$id")({
  component: VerifiedResultPage,
});
