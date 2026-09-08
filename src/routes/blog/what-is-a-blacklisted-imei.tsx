import { createFileRoute } from "@tanstack/react-router";
import WhatIsABlacklistedImei from "@/pages/blog/cluster/WhatIsABlacklistedImei";

export const Route = createFileRoute("/blog/what-is-a-blacklisted-imei")({
  component: WhatIsABlacklistedImei,
});
