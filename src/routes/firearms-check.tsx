import { createFileRoute } from "@tanstack/react-router";
import FirearmsCheckPage from "@/pages/FirearmsCheckPage";

export const Route = createFileRoute("/firearms-check")({
  head: () => ({ meta: [
    { title: "Free Gun Serial Number Lookup: Is This Gun Stolen?" },
    { name: "description", content: "Check a gun serial number and open official Florida, Ohio and Utah searches yourself. Coverage is limited; a miss means not found, not safe." },
    { property: "og:title", content: "SafeOrStolen Gun Serial Number Checker" },
    { property: "og:description", content: "Check a serial and open official public searches yourself. Limited coverage; not found does not mean safe." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: FirearmsCheckPage,
});
