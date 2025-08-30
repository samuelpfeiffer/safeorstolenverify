import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SocialMentionWebhook {
  platform: string;
  content: string;
  author: string;
  url: string;
  timestamp: string;
  keywords_matched: string[];
  user_id?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const payload: SocialMentionWebhook = await req.json()
    
    console.log('Received social media mention webhook:', payload)

    // Store the social media finding
    const { data: finding, error: findingError } = await supabase
      .from('social_media_findings')
      .insert({
        platform: payload.platform,
        post_url: payload.url,
        post_content: payload.content,
        confidence_level: 'high', // Since this came from our monitoring
        similarity_score: 1.0,
        status: 'new',
        user_id: payload.user_id
      })
      .select()
      .single()

    if (findingError) {
      console.error('Error storing social media finding:', findingError)
      throw findingError
    }

    // Find all active monitoring setups that match this content
    const { data: monitoringSetups, error: monitoringError } = await supabase
      .from('social_media_monitoring')
      .select('*')
      .eq('platform', payload.platform)
      .eq('monitoring_status', 'active')

    if (monitoringError) {
      console.error('Error fetching monitoring setups:', monitoringError)
      throw monitoringError
    }

    const responseActions = []

    // Process each monitoring setup
    for (const setup of monitoringSetups || []) {
      const searchTerms = setup.search_terms || []
      const contentLower = payload.content.toLowerCase()
      
      // Check if any of the monitored keywords are mentioned
      const matchedKeywords = searchTerms.filter((term: string) => 
        contentLower.includes(term.toLowerCase())
      )

      if (matchedKeywords.length > 0) {
        console.log(`Found matching keywords for user ${setup.user_id}:`, matchedKeywords)

        // Update findings count
        await supabase
          .from('social_media_monitoring')
          .update({ 
            findings_count: (setup.findings_count || 0) + 1,
            last_scan_at: new Date().toISOString()
          })
          .eq('id', setup.id)

        // Create alert notification
        const { error: alertError } = await supabase
          .from('alert_notifications')
          .insert({
            user_id: setup.user_id,
            alert_id: finding.id,
            notification_type: 'social_media_mention',
            title: `New ${payload.platform} mention detected`,
            message: `Keywords "${matchedKeywords.join(', ')}" mentioned in: "${payload.content.substring(0, 100)}..."`,
            data: {
              platform: payload.platform,
              url: payload.url,
              author: payload.author,
              matched_keywords: matchedKeywords,
              full_content: payload.content
            }
          })

        if (alertError) {
          console.error('Error creating alert notification:', alertError)
        }

        responseActions.push({
          user_id: setup.user_id,
          matched_keywords: matchedKeywords,
          setup_id: setup.id
        })
      }
    }

    // Prepare SafeOrStolen response template
    const responseTemplate = `🛡️ SafeOrStolen.com - Free stolen goods verification service! 

✅ Check IMEI, VIN, serial numbers instantly
✅ Protect yourself from buying stolen items  
✅ Verify before you buy - stay safe!
✅ Backed by FasterCapital

Try it free: https://safeorstolen.com

#SafeOrStolen #StolenGoods #BuyerProtection #Verification`

    return new Response(
      JSON.stringify({ 
        success: true,
        finding_id: finding.id,
        matched_setups: responseActions.length,
        response_template: responseTemplate,
        suggested_action: 'Copy the response template and reply to the social media post',
        message: `Processed mention from ${payload.platform}. ${responseActions.length} monitoring setups matched.`
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error processing social media webhook:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process social media mention',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})