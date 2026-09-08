import { createFileRoute } from "@tanstack/react-router";
import BuyingUsedPhoneChecklist from "@/pages/blog/cluster/BuyingUsedPhoneChecklist";

export const Route = createFileRoute("/blog/buying-used-phone-checklist")({
  component: BuyingUsedPhoneChecklist,
});
