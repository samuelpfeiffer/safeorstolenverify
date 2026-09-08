import { createFileRoute } from "@tanstack/react-router";
import TestimonialsPage from "@/pages/TestimonialsPage";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});
