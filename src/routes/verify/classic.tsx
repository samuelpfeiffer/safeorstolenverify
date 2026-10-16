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
          "Check an IMEI, VIN, serial number, license plate, gun or bike for theft reports. Results in a few seconds, with every source listed. 2 free checks.",
      },
      { property: "og:title", content: "Classic Verification — Stolen Item Check | SafeOrStolen" },
      {
        property: "og:description",
        content:
          "Check an IMEI, VIN, serial number, license plate, gun or bike for theft reports. Results in a few seconds, with every source listed. 2 free checks.",
      },
      { property: "og:url", content: "https://safeorstolen.com/verify/classic" },
      { name: "twitter:title", content: "Classic Verification — Stolen Item Check | SafeOrStolen" },
      {
        name: "twitter:description",
        content:
          "Check an IMEI, VIN, serial number, license plate, gun or bike for theft reports. Results in a few seconds, with every source listed. 2 free checks.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://safeorstolen.com/verify/classic" },
    ],
  }),
});
