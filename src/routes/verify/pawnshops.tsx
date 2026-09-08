import { createFileRoute } from "@tanstack/react-router";
import VerifyPawnshopsPage from "@/pages/VerifyPawnshopsPage";

export const Route = createFileRoute("/verify/pawnshops")({
  component: VerifyPawnshopsPage,
});
