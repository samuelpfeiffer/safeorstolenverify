import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ParsedResult {
  hasStolenItems: boolean;
  confidence: number;
  items: Array<{
    description?: string;
    reportDate?: string;
    location?: string;
    serialNumber?: string;
    caseNumber?: string;
  }>;
  summary: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { html, identifier, source } = await req.json();
    
    if (!html || !identifier || !source) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI-HTML-PARSER] Analyzing ${source} for: ${identifier}`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Truncate HTML to prevent token limits (keep first 50000 chars)
    const truncatedHtml = html.substring(0, 50000);

    // Use Lovable AI with tool calling for structured extraction
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an expert at analyzing stolen property databases. Your task is to examine HTML content from stolen item registries and determine if they contain reports matching the searched identifier.

Key indicators to look for:
- Search results with matching serial numbers, IMEI, VIN, or descriptions
- "No results found" or "0 matches" messages
- Report dates, case numbers, police references
- Item descriptions, locations, contact information
- "Found", "Reported stolen", "Matches" terminology

Be accurate and confident in your analysis.`
          },
          {
            role: 'user',
            content: `Analyze this HTML from ${source} to determine if identifier "${identifier}" matches any stolen item reports.

HTML Content:
${truncatedHtml}

Determine if there are stolen items matching this identifier and extract all relevant details.`
          }
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "report_stolen_item_findings",
              description: "Report findings about stolen items in the HTML",
              parameters: {
                type: "object",
                properties: {
                  hasStolenItems: {
                    type: "boolean",
                    description: "Whether stolen items matching the identifier were found"
                  },
                  confidence: {
                    type: "number",
                    description: "Confidence level (0-100) that the analysis is correct",
                    minimum: 0,
                    maximum: 100
                  },
                  items: {
                    type: "array",
                    description: "List of stolen items found",
                    items: {
                      type: "object",
                      properties: {
                        description: { type: "string", description: "Description of the stolen item" },
                        reportDate: { type: "string", description: "Date item was reported stolen" },
                        location: { type: "string", description: "Location where item was stolen" },
                        serialNumber: { type: "string", description: "Serial number or identifier" },
                        caseNumber: { type: "string", description: "Police case number if available" }
                      }
                    }
                  },
                  summary: {
                    type: "string",
                    description: "Brief summary of findings (1-2 sentences)"
                  }
                },
                required: ["hasStolenItems", "confidence", "items", "summary"],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "report_stolen_item_findings" } }
      }),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        throw new Error('AI rate limit exceeded. Please try again later.');
      }
      if (aiResponse.status === 402) {
        throw new Error('AI credits exhausted. Please add credits to continue.');
      }
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    console.log('[AI-HTML-PARSER] AI Response:', JSON.stringify(aiData));

    // Extract tool call result
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error('No tool call in AI response');
    }

    const parsedResult: ParsedResult = JSON.parse(toolCall.function.arguments);

    console.log('[AI-HTML-PARSER] Parsed result:', parsedResult);

    return new Response(
      JSON.stringify({
        success: true,
        result: parsedResult
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI-HTML-PARSER] Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Failed to parse HTML with AI'
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
