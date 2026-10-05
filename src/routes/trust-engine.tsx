import { createFileRoute, redirect } from "@tanstack/react-router";

// The old Trust Engine page showed a simulated "CLEAN" result with a random
// score and sources it never searched. Send visitors to the real check.
export const Route = createFileRoute("/trust-engine")({
  beforeLoad: () => {
    throw redirect({ href: "/verify", statusCode: 301, replace: true });
  },
});
