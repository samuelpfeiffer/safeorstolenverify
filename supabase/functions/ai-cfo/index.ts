import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('[AI-CFO] Starting financial optimization cycle...');

    // Get financial data
    const { data: purchases } = await supabase
      .from('purchases')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(500);

    const { data: checkoutSessions } = await supabase
      .from('checkout_sessions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    // Calculate financial metrics
    const completedPurchases = purchases?.filter(p => p.status === 'completed') || [];
    const totalRevenue = completedPurchases.reduce((acc, p) => acc + (p.amount || 0), 0);
    const avgTransactionValue = completedPurchases.length > 0 ? totalRevenue / completedPurchases.length : 0;
    const conversionRate = purchases?.length ? (completedPurchases.length / purchases.length) * 100 : 0;

    // Revenue by day
    const revenueByDay = completedPurchases.reduce((acc: any, p) => {
      const day = new Date(p.created_at).toISOString().split('T')[0];
      acc[day] = (acc[day] || 0) + (p.amount || 0);
      return acc;
    }, {});

    const cfoPrompt = `You are the CFO AI of SafeOrStolen.com. Make financial decisions to maximize profitability and sustainable growth:

FINANCIAL DATA:
- Total Revenue (last 500 transactions): $${(totalRevenue / 100).toFixed(2)}
- Average Transaction Value: $${(avgTransactionValue / 100).toFixed(2)}
- Conversion Rate: ${conversionRate.toFixed(2)}%
- Completed Transactions: ${completedPurchases.length}
- Failed/Pending Transactions: ${(purchases?.length || 0) - completedPurchases.length}
- Revenue Trend: ${JSON.stringify(Object.entries(revenueByDay).slice(-7), null, 2)}

YOUR RESPONSIBILITIES:
1. Pricing optimization
2. Revenue maximization
3. Cost management
4. Financial forecasting
5. Budget allocation
6. Profitability analysis

DECISION AREAS:
- Pricing strategy adjustments
- Discount and promotion strategies
- Cost reduction opportunities
- Revenue diversification
- Payment optimization
- Financial risk management

Make 3-5 financial decisions with quantified impact estimates.

Return as JSON:
{
  "decisions": [
    {
      "decision": "specific financial decision",
      "reasoning": "financial justification with numbers",
      "expectedImpact": "revenue/cost impact in dollars",
      "priority": "critical/high/medium",
      "actions": ["action 1", "action 2"],
      "metrics": {
        "revenue_impact": 0,
        "cost_impact": 0,
        "roi_estimate": 0
      }
    }
  ],
  "financialHealth": {
    "revenue": ${totalRevenue / 100},
    "avgTransactionValue": ${avgTransactionValue / 100},
    "conversionRate": ${conversionRate},
    "recommendations": ["financial rec 1", "rec 2"]
  }
}`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are the CFO AI focused on financial health, profitability, and sustainable growth. Make data-driven financial decisions.'
          },
          { role: 'user', content: cfoPrompt }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = JSON.parse(data.choices[0].message.content);

    // Store financial decisions
    const decisionsToStore = analysis.decisions?.map((d: any) => ({
      executive_role: 'CFO',
      decision_type: 'financial',
      decision_data: d,
      reasoning: d.reasoning,
      confidence: 0.91,
      priority: d.priority,
      status: 'pending',
      impact_score: d.metrics?.revenue_impact || 0
    }));

    if (decisionsToStore?.length > 0) {
      await supabase.from('ai_executive_decisions').insert(decisionsToStore);
    }

    // Update CFO executive status
    await supabase
      .from('ai_executives')
      .update({
        last_decision_at: new Date().toISOString(),
        decisions_count: supabase.raw('decisions_count + ' + (decisionsToStore?.length || 0)),
        updated_at: new Date().toISOString()
      })
      .eq('role', 'CFO');

    // Store financial metrics
    await supabase.from('business_metrics').insert({
      metric_type: 'financial_health',
      metric_value: totalRevenue / 100,
      metric_data: analysis.financialHealth
    });

    console.log('[AI-CFO] Financial decisions made:', decisionsToStore?.length || 0);

    return new Response(JSON.stringify({
      success: true,
      decisions: analysis.decisions,
      financialHealth: analysis.financialHealth,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[AI-CFO] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
