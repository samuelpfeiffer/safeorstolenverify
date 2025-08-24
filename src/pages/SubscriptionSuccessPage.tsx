import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

export default function SubscriptionSuccessPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { session } = useAuth();

  const handleManageBilling = async () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to manage your billing.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe customer portal in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Error",
        description: "Failed to open billing portal. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sos text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <CardTitle className="text-white text-xl">
                Subscription Successful!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-center">
                Thank you for subscribing to SafeOrStolen! Your premium features are now active.
              </p>

              <div className="space-y-3">
                <Button
                  onClick={handleManageBilling}
                  disabled={isLoading}
                  className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  {isLoading ? "Opening..." : "Manage Billing"}
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Link to="/dashboard">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go to Dashboard
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full text-gray-400 hover:text-white"
                >
                  <Link to="/pricing">
                    View All Plans
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}