import { createFileRoute } from "@tanstack/react-router";
import HowToCheckIfPhoneStolenPage from "@/pages/HowToCheckIfPhoneStolenPage";

export const Route = createFileRoute("/how-to-check-if-phone-stolen")({
  component: HowToCheckIfPhoneStolenPage,
});
