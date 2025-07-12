import { Badge } from "@/components/ui/badge";

export const AdminPageHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-300">Monitor and manage Safe or Stolen platform</p>
      <Badge variant="outline" className="mt-2 border-sos-orange text-sos-orange">
        Administrator Access
      </Badge>
    </div>
  );
};