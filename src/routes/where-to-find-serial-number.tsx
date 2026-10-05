import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/WhereToFindSerialNumberPage";
export const Route = createFileRoute("/where-to-find-serial-number")({
  component: Page,
});
