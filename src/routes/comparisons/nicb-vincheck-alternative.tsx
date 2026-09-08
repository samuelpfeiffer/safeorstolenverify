import { createFileRoute } from "@tanstack/react-router";
import NICBVINCheckAlternative from "@/pages/comparisons/NICBVINCheckAlternative";

export const Route = createFileRoute("/comparisons/nicb-vincheck-alternative")({
  component: NICBVINCheckAlternative,
});
