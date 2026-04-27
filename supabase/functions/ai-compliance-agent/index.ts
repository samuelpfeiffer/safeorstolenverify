import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('[ai-compliance-agent] Starting compliance check...');

  // Create agent run record
  const { data: agentRun } = await supabase
    .from('ai_agent_runs')
    .insert({
      agent_name: 'ai-compliance-agent',
      status: 'running',
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  try {
    const now = new Date();
    const recommendations: any[] = [];
    const actions: { action: string; count: number }[] = [];

    // 1. Data Retention - Clean expired verification results (older than 5 years)
    const fiveYearsAgo = new Date(now.getTime() - 5 * 365 * 24 * 60 * 60 * 1000);
    
    const { count: expiredVerifications, error: deleteVerificationError } = await supabase
      .from('verification_results')
      .delete()
      .lt('data_retention_until', now.toISOString())
      .select('id');

    if (!deleteVerificationError && expiredVerifications && expiredVerifications > 0) {
      actions.push({ action: 'deleted_expired_verifications', count: expiredVerifications });
      console.log(`[ai-compliance-agent] Deleted ${expiredVerifications} expired verification results`);
    }

    // 2. Clean expired pending verifications (older than 1 hour)
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    const { count: expiredPending, error: deletePendingError } = await supabase
      .from('pending_verifications')
      .delete()
      .lt('expires_at', now.toISOString())
      .select('id');

    if (!deletePendingError && expiredPending && expiredPending > 0) {
      actions.push({ action: 'deleted_expired_pending', count: expiredPending });
    }

    // 3. Clean old rate limit records (older than 24 hours)
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    const { count: oldRateLimits, error: deleteRateLimitError } = await supabase
      .from('rate_limits')
      .delete()
      .lt('window_start', oneDayAgo.toISOString())
      .select('id');

    if (!deleteRateLimitError && oldRateLimits && oldRateLimits > 0) {
      actions.push({ action: 'deleted_old_rate_limits', count: oldRateLimits });
    }

    // 4. Archive old audit logs (older than 90 days) - just count, don't delete
    const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    
    const { count: oldAuditLogs } = await supabase
      .from('audit_logs')
      .select('*', { count: 'exact', head: true })
      .lt('created_at', ninetyDaysAgo.toISOString());

    if (oldAuditLogs && oldAuditLogs > 1000) {
      recommendations.push({
        agent_name: 'ai-compliance-agent',
        category: 'compliance',
        priority: 'medium',
        title: 'Audit logs archive recommended',
        description: `${oldAuditLogs} audit log entries are older than 90 days. Consider archiving to cold storage for GDPR compliance.`,
        action_data: { old_audit_logs_count: oldAuditLogs },
        status: 'pending',
      });
    }

    // 5. Check for users without email (GDPR - need contact for data requests)
    const { count: usersWithoutEmail } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .is('email', null);

    if (usersWithoutEmail && usersWithoutEmail > 0) {
      recommendations.push({
        agent_name: 'ai-compliance-agent',
        category: 'compliance',
        priority: 'low',
        title: 'Users without email addresses',
        description: `${usersWithoutEmail} user profiles are missing email addresses. This may impact GDPR data subject request handling.`,
        action_data: { users_without_email: usersWithoutEmail },
        status: 'pending',
      });
    }

    // 6. Check verification results approaching retention limit
    const oneYearFromNow = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    
    const { count: expiringVerifications } = await supabase
      .from('verification_results')
      .select('*', { count: 'exact', head: true })
      .lt('data_retention_until', oneYearFromNow.toISOString())
      .gt('data_retention_until', now.toISOString());

    if (expiringVerifications && expiringVerifications > 100) {
      recommendations.push({
        agent_name: 'ai-compliance-agent',
        category: 'compliance',
        priority: 'low',
        title: 'Verification data expiring within 1 year',
        description: `${expiringVerifications} verification records will be automatically deleted within the next year per data retention policy.`,
        action_data: { expiring_count: expiringVerifications },
        status: 'pending',
      });
    }

    // 7. Generate compliance summary
    const complianceSummary = {
      data_retention: {
        verifications_deleted: expiredVerifications || 0,
        pending_cleaned: expiredPending || 0,
        rate_limits_cleaned: oldRateLimits || 0,
      },
      gdpr_status: {
        users_without_email: usersWithoutEmail || 0,
        old_audit_logs: oldAuditLogs || 0,
      },
      actions_taken: actions,
    };

    // Insert recommendations
    if (recommendations.length > 0) {
      await supabase.from('ai_recommendations').insert(recommendations);
    }

    // Store compliance check as learning
    await supabase.from('ai_agent_learnings').insert({
      agent_name: 'ai-compliance-agent',
      pattern_type: 'compliance_check',
      pattern_data: complianceSummary,
      confidence_score: 95,
    });

    // Log to audit
    await supabase.from('audit_logs').insert({
      action: 'COMPLIANCE_CHECK',
      table_name: 'system',
      new_values: complianceSummary,
    });

    // Update agent run
    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          output_data: complianceSummary,
        })
        .eq('id', agentRun.id);
    }

    console.log(`[ai-compliance-agent] Complete - ${actions.length} cleanup actions, ${recommendations.length} recommendations`);

    return new Response(JSON.stringify({
      success: true,
      summary: complianceSummary,
      recommendations: recommendations.length,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-compliance-agent] Error:', error);

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
