import { createFileRoute } from "@tanstack/react-router";
import ProofRecordPage from "@/pages/ProofRecordPage";

export const Route = createFileRoute("/proof/$id")({
  component: ProofRecordPage,
});
