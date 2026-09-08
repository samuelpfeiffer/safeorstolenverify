import { createFileRoute } from "@tanstack/react-router";
import CheckIfPhoneStolenGuide from "@/pages/blog/CheckIfPhoneStolenGuide";

export const Route = createFileRoute("/blog/check-if-phone-stolen-guide")({
  component: CheckIfPhoneStolenGuide,
});
