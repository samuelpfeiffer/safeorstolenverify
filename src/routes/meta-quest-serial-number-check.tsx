import { createFileRoute } from "@tanstack/react-router";
import MetaQuestSerialCheck from "@/pages/items/MetaQuestSerialCheck";

export const Route = createFileRoute("/meta-quest-serial-number-check")({
  component: MetaQuestSerialCheck,
});
