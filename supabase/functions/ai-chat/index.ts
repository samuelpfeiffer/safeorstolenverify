import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  context?: {
    itemType?: string;
    serialNumber?: string;
    verificationResult?: any;
  };
}

// Rate limit configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_HOUR = 50; // 50 requests per hour per user

// In-memory rate limiting
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(userId: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(userId);
  
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(userId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_HOUR - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  
  if (entry.count >= MAX_REQUESTS_PER_HOUR) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  
  entry.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_HOUR - entry.count, resetAt: entry.resetAt };
}

// Cleanup expired entries periodically
function cleanupRateLimits() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt < now) {
      rateLimitStore.delete(key);
    }
  }
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Cleanup occasionally
  if (Math.random() < 0.1) cleanupRateLimits();

  try {
    // ============= AUTHENTICATION REQUIRED =============
    const authHeader = req.headers.get('Authorization');
    
    if (!authHeader) {
      console.log('[AI Chat] No authorization header provided');
      return new Response(
        JSON.stringify({ error: 'Authentication required. Please sign in to use AI chat.' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('[AI Chat] Supabase configuration missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      console.log('[AI Chat] Invalid authentication:', authError?.message);
      return new Response(
        JSON.stringify({ error: 'Invalid or expired session. Please sign in again.' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Chat] Authenticated user: ${user.id}`);

    // ============= RATE LIMITING =============
    const rateLimitResult = checkRateLimit(user.id);
    
    if (!rateLimitResult.allowed) {
      console.log(`[AI Chat] Rate limit exceeded for user ${user.id}`);
      
      // Log rate limit violation
      await supabase.from('audit_logs').insert({
        user_id: user.id,
        action: 'AI_CHAT_RATE_LIMIT_EXCEEDED',
        table_name: 'ai_chat',
        new_values: {
          timestamp: new Date().toISOString(),
          reset_at: new Date(rateLimitResult.resetAt).toISOString()
        }
      });
      
      return new Response(
        JSON.stringify({ 
          error: 'Rate limit exceeded. You can send up to 50 messages per hour.',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000).toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetAt.toString()
          } 
        }
      );
    }

    // ============= INPUT VALIDATION =============
    const { messages, context } = await req.json() as ChatRequest;
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Validate message array length
    if (messages.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Too many messages. Maximum 100 messages allowed.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Validate each message structure
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      if (!msg || typeof msg !== 'object') {
        return new Response(
          JSON.stringify({ error: `Invalid message at index ${i}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (!['user', 'assistant', 'system'].includes(msg.role)) {
        return new Response(
          JSON.stringify({ error: `Invalid role at message ${i}. Must be user, assistant, or system.` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (typeof msg.content !== 'string') {
        return new Response(
          JSON.stringify({ error: `Message content at index ${i} must be a string` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      // Individual message length limit
      if (msg.content.length > 10000) {
        return new Response(
          JSON.stringify({ error: `Message at index ${i} exceeds maximum length of 10,000 characters` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }
    
    // Validate total content length to prevent abuse
    const totalLength = messages.reduce((sum, msg) => sum + (msg.content?.length || 0), 0);
    if (totalLength > 50000) {
      return new Response(
        JSON.stringify({ error: 'Total message content too long. Please reduce your message size.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Validate context if provided
    if (context) {
      if (context.itemType && (typeof context.itemType !== 'string' || context.itemType.length > 100)) {
        return new Response(
          JSON.stringify({ error: 'Invalid context.itemType' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (context.serialNumber && (typeof context.serialNumber !== 'string' || context.serialNumber.length > 100)) {
        return new Response(
          JSON.stringify({ error: 'Invalid context.serialNumber' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // ============= API KEY VALIDATION =============
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    
    if (!ANTHROPIC_API_KEY) {
      console.error('[AI Chat] ANTHROPIC_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ============= LOG USAGE =============
    await supabase.from('audit_logs').insert({
      user_id: user.id,
      action: 'AI_CHAT_REQUEST',
      table_name: 'ai_chat',
      new_values: {
        message_count: messages.length,
        context_type: context?.itemType || null,
        timestamp: new Date().toISOString(),
        remaining_requests: rateLimitResult.remaining
      }
    });

    // ============= PROCESS REQUEST =============
    const systemPrompt = `You are SafeOrStolen's AI Safety Advisor. You help users verify items, understand verification results, spot red flags, and stay safe from stolen goods.

Your expertise includes:
- Interpreting verification results (IMEI, VIN, serial numbers)
- Explaining risk scores and fraud indicators
- Advising on safe purchasing practices
- Guiding users through the verification process
- Answering questions about stolen goods databases

${context ? `Current context:
- Item type: ${context.itemType || 'Not specified'}
- Serial/ID: ${context.serialNumber || 'Not provided'}
- Verification result: ${JSON.stringify(context.verificationResult || 'None')}` : ''}

Be helpful, clear, and prioritize user safety. If unsure, recommend additional verification.`;

    // Convert messages format for Anthropic API
    const anthropicMessages = messages.map(m => ({
      role: m.role === 'system' ? 'user' : m.role,
      content: m.content
    }));

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: anthropicMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'AI service rate limit exceeded, please try again later' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      const errorText = await response.text();
      console.error(`[AI Chat] API error: ${response.status} - ${errorText}`);
      return new Response(
        JSON.stringify({ error: 'AI chat failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Return the stream directly with rate limit headers
    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'text/event-stream',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': rateLimitResult.resetAt.toString()
      },
    });

  } catch (error) {
    console.error('[AI Chat] Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
