import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { requireAdmin } from '../_shared/require-admin.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));


  // Admin-only: block non-admin callers before any privileged work

  const denied = await requireAdmin(req, corsHeaders);

  if (denied) return denied;

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');

  console.log('[ai-learning-agent] Starting learning cycle...');

  const { data: agentRun } = await supabase
    .from('ai_agent_runs')
    .insert({
      agent_name: 'ai-learning-agent',
      status: 'running',
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const { data: recentRuns, error: runsError } = await supabase
      .from('ai_agent_runs')
      .select('*')
      .gte('created_at', twentyFourHoursAgo.toISOString())
      .order('created_at', { ascending: false });

    if (runsError) throw runsError;

    const agentStats: Record<string, { total: number; success: number; failed: number; avgDuration: number }> = {};
    
    for (const run of recentRuns || []) {
      if (!agentStats[run.agent_name]) {
        agentStats[run.agent_name] = { total: 0, success: 0, failed: 0, avgDuration: 0 };
      }
      
      agentStats[run.agent_name].total++;
      
      if (run.status === 'completed') {
        agentStats[run.agent_name].success++;
      } else if (run.status === 'failed') {
        agentStats[run.agent_name].failed++;
      }

      if (run.started_at && run.completed_at) {
        const duration = new Date(run.completed_at).getTime() - new Date(run.started_at).getTime();
        agentStats[run.agent_name].avgDuration = 
          (agentStats[run.agent_name].avgDuration * (agentStats[run.agent_name].total - 1) + duration) / 
          agentStats[run.agent_name].total;
      }
    }

    const { data: recommendations } = await supabase
      .from('ai_recommendations')
      .select('*')
      .gte('created_at', twentyFourHoursAgo.toISOString());

    const recStats = {
      total: recommendations?.length || 0,
      implemented: recommendations?.filter(r => r.status === 'implemented').length || 0,
      approved: recommendations?.filter(r => r.status === 'approved').length || 0,
      dismissed: recommendations?.filter(r => r.status === 'dismissed').length || 0,
      pending: recommendations?.filter(r => r.status === 'pending').length || 0,
    };

    const { data: contentItems } = await supabase
      .from('ai_content_queue')
      .select('*')
      .gte('created_at', twentyFourHoursAgo.toISOString());

    const contentStats = {
      total: contentItems?.length || 0,
      published: contentItems?.filter(c => c.status === 'published').length || 0,
      rejected: contentItems?.filter(c => c.status === 'rejected').length || 0,
      avg_seo_score: contentItems?.length 
        ? contentItems.reduce((sum, c) => sum + (c.seo_score || 0), 0) / contentItems.length 
        : 0,
    };

    const { data: fraudAnalysis } = await supabase
      .from('fraud_analysis')
      .select('*')
      .gte('created_at', twentyFourHoursAgo.toISOString());

    const fraudStats = {
      total_analyzed: fraudAnalysis?.length || 0,
      flagged: fraudAnalysis?.filter(f => f.recommendation !== 'approve').length || 0,
      reviewed: fraudAnalysis?.filter(f => f.reviewed).length || 0,
    };

    const learnings: any = {
      agent_performance: agentStats,
      recommendation_effectiveness: recStats,
      content_quality: contentStats,
      fraud_detection: fraudStats,
      timestamp: now.toISOString(),
    };

    const insights: any[] = [];
    
    if (anthropicApiKey) {
      try {
        const aiResponse = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'x-api-key': anthropicApiKey,
            'anthropic-version': '2023-06-01',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-5',
            max_tokens: 2048,
            system: `You are a machine learning optimization expert. Analyze AI agent performance data and suggest improvements.
Return JSON: { "insights": [{"agent": "", "issue": "", "improvement": "", "priority": "high|medium|low"}], "system_health": "good|warning|critical" }`,
            messages: [
              {
                role: 'user',
                content: `Analyze this AI system performance data and suggest improvements:
${JSON.stringify(learnings, null, 2)}`
              }
            ],
          }),
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const aiContent = aiData.content?.[0]?.text || '';
          
          try {
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              insights.push(...(parsed.insights || []));
              learnings['system_health'] = parsed.system_health || 'good';
            }
          } catch { }
        }
      } catch (aiError) {
        console.error('[ai-learning-agent] AI analysis failed:', aiError);
      }
    }

    await supabase.from('ai_agent_learnings').insert({
      agent_name: 'ai-learning-agent',
      pattern_type: 'daily_system_analysis',
      pattern_data: learnings,
      confidence_score: 85,
    });

    const newRecommendations: any[] = [];
    
    for (const insight of insights) {
      newRecommendations.push({
        agent_name: 'ai-learning-agent',
        category: 'system_optimization',
        priority: insight.priority || 'medium',
        title: `Optimize ${insight.agent}: ${insight.issue}`,
        description: insight.improvement,
        action_data: { original_insight: insight },
        status: 'pending',
      });
    }

    for (const [agentName, stats] of Object.entries(agentStats)) {
      const successRate = stats.total > 0 ? (stats.success / stats.total) * 100 : 100;
      
      if (successRate < 80 && stats.total >= 2) {
        newRecommendations.push({
          agent_name: 'ai-learning-agent',
          category: 'system_optimization',
          priority: successRate < 50 ? 'critical' : 'high',
          title: `${agentName} has low success rate (${successRate.toFixed(1)}%)`,
          description: `${stats.failed} failures out of ${stats.total} runs in the last 24 hours. Review agent logs and configuration.`,
          action_data: { agent_stats: stats },
          status: 'pending',
        });
      }
    }

    if (newRecommendations.length > 0) {
      await supabase.from('ai_recommendations').insert(newRecommendations);
    }

    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          output_data: {
            agents_analyzed: Object.keys(agentStats).length,
            total_runs_analyzed: recentRuns?.length || 0,
            insights_generated: insights.length,
            recommendations_created: newRecommendations.length,
            system_health: learnings['system_health'] || 'unknown',
          },
        })
        .eq('id', agentRun.id);
    }

    console.log(`[ai-learning-agent] Complete - ${insights.length} insights, ${newRecommendations.length} recommendations`);

    return new Response(JSON.stringify({
      success: true,
      agents_analyzed: Object.keys(agentStats).length,
      insights: insights.length,
      recommendations: newRecommendations.length,
      learnings,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-learning-agent] Error:', error);

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
