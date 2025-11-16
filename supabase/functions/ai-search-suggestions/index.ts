import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { partialInput, itemType } = await req.json();
    
    if (!partialInput || partialInput.length < 3) {
      return new Response(JSON.stringify({ suggestions: [] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get recent similar searches
    const { data: recentSearches } = await supabase
      .from('verification_searches')
      .select('identifier, item_type')
      .ilike('identifier', `${partialInput}%`)
      .limit(5);

    const suggestions = recentSearches?.map(s => ({
      value: s.identifier,
      type: s.item_type,
      confidence: 'high'
    })) || [];

    // Add intelligent suggestions based on format
    const formatSuggestions = generateFormatSuggestions(partialInput, itemType);
    
    return new Response(JSON.stringify({ 
      suggestions: [...suggestions, ...formatSuggestions].slice(0, 5)
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-search-suggestions:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function generateFormatSuggestions(input: string, itemType?: string) {
  const suggestions = [];
  
  // IMEI format detection (15 digits)
  if (/^\d{8,}$/.test(input) && input.length < 15) {
    suggestions.push({
      value: `${input} (complete IMEI - ${15 - input.length} more digits)`,
      type: 'phone',
      confidence: 'medium'
    });
  }
  
  // VIN format detection (17 characters)
  if (/^[A-HJ-NPR-Z0-9]+$/i.test(input) && input.length < 17) {
    suggestions.push({
      value: `${input} (complete VIN - ${17 - input.length} more chars)`,
      type: 'vehicle',
      confidence: 'medium'
    });
  }
  
  return suggestions;
}
