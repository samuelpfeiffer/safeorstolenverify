import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { requireAdmin } from '../_shared/require-admin.ts';
import { callClaude, parseJsonResponse } from '../_shared/anthropic.ts';

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
  const hasAnthropicKey = !!Deno.env.get('ANTHROPIC_API_KEY');

  console.log('[ai-fraud-detector] Starting fraud analysis...');

  const { data: agentRun } = await supabase
    .from('ai_agent_runs')
    .insert({ agent_name: 'ai-fraud-detector', status: 'running', started_at: new Date().toISOString() })
    .select()
    .single();

  try {
    let reportId: string | null = null;
    try { const body = await req.json(); reportId = body?.report_id; } catch { }

    let query = supabase.from('stolen_items').select('*').order('created_at', { ascending: false });

    if (reportId) {
      query = query.eq('id', reportId);
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      query = query.gte('created_at', yesterday.toISOString()).limit(20);
    }

    const { data: reports, error: reportsError } = await query;
    if (reportsError) throw reportsError;

    const { data: existingAnalysis } = await supabase.from('fraud_analysis').select('report_id');
    const analyzedSet = new Set((existingAnalysis || []).map(a => a.report_id));
    const unanalyzedReports = (reports || []).filter(r => !analyzedSet.has(r.id));

    console.log(`[ai-fraud-detector] Analyzing ${unanalyzedReports.length} reports`);

    const analysisResults: any[] = [];

    for (const report of unanalyzedReports) {
      const indicators: { type: string; severity: string; detail: string }[] = [];
      let fraudScore = 0;

      // Rule-based checks
      if (!report.serial_number && !report.imei && !report.vin) {
        indicators.push({ type: 'missing_identifier', severity: 'high', detail: 'No identifying number provided' });
        fraudScore += 30;
      }
      if (!report.description || report.description.length < 20) {
        indicators.push({ type: 'vague_description', severity: 'medium', detail: 'Description is too brief' });
        fraudScore += 15;
      }
      if (!report.location) {
        indicators.push({ type: 'no_location', severity: 'low', detail: 'No theft location provided' });
        fraudScore += 10;
      }
      if (!report.date_stolen) {
        indicators.push({ type: 'no_date', severity: 'medium', detail: 'No theft date provided' });
        fraudScore += 15;
      }

      if (report.user_id) {
        const { count } = await supabase
          .from('stolen_items')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', report.user_id);
        if (count && count > 5) {
          indicators.push({ type: 'high_volume_reporter', severity: 'high', detail: `User has ${count} reports` });
          fraudScore += 25;
        }
      }

      // AI-powered analysis via Claude
      if (hasAnthropicKey && report.description) {
        try {
          const aiContent = await callClaude({
            system: `You are a fraud detection expert. Analyze this stolen item report for fraud indicators.
Return JSON: { "fraud_indicators": [{"type": "", "severity": "high|medium|low", "detail": ""}], "fraud_adjustment": -20 to 40 }`,
            messages: [{
              role: 'user',
              content: `Analyze this report:
Item Type: ${report.item_type}
Brand: ${report.brand || 'Not specified'}
Model: ${report.model || 'Not specified'}
Description: ${report.description || 'None'}
Location: ${report.location || 'Not specified'}
Has police report: ${report.police_report_number ? 'Yes' : 'No'}`
            }],
            maxTokens: 800,
          });

          const parsed = parseJsonResponse(aiContent);
          if (parsed) {
            if (parsed.fraud_indicators) indicators.push(...parsed.fraud_indicators);
            if (typeof parsed.fraud_adjustment === 'number') fraudScore += parsed.fraud_adjustment;
          }
        } catch (aiError) {
          console.error('[ai-fraud-detector] AI analysis failed:', aiError);
        }
      }

      fraudScore = Math.max(0, Math.min(100, fraudScore));

      let recommendation: 'approve' | 'flag' | 'hide' | 'ban_user' = 'approve';
      let autoAction: string | null = null;

      if (fraudScore >= 90) {
        recommendation = 'hide';
        autoAction = 'auto_hidden';
        await supabase.from('stolen_items').update({ status: 'hidden' }).eq('id', report.id);
      } else if (fraudScore >= 40) {
        recommendation = 'flag';
      }

      analysisResults.push({
        report_id: report.id,
        fraud_probability: fraudScore,
        indicators,
        recommendation,
        auto_action_taken: autoAction,
      });
    }

    if (analysisResults.length > 0) {
      const { error: insertError } = await supabase.from('fraud_analysis').insert(analysisResults);
      if (insertError) console.error('[ai-fraud-detector] Failed to insert analysis:', insertError);
    }

    const flaggedItems = analysisResults.filter(a => a.recommendation !== 'approve');
    if (flaggedItems.length > 0) {
      const recommendations = flaggedItems.map(item => ({
        agent_name: 'ai-fraud-detector',
        category: 'fraud',
        priority: item.fraud_probability >= 70 ? 'high' : 'medium',
        title: `Suspicious report detected (${item.fraud_probability}% probability)`,
        description: item.indicators.map((i: any) => `${i.type}: ${i.detail}`).join('; '),
        action_data: { report_id: item.report_id, fraud_probability: item.fraud_probability, recommendation: item.recommendation },
        status: 'pending',
      }));
      await supabase.from('ai_recommendations').insert(recommendations);
    }

    if (agentRun?.id) {
      await supabase.from('ai_agent_runs').update({
        status: 'completed',
        completed_at: new Date().toISOString(),
        output_data: { reports_analyzed: analysisResults.length, flagged: flaggedItems.length, auto_hidden: analysisResults.filter(a => a.auto_action_taken === 'auto_hidden').length },
      }).eq('id', agentRun.id);
    }

    console.log(`[ai-fraud-detector] Complete - ${analysisResults.length} analyzed, ${flaggedItems.length} flagged`);

    return new Response(JSON.stringify({ success: true, analyzed: analysisResults.length, flagged: flaggedItems.length }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-fraud-detector] Error:', error);
    if (agentRun?.id) {
      await supabase.from('ai_agent_runs').update({
        status: 'failed', completed_at: new Date().toISOString(),
        error_message: error instanceof Error ? error.message : 'Unknown error',
      }).eq('id', agentRun.id);
    }
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
