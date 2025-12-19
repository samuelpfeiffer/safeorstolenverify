import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');

  console.log('[ai-analytics-agent] Starting analytics analysis...');

  // Create agent run record
  const { data: agentRun } = await supabase
    .from('ai_agent_runs')
    .insert({
      agent_name: 'ai-analytics-agent',
      status: 'running',
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Gather analytics data
    const [
      { count: totalUsers },
      { count: newUsersThisWeek },
      { count: totalStolenItems },
      { count: newReportsThisWeek },
      { count: totalVerifications },
      { data: itemsByType },
      { data: itemsByLocation },
    ] = await Promise.all([
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('profiles').select('*', { count: 'exact', head: true }).gte('created_at', sevenDaysAgo.toISOString()),
      supabase.from('stolen_items').select('*', { count: 'exact', head: true }),
      supabase.from('stolen_items').select('*', { count: 'exact', head: true }).gte('created_at', sevenDaysAgo.toISOString()),
      supabase.from('verification_searches').select('*', { count: 'exact', head: true }),
      supabase.from('stolen_items').select('item_type'),
      supabase.from('stolen_items').select('location'),
    ]);

    // Calculate theft patterns by type
    const typeBreakdown: Record<string, number> = {};
    for (const item of itemsByType || []) {
      typeBreakdown[item.item_type] = (typeBreakdown[item.item_type] || 0) + 1;
    }

    // Calculate location patterns
    const locationBreakdown: Record<string, number> = {};
    for (const item of itemsByLocation || []) {
      if (item.location) {
        const city = item.location.split(',')[0].trim();
        locationBreakdown[city] = (locationBreakdown[city] || 0) + 1;
      }
    }

    // Sort by count
    const topLocations = Object.entries(locationBreakdown)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    const topItemTypes = Object.entries(typeBreakdown)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    const analyticsData = {
      overview: {
        total_users: totalUsers || 0,
        new_users_7d: newUsersThisWeek || 0,
        total_stolen_reports: totalStolenItems || 0,
        new_reports_7d: newReportsThisWeek || 0,
        total_verifications: totalVerifications || 0,
      },
      theft_patterns: {
        by_item_type: topItemTypes,
        by_location: topLocations,
      },
      growth_metrics: {
        user_growth_rate: totalUsers ? ((newUsersThisWeek || 0) / totalUsers * 100).toFixed(2) + '%' : '0%',
        report_growth_rate: totalStolenItems ? ((newReportsThisWeek || 0) / totalStolenItems * 100).toFixed(2) + '%' : '0%',
      },
    };

    const recommendations: any[] = [];

    // AI-powered insights
    if (lovableApiKey) {
      try {
        const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lovableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash',
            messages: [
              {
                role: 'system',
                content: `You are a business intelligence analyst for SafeOrStolen.com.
Analyze data and provide actionable insights.
Return JSON: { "insights": [{"category": "", "title": "", "description": "", "recommendation": "", "priority": "high|medium|low"}] }`
              },
              {
                role: 'user',
                content: `Analyze this platform data and provide business insights:
${JSON.stringify(analyticsData, null, 2)}`
              }
            ],
          }),
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const aiContent = aiData.choices?.[0]?.message?.content || '';
          
          try {
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              
              for (const insight of parsed.insights || []) {
                recommendations.push({
                  agent_name: 'ai-analytics-agent',
                  category: 'analytics',
                  priority: insight.priority || 'medium',
                  title: insight.title,
                  description: `${insight.description}\n\nRecommendation: ${insight.recommendation}`,
                  action_data: {
                    insight_category: insight.category,
                    data_snapshot: analyticsData.overview,
                  },
                  status: 'pending',
                });
              }
            }
          } catch { }
        }
      } catch (aiError) {
        console.error('[ai-analytics-agent] AI analysis failed:', aiError);
      }
    }

    // Add automatic insights
    if (topItemTypes.length > 0) {
      const [topType, topCount] = topItemTypes[0];
      recommendations.push({
        agent_name: 'ai-analytics-agent',
        category: 'analytics',
        priority: 'medium',
        title: `Most reported item type: ${topType}`,
        description: `${topType} accounts for ${((topCount as number) / (totalStolenItems || 1) * 100).toFixed(1)}% of all stolen item reports. Consider creating targeted content about ${topType} theft prevention.`,
        action_data: {
          item_type: topType,
          count: topCount,
          percentage: ((topCount as number) / (totalStolenItems || 1) * 100).toFixed(1),
        },
        status: 'pending',
      });
    }

    if (topLocations.length > 0) {
      const [topLocation, locationCount] = topLocations[0];
      recommendations.push({
        agent_name: 'ai-analytics-agent',
        category: 'analytics',
        priority: 'medium',
        title: `Theft hotspot identified: ${topLocation}`,
        description: `${topLocation} has the highest number of theft reports (${locationCount}). Consider creating location-specific awareness content.`,
        action_data: {
          location: topLocation,
          count: locationCount,
        },
        status: 'pending',
      });
    }

    // Insert recommendations
    if (recommendations.length > 0) {
      await supabase.from('ai_recommendations').insert(recommendations);
    }

    // Store analytics as learning
    await supabase.from('ai_agent_learnings').insert({
      agent_name: 'ai-analytics-agent',
      pattern_type: 'daily_analytics',
      pattern_data: analyticsData,
      confidence_score: 90,
    });

    // Update agent run
    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          output_data: analyticsData,
        })
        .eq('id', agentRun.id);
    }

    console.log(`[ai-analytics-agent] Complete - ${recommendations.length} insights generated`);

    return new Response(JSON.stringify({
      success: true,
      analytics: analyticsData,
      insights: recommendations.length,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-analytics-agent] Error:', error);

    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'failed',
          completed_at: new Date().toISOString(),
          error_message: error instanceof Error ? error.message : 'Unknown error',
        })
        .eq('id', agentRun.id);
    }

    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
