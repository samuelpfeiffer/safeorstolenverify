import { createFileRoute } from "@tanstack/react-router";
import PressReleasePage from "@/pages/PressReleasePage";

export const Route = createFileRoute("/press-release")({
  component: PressReleasePage,
});
