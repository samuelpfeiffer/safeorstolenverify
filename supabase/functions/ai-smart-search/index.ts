import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { query } = await req.json();
    console.log('[AI Smart Search] Processing query:', query);

    if (!query || query.trim().length < 3) {
      return new Response(JSON.stringify({ error: 'Query too short', parsedQuery: null }), {
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

    const content = await callClaude({
      system: systemPrompt,
      messages: [{ role: 'user', content: `Parse this search: "${query}"` }],
      temperature: 0.1,
      maxTokens: 1000,
    });

    let parsedQuery = parseJsonResponse(content);
    if (parsedQuery) {
      parsedQuery.originalQuery = query;
    } else {
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
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Search parsing failed' }), {
      status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
