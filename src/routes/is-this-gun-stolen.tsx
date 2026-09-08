import { createFileRoute } from "@tanstack/react-router";
import { CheckStolenFirearm as CheckStolenFirearmPage } from "@/pages/traffic/StolenCheckPages";

export const Route = createFileRoute("/is-this-gun-stolen")({
  component: CheckStolenFirearmPage,
});
