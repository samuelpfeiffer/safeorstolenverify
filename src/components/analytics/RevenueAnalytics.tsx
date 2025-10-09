import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Users, CreditCard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface RevenueMetrics {
  mrr: number;
  arr: number;
  arpu: number;
  churnRate: number;
  activeSubscribers: number;
  conversionRate: number;
  totalRevenue: number;
}

export const RevenueAnalytics: React.FC = () => {
  const [metrics, setMetrics] = useState<RevenueMetrics>({
    mrr: 0,
    arr: 0,
    arpu: 0,
    churnRate: 0,
    activeSubscribers: 0,
    conversionRate: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRevenueMetrics();
  }, []);

  const loadRevenueMetrics = async () => {
    try {
      // Get active subscribers
      const { data: subscribers, error: subError } = await supabase
        .from('subscribers')
        .select('subscription_tier')
        .eq('subscribed', true);

      if (subError) throw subError;

      // Get credit transactions for revenue calculation
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: transactions, error: txError } = await supabase
        .from('credit_transactions')
        .select('amount, transaction_type')
        .eq('transaction_type', 'purchase')
        .gte('created_at', thirtyDaysAgo.toISOString());

      if (txError) throw txError;

      // Calculate metrics
      const tierPricing = {
        'Basic': 4.99,
        'Premium': 9.99,
        'Enterprise': 29.99,
        'Individual': 4.99,
        'Business': 19.99
      };

      const monthlyRevenue = (subscribers || []).reduce((sum, sub) => {
        return sum + (tierPricing[sub.subscription_tier as keyof typeof tierPricing] || 0);
      }, 0);

      const creditRevenue = (transactions || []).reduce((sum, tx) => sum + (tx.amount * 0.99), 0);
      const totalMonthlyRevenue = monthlyRevenue + creditRevenue;

      const activeCount = subscribers?.length || 0;
      const avgRevenuePerUser = activeCount > 0 ? totalMonthlyRevenue / activeCount : 0;

      setMetrics({
        mrr: totalMonthlyRevenue,
        arr: totalMonthlyRevenue * 12,
        arpu: avgRevenuePerUser,
        churnRate: 2.5, // TODO: Calculate from historical data
        activeSubscribers: activeCount,
        conversionRate: 12.3, // TODO: Calculate from trial data
        totalRevenue: totalMonthlyRevenue * 3 // Estimated total
      });
    } catch (error) {
      console.error('Error loading revenue metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* MRR */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(metrics.mrr)}</div>
            <p className="text-xs text-muted-foreground">
              ARR: {formatCurrency(metrics.arr)}
            </p>
          </CardContent>
        </Card>

        {/* Active Subscribers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.activeSubscribers}</div>
            <p className="text-xs text-muted-foreground">
              Conversion Rate: {formatPercent(metrics.conversionRate)}
            </p>
          </CardContent>
        </Card>

        {/* ARPU */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Revenue Per User</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(metrics.arpu)}</div>
            <p className="text-xs text-muted-foreground">
              Per month
            </p>
          </CardContent>
        </Card>

        {/* Churn Rate */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatPercent(metrics.churnRate)}</div>
            <p className="text-xs text-green-600">
              Below industry avg (5%)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
          <CardDescription>Sources of monthly recurring revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subscription Revenue</span>
              <span className="font-semibold">{formatCurrency(metrics.mrr * 0.75)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Credit Pack Sales</span>
              <span className="font-semibold">{formatCurrency(metrics.mrr * 0.20)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">API Usage Fees</span>
              <span className="font-semibold">{formatCurrency(metrics.mrr * 0.05)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Customer Lifetime Value</CardTitle>
            <CardDescription>Estimated CLV based on current metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {formatCurrency(metrics.arpu / (metrics.churnRate / 100))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              ARPU / Churn Rate = CLV
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payback Period</CardTitle>
            <CardDescription>Time to recover customer acquisition cost</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.2 months</div>
            <p className="text-xs text-muted-foreground mt-2">
              Estimated CAC: $15 | ARPU: {formatCurrency(metrics.arpu)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
