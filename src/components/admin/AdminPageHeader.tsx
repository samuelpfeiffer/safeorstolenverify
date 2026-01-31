import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/common/Logo";

export const AdminPageHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Logo size="md" linkTo="/" />
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-300">Monitor and manage SafeOrStolen platform</p>
        </div>
      </div>
      <Badge variant="outline" className="mt-2 border-sos-orange text-sos-orange">
        Administrator Access
      </Badge>
    </div>
  );
};