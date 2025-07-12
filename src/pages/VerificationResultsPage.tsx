
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VerificationResultsPage = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API call using the ID
  const mockResult = {
    id: id,
    itemName: "iPhone 14 Pro",
    serialNumber: "ABC123456789",
    status: "safe", // "safe", "stolen", "suspicious"
    verifiedAt: new Date().toISOString(),
    details: {
      brand: "Apple",
      model: "iPhone 14 Pro",
      color: "Space Black",
      storage: "256GB"
    },
    sources: [
      "Police Database Check",
      "Insurance Claims Database",
      "Lost & Found Reports"
    ]
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "safe":
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bgColor: "bg-green-100",
          badge: "Safe to Purchase",
          badgeVariant: "default" as const
        };
      case "stolen":
        return {
          icon: AlertTriangle,
          color: "text-red-500",
          bgColor: "bg-red-100",
          badge: "Reported Stolen",
          badgeVariant: "destructive" as const
        };
      case "suspicious":
        return {
          icon: Clock,
          color: "text-yellow-500",
          bgColor: "bg-yellow-100",
          badge: "Requires Caution",
          badgeVariant: "secondary" as const
        };
      default:
        return {
          icon: Clock,
          color: "text-gray-500",
          bgColor: "bg-gray-100",
          badge: "Unknown",
          badgeVariant: "outline" as const
        };
    }
  };

  const statusInfo = getStatusInfo(mockResult.status);
  const StatusIcon = statusInfo.icon;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Verification Results</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Result Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{mockResult.itemName}</CardTitle>
                <Badge variant={statusInfo.badgeVariant}>{statusInfo.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Display */}
              <div className={`p-4 rounded-lg ${statusInfo.bgColor}`}>
                <div className="flex items-center gap-3">
                  <StatusIcon className={`h-6 w-6 ${statusInfo.color}`} />
                  <div>
                    <h3 className="font-semibold">Verification Status</h3>
                    <p className="text-sm text-gray-600">
                      {mockResult.status === "safe" && "This item appears safe to purchase based on our database checks."}
                      {mockResult.status === "stolen" && "This item has been reported as stolen. Do not purchase."}
                      {mockResult.status === "suspicious" && "This item requires additional verification before purchase."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div>
                <h3 className="font-semibold mb-3">Item Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Serial Number:</span>
                    <div className="font-mono">{mockResult.serialNumber}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Brand:</span>
                    <div>{mockResult.details.brand}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Model:</span>
                    <div>{mockResult.details.model}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Color:</span>
                    <div>{mockResult.details.color}</div>
                  </div>
                </div>
              </div>

              {/* Verification Sources */}
              <div>
                <h3 className="font-semibold mb-3">Sources Checked</h3>
                <ul className="space-y-2">
                  {mockResult.sources.map((source, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Verification Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-500">Verification ID:</span>
                  <div className="font-mono text-xs">{mockResult.id}</div>
                </div>
                <div>
                  <span className="text-gray-500">Checked On:</span>
                  <div>{new Date(mockResult.verifiedAt).toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {mockResult.status === "safe" && (
                  <p>This item appears safe to purchase. However, always exercise caution and verify the seller's identity.</p>
                )}
                {mockResult.status === "stolen" && (
                  <p className="text-red-600">Do not purchase this item. Consider reporting it to local authorities.</p>
                )}
                {mockResult.status === "suspicious" && (
                  <p className="text-yellow-600">Request additional documentation from the seller before proceeding.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationResultsPage;
