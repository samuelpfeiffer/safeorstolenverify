import { createFileRoute } from "@tanstack/react-router";
import IsMyIPhoneStolenPage from "@/pages/IsMyIPhoneStolenPage";

export const Route = createFileRoute("/is-my-iphone-stolen")({
  component: IsMyIPhoneStolenPage,
});
