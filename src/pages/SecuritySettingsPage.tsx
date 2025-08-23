
import { SecurityDashboard } from "@/components/security/SecurityDashboard";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { Navigate } from "react-router-dom";

const SecuritySettingsPage = () => {
  const { isAuthenticated, loading } = useUnifiedAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?tab=signin" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Security Settings</h1>
        <SecurityDashboard />
      </div>
    </div>
  );
};

export default SecuritySettingsPage;
