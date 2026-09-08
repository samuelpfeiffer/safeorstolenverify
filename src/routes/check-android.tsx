import { createFileRoute } from "@tanstack/react-router";
import CheckAndroidPage from "@/pages/CheckAndroidPage";

export const Route = createFileRoute("/check-android")({
  component: CheckAndroidPage,
});
