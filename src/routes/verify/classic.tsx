import { createFileRoute } from "@tanstack/react-router";
import { Navigate } from "@/lib/router-compat";

export const Route = createFileRoute("/verify/classic")({
  component: () => (<Navigate to="/verify" replace />),
  head: () => ({
    meta: [
      { title: "Classic Verification — Stolen Item Check | SafeOrStolen" },
      {
        name: "description",
        content:
          "Classic stolen item verification lookup. Check IMEI, VIN, serial numbers, license plates, firearms, and bicycles against verified databases in about 3 seconds.",
      },
      { property: "og:title", content: "Classic Verification — Stolen Item Check | SafeOrStolen" },
      {
        property: "og:description",
        content:
          "Classic stolen item verification lookup. Check IMEI, VIN, serial numbers, license plates, firearms, and bicycles against verified databases in about 3 seconds.",
      },
      { property: "og:url", content: "https://safeorstolen.com/verify/classic" },
      { name: "twitter:title", content: "Classic Verification — Stolen Item Check | SafeOrStolen" },
      {
        name: "twitter:description",
        content:
          "Classic stolen item verification lookup. Check IMEI, VIN, serial numbers, license plates, firearms, and bicycles against verified databases in about 3 seconds.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://safeorstolen.com/verify/classic" },
    ],
  }),
});
