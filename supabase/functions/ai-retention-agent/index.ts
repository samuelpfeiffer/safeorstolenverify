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
  const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
  const resendApiKey = Deno.env.get('RESEND_API_KEY');

  console.log('[ai-retention-agent] Starting retention analysis...');

  const { data: agentRun } = await supabase
    .from('ai_agent_runs')
    .insert({
      agent_name: 'ai-retention-agent',
      status: 'running',
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  try {
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, email, full_name, search_count, created_at, updated_at, subscription_tier')
      .not('email', 'is', null)
      .order('updated_at', { ascending: true })
      .limit(100);

    if (profilesError) throw profilesError;

    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const atRiskUsers: any[] = [];
    const recommendations: any[] = [];

    for (const user of profiles || []) {
      const lastActive = new Date(user.updated_at);
      const daysSinceActive = Math.floor((now.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
      
      let churnRisk = 0;
      const riskFactors: string[] = [];

      if (lastActive < thirtyDaysAgo) {
        churnRisk += 40;
        riskFactors.push(`Inactive for ${daysSinceActive} days`);
      } else if (lastActive < sevenDaysAgo) {
        churnRisk += 20;
        riskFactors.push(`Last active ${daysSinceActive} days ago`);
      }

      if (user.search_count === 0) {
        churnRisk += 30;
        riskFactors.push('Never performed a search');
      } else if (user.search_count < 3) {
        churnRisk += 15;
        riskFactors.push('Low search activity');
      }

      if (user.subscription_tier === 'free' || !user.subscription_tier) {
        churnRisk += 10;
        riskFactors.push('Free tier user');
      }

      if (churnRisk >= 40) {
        atRiskUsers.push({
          id: user.id,
          email: user.email,
          name: user.full_name,
          churn_risk: Math.min(churnRisk, 100),
          risk_factors: riskFactors,
          days_inactive: daysSinceActive,
        });
      }
    }

    console.log(`[ai-retention-agent] Found ${atRiskUsers.length} at-risk users`);

    if (anthropicApiKey && atRiskUsers.length > 0) {
      try {
        const aiResponse = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'x-api-key': anthropicApiKey,
            'anthropic-version': '2023-06-01',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-5-20250514',
            max_tokens: 2048,
            system: `You are a user retention expert for SafeOrStolen.com. Generate personalized re-engagement strategies.
Return JSON: { "strategies": [{"user_segment": "", "email_subject": "", "email_preview": "", "key_message": "", "cta": ""}] }`,
            messages: [
              {
                role: 'user',
                content: `Generate retention strategies for these at-risk user segments:
- Users inactive 30+ days: ${atRiskUsers.filter(u => u.days_inactive >= 30).length}
- Users who never searched: ${atRiskUsers.filter(u => u.risk_factors.includes('Never performed a search')).length}
- Free tier inactive users: ${atRiskUsers.filter(u => u.risk_factors.includes('Free tier user')).length}`
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
              
              for (const strategy of parsed.strategies || []) {
                recommendations.push({
                  agent_name: 'ai-retention-agent',
                  category: 'retention',
                  priority: 'high',
                  title: `Retention campaign: ${strategy.user_segment}`,
                  description: strategy.key_message,
                  action_data: {
                    email_subject: strategy.email_subject,
                    email_preview: strategy.email_preview,
                    cta: strategy.cta,
                    target_users: atRiskUsers.length,
                  },
                  status: 'pending',
                });
              }
            }
          } catch { }
        }
      } catch (aiError) {
        console.error('[ai-retention-agent] AI analysis failed:', aiError);
      }
    }

    if (atRiskUsers.length > 0) {
      recommendations.push({
        agent_name: 'ai-retention-agent',
        category: 'retention',
        priority: atRiskUsers.filter(u => u.churn_risk >= 70).length > 5 ? 'critical' : 'high',
        title: `${atRiskUsers.length} users at risk of churning`,
        description: `High risk: ${atRiskUsers.filter(u => u.churn_risk >= 70).length}, Medium risk: ${atRiskUsers.filter(u => u.churn_risk >= 40 && u.churn_risk < 70).length}`,
        action_data: {
          at_risk_summary: {
            total: atRiskUsers.length,
            high_risk: atRiskUsers.filter(u => u.churn_risk >= 70).length,
            medium_risk: atRiskUsers.filter(u => u.churn_risk >= 40 && u.churn_risk < 70).length,
          },
          sample_users: atRiskUsers.slice(0, 5),
        },
        status: 'pending',
      });
    }

    if (recommendations.length > 0) {
      await supabase.from('ai_recommendations').insert(recommendations);
    }

    const churnPatterns = {
      inactive_30_days: atRiskUsers.filter(u => u.days_inactive >= 30).length,
      never_searched: atRiskUsers.filter(u => u.risk_factors.includes('Never performed a search')).length,
      free_tier_inactive: atRiskUsers.filter(u => u.risk_factors.includes('Free tier user')).length,
    };

    await supabase.from('ai_agent_learnings').insert({
      agent_name: 'ai-retention-agent',
      pattern_type: 'churn_patterns',
      pattern_data: churnPatterns,
      confidence_score: 75,
    });

    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          output_data: {
            users_analyzed: profiles?.length || 0,
            at_risk_users: atRiskUsers.length,
            recommendations_created: recommendations.length,
          },
        })
        .eq('id', agentRun.id);
    }

    console.log(`[ai-retention-agent] Complete - ${atRiskUsers.length} at-risk users identified`);

    return new Response(JSON.stringify({
      success: true,
      users_analyzed: profiles?.length || 0,
      at_risk: atRiskUsers.length,
      recommendations: recommendations.length,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-retention-agent] Error:', error);

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
