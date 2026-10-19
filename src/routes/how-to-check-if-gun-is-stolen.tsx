import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/HowToCheckIfGunStolenPage";
export const Route = createFileRoute("/how-to-check-if-gun-is-stolen")({
  head: () => ({ meta: [
    { title: "How to Check if a Gun Is Stolen | SafeOrStolen" },
    { name: "description", content: "Check a gun serial before buying. Open official Florida, Ohio and Utah public searches, compare any matching report, and understand limited coverage." },
    { property: "og:title", content: "How to Check if a Gun Is Stolen | SafeOrStolen" },
    { property: "og:description", content: "Find the serial, run a check and open official public searches yourself. A miss is not found, not safe." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Page,
});
