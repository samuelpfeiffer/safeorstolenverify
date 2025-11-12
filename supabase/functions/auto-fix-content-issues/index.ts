import "https://deno.land/x/xhr@0.1.0/mod.ts";
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

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('[AUTO-FIX] Starting automatic issue detection and fixing...');

    // Get all published content
    const { data: allContent, error: contentError } = await supabase
      .from('ai_generated_content')
      .select('*')
      .eq('status', 'published');

    if (contentError) throw contentError;

    const fixedIssues: any[] = [];
    const newIssues: any[] = [];

    for (const content of allContent || []) {
      console.log(`[AUTO-FIX] Analyzing content: ${content.slug}`);

      // Check for issues
      const issues = [];

      // 1. Check SEO score
      if (content.seo_score < 70) {
        issues.push({
          issue_type: 'seo_score_low',
          severity: 'high',
          description: `SEO score is ${content.seo_score}, should be above 70`,
        });
      }

      // 2. Check meta description
      if (!content.meta_description || content.meta_description.length < 120) {
        issues.push({
          issue_type: 'missing_meta',
          severity: 'critical',
          description: 'Meta description is missing or too short',
        });
      }

      // 3. Check keywords
      if (!content.keywords || content.keywords.length < 3) {
        issues.push({
          issue_type: 'missing_keywords',
          severity: 'high',
          description: 'Insufficient target keywords',
        });
      }

      // 4. Check content length
      const wordCount = content.content.split(/\s+/).length;
      if (wordCount < 1000) {
        issues.push({
          issue_type: 'low_word_count',
          severity: 'medium',
          description: `Content is only ${wordCount} words, should be 1000+`,
        });
      }

      // 5. Check for headings
      if (!content.content.includes('##')) {
        issues.push({
          issue_type: 'missing_structure',
          severity: 'high',
          description: 'Content lacks proper heading structure',
        });
      }

      // Save new issues
      for (const issue of issues) {
        const { data: existingIssue } = await supabase
          .from('content_issues')
          .select('id')
          .eq('content_id', content.id)
          .eq('issue_type', issue.issue_type)
          .eq('status', 'open')
          .single();

        if (!existingIssue) {
          const { data: newIssue } = await supabase
            .from('content_issues')
            .insert({
              content_id: content.id,
              ...issue,
              status: 'open',
            })
            .select()
            .single();

          newIssues.push(newIssue);
          console.log(`[AUTO-FIX] New issue detected: ${issue.issue_type}`);
        }
      }

      // Auto-fix critical issues
      if (issues.some(i => i.severity === 'critical')) {
        console.log(`[AUTO-FIX] Fixing critical issues for: ${content.slug}`);

        try {
          const fixPrompt = `Analyze and improve this content for SEO:

Title: ${content.title}
Current Meta Description: ${content.meta_description || 'MISSING'}
Current Keywords: ${content.keywords?.join(', ') || 'MISSING'}
Content Length: ${wordCount} words

Issues Found:
${issues.map(i => `- ${i.description}`).join('\n')}

Provide improvements as JSON:
{
  "metaDescription": "Improved meta description (155-160 chars, compelling, includes main keyword)",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "contentImprovements": "Specific suggestions for improving content structure and SEO"
}`;

          const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${lovableApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'google/gemini-2.5-flash',
              messages: [
                { role: 'system', content: 'You are an SEO optimization expert. Provide specific, actionable improvements.' },
                { role: 'user', content: fixPrompt }
              ],
            }),
          });

          if (aiResponse.ok) {
            const aiData = await aiResponse.json();
            const fixText = aiData.choices[0].message.content;
            
            let fixes;
            try {
              const jsonMatch = fixText.match(/\{[\s\S]*\}/);
              fixes = JSON.parse(jsonMatch ? jsonMatch[0] : fixText);
            } catch (e) {
              console.error('[AUTO-FIX] Failed to parse AI fix response');
              continue;
            }

            // Apply fixes
            const updates: any = {
              last_optimized_at: new Date().toISOString(),
            };

            if (fixes.metaDescription) {
              updates.meta_description = fixes.metaDescription;
            }

            if (fixes.keywords && fixes.keywords.length > 0) {
              updates.keywords = fixes.keywords;
            }

            // Recalculate SEO score
            const newSeoScore = 
              (fixes.metaDescription?.length >= 120 ? 25 : 0) +
              (fixes.keywords?.length >= 3 ? 25 : 0) +
              (wordCount > 1000 ? 25 : wordCount / 1000 * 25) +
              (content.content.includes('##') ? 25 : 0);

            updates.seo_score = Math.round(newSeoScore);

            await supabase
              .from('ai_generated_content')
              .update(updates)
              .eq('id', content.id);

            // Mark issues as fixed
            for (const issue of issues) {
              await supabase
                .from('content_issues')
                .update({
                  status: 'fixed',
                  fixed_at: new Date().toISOString(),
                  fix_action: JSON.stringify(fixes),
                  auto_fixed: true,
                })
                .eq('content_id', content.id)
                .eq('issue_type', issue.issue_type)
                .eq('status', 'open');
            }

            fixedIssues.push(...issues);
            console.log(`[AUTO-FIX] Fixed ${issues.length} issues for: ${content.slug}`);
          }
        } catch (error) {
          console.error(`[AUTO-FIX] Error fixing content ${content.slug}:`, error);
        }
      }
    }

    return new Response(JSON.stringify({
      success: true,
      analyzed: allContent?.length || 0,
      newIssues: newIssues.length,
      fixedIssues: fixedIssues.length,
      message: `Analyzed ${allContent?.length || 0} pieces of content, found ${newIssues.length} new issues, fixed ${fixedIssues.length} issues`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AUTO-FIX] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
