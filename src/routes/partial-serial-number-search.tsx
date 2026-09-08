import { createFileRoute } from "@tanstack/react-router";
import PartialSerialNumberSearchPage from "@/pages/PartialSerialNumberSearchPage";

export const Route = createFileRoute("/partial-serial-number-search")({
  component: PartialSerialNumberSearchPage,
});
