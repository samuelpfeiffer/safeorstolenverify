import { createFileRoute } from "@tanstack/react-router";
import VerifyItemBeforeMeetup from "@/pages/blog/VerifyItemBeforeMeetup";

export const Route = createFileRoute("/blog/verify-item-before-meetup")({
  component: VerifyItemBeforeMeetup,
});
