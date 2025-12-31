import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { requireAuth, unauthorizedResponse } from "../_shared/auth.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SmartSearchRequest {
  query: string;
}

interface ParsedQuery {
  itemType?: string;
  brand?: string;
  model?: string;
  color?: string;
  location?: {
    city?: string;
    state?: string;
  };
  dateRange?: {
    start?: string;
    end?: string;
  };
  distinguishingFeatures?: string[];
  searchPriority: string[];
  fuzzyMatchThreshold: number;
  suggestedFilters: string[];
  originalQuery: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // SECURITY: Require user authentication
  const { user, error: authError } = await requireAuth(req);
  if (authError) {
    console.warn('[AI Smart Search] Unauthorized access attempt');
    return unauthorizedResponse('Please sign in to use AI smart search');
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { query }: SmartSearchRequest = await req.json();
    console.log(`[AI Smart Search] User ${user.id} processing query:`, query);

    if (!query || query.trim().length < 3) {
      return new Response(JSON.stringify({ 
        error: 'Query too short',
        parsedQuery: null 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `You are a search query parser for a stolen items database. Convert natural language searches into structured database queries.

Respond with valid JSON only:
{
  "itemType": string or null (e.g., "bicycle", "phone", "laptop", "vehicle", "jewelry", "electronics"),
  "brand": string or null (e.g., "Apple", "Trek", "Samsung"),
  "model": string or null (e.g., "iPhone 15", "Marlin 7"),
  "color": string or null,
  "location": { "city": string or null, "state": string or null } or null,
  "dateRange": { "start": "YYYY-MM-DD" or null, "end": "YYYY-MM-DD" or null } or null,
  "distinguishingFeatures": string[] (unique identifying marks),
  "searchPriority": string[] (which fields to prioritize in search),
  "fuzzyMatchThreshold": number (0.5-1.0, lower = more fuzzy),
  "suggestedFilters": string[] (additional filters user might want)
}

Examples:
- "Blue Trek mountain bike stolen in Seattle last month" → itemType: "bicycle", brand: "Trek", color: "blue", location: { city: "Seattle" }, dateRange based on "last month"
- "MacBook Pro 16 inch with scratched lid" → itemType: "laptop", brand: "Apple", model: "MacBook Pro 16", distinguishingFeatures: ["scratched lid"]
- "Gold necklace with heart pendant" → itemType: "jewelry", color: "gold", distinguishingFeatures: ["heart pendant"]`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Parse this search: "${query}"` }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    let parsedQuery: ParsedQuery;
    try {
      const cleanedContent = content.replace(/```json\n?|\n?```/g, '').trim();
      parsedQuery = JSON.parse(cleanedContent);
      parsedQuery.originalQuery = query;
    } catch {
      // Fallback to basic parsing
      parsedQuery = {
        originalQuery: query,
        searchPriority: ['description', 'brand', 'model'],
        fuzzyMatchThreshold: 0.7,
        suggestedFilters: ['category', 'location', 'date']
      };
    }

    console.log('[AI Smart Search] Parsed query:', parsedQuery);

    return new Response(JSON.stringify({ parsedQuery }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI Smart Search] Error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Search parsing failed' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});