import { createFileRoute } from "@tanstack/react-router";
import FreeVINLookupGuide from "@/pages/blog/FreeVINLookupGuide";

export const Route = createFileRoute("/blog/free-vin-lookup-guide")({
  component: FreeVINLookupGuide,
});
