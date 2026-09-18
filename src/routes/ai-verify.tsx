import { createFileRoute } from "@tanstack/react-router";
import { Navigate } from "@/lib/router-compat";

export const Route = createFileRoute("/ai-verify")({
  component: () => (<Navigate to="/verify" replace />),
  head: () => ({
    meta: [
      { title: "AI Verify — Stolen Item Verification | SafeOrStolen" },
      {
        name: "description",
        content:
          "AI-powered stolen item verification. Chat with SafeOrStolen AI to check IMEI, VIN, serial numbers, license plates, firearms, and bicycles in seconds.",
      },
      { property: "og:title", content: "AI Verify — Stolen Item Verification | SafeOrStolen" },
      {
        property: "og:description",
        content:
          "AI-powered stolen item verification. Chat with SafeOrStolen AI to check IMEI, VIN, serial numbers, license plates, firearms, and bicycles in seconds.",
      },
      { property: "og:url", content: "https://safeorstolen.com/ai-verify" },
      { name: "twitter:title", content: "AI Verify — Stolen Item Verification | SafeOrStolen" },
      {
        name: "twitter:description",
        content:
          "AI-powered stolen item verification. Chat with SafeOrStolen AI to check IMEI, VIN, serial numbers, license plates, firearms, and bicycles in seconds.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://safeorstolen.com/ai-verify" },
    ],
  }),
});
