import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChatRequest {
  message: string;
  context?: {
    currentPage?: string;
    userHistory?: string[];
    verificationResult?: any;
  };
  conversationHistory?: { role: 'user' | 'assistant'; content: string }[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { message, context, conversationHistory = [] }: ChatRequest = await req.json();
    console.log('[AI Assistant] Message received:', message.slice(0, 50));

    const systemPrompt = `You are the SafeOrStolen.com AI assistant. You help users with:
- Understanding item verification results
- Navigating the platform
- Reporting stolen items
- Interpreting risk assessments
- Safety recommendations when buying used items
- Technical support

Key features to mention:
- IMEI Check: For mobile phones, dial *#06# to find IMEI
- VIN Check: For vehicles, find on dashboard or door jamb
- Serial Number: For electronics, check device settings or back of item
- Free Trial: 2 free searches, 14-day trial
- Subscription: Starting at $4.99/month

${context?.currentPage ? `User is currently on: ${context.currentPage}` : ''}
${context?.verificationResult ? `Recent verification result: ${JSON.stringify(context.verificationResult)}` : ''}

Guidelines:
- Be friendly and professional
- Give clear, actionable guidance
- Keep responses concise (2-3 paragraphs max)
- Show empathy for theft victims
- Link to relevant features when helpful
- If user seems to have bought stolen property, advise them to contact local police

If asked about pricing:
- Starter: $4.99/month (15 checks)
- Personal: $9.99/month (50 checks)
- Professional: $29.99/month (unlimited)`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI API error: ${response.status}`);
    }

    // Return the stream directly
    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      },
    });

  } catch (error) {
    console.error('[AI Assistant] Error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Assistant error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
