import { createFileRoute } from "@tanstack/react-router";
import VsStolenRegisterPage from "@/pages/VsStolenRegisterPage";

export const Route = createFileRoute("/vs-stolenregister")({
  component: VsStolenRegisterPage,
});
