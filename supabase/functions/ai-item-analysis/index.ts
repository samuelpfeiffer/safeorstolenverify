import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalysisRequest {
  category: string;
  description: string;
  serialNumber?: string;
  price?: number;
  location?: string;
  sellerInfo?: string;
  imageAnalysis?: string;
  stolenDatabaseMatches?: string;
  marketPriceRange?: string;
}

interface AnalysisResult {
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  riskScore: number;
  redFlags: { flag: string; severity: string; explanation: string }[];
  greenFlags: { flag: string; explanation: string }[];
  detailedAnalysis: {
    photoAnalysis?: string;
    priceComparison?: string;
    sellerAssessment?: string;
    serialVerification?: string;
  };
  recommendations: {
    questionsToAsk: string[];
    documentsToRequest: string[];
    verificationSteps: string[];
    verdict: 'proceed' | 'investigate' | 'avoid';
    verdictExplanation: string;
  };
  similarPatterns?: string[];
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

    const request: AnalysisRequest = await req.json();
    console.log('[AI Item Analysis] Analyzing item:', request.category);

    const systemPrompt = `You are an expert fraud detection specialist and stolen property investigator with 20 years of experience. Analyze item listings with extreme attention to detail to help users avoid purchasing stolen goods.

You MUST respond with valid JSON only, no markdown or extra text. The JSON structure must match exactly:
{
  "riskLevel": "low" | "medium" | "high" | "critical",
  "riskScore": number (0-100),
  "redFlags": [{ "flag": string, "severity": "low" | "medium" | "high", "explanation": string }],
  "greenFlags": [{ "flag": string, "explanation": string }],
  "detailedAnalysis": {
    "photoAnalysis": string,
    "priceComparison": string,
    "sellerAssessment": string,
    "serialVerification": string
  },
  "recommendations": {
    "questionsToAsk": string[],
    "documentsToRequest": string[],
    "verificationSteps": string[],
    "verdict": "proceed" | "investigate" | "avoid",
    "verdictExplanation": string
  },
  "similarPatterns": string[]
}`;

    const userPrompt = `Analyze this item listing for potential stolen goods:

ITEM DETAILS:
- Category: ${request.category || 'Unknown'}
- Description: ${request.description || 'Not provided'}
- Serial Number: ${request.serialNumber || 'Not provided'}
- Price Listed: ${request.price ? `$${request.price}` : 'Not provided'}
- Seller Location: ${request.location || 'Not provided'}
- Seller Description: ${request.sellerInfo || 'Not provided'}

${request.imageAnalysis ? `PHOTO ANALYSIS NOTES:\n${request.imageAnalysis}` : ''}

${request.stolenDatabaseMatches ? `DATABASE MATCHES:\n${request.stolenDatabaseMatches}` : 'DATABASE MATCHES: None found'}

${request.marketPriceRange ? `MARKET DATA:\n- Typical Price Range: ${request.marketPriceRange}` : ''}

Provide comprehensive risk assessment with specific, actionable recommendations.`;

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
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[AI Item Analysis] API Error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add funds.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response from AI');
    }

    // Parse the JSON response
    let analysis: AnalysisResult;
    try {
      // Clean up the response - remove markdown code blocks if present
      const cleanedContent = content.replace(/```json\n?|\n?```/g, '').trim();
      analysis = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error('[AI Item Analysis] Failed to parse AI response:', content);
      // Provide fallback analysis
      analysis = {
        riskLevel: 'medium',
        riskScore: 50,
        redFlags: [{ flag: 'Analysis incomplete', severity: 'medium', explanation: 'Unable to fully analyze item' }],
        greenFlags: [],
        detailedAnalysis: {
          photoAnalysis: 'Unable to analyze photos',
          priceComparison: 'Unable to compare prices',
          sellerAssessment: 'Unable to assess seller',
          serialVerification: request.serialNumber ? 'Serial number provided for verification' : 'No serial number provided'
        },
        recommendations: {
          questionsToAsk: ['Ask for proof of purchase', 'Request original packaging or accessories'],
          documentsToRequest: ['Receipt', 'Warranty card', 'Original box'],
          verificationSteps: ['Verify serial number matches item', 'Check seller reviews'],
          verdict: 'investigate',
          verdictExplanation: 'Proceed with caution and verify item legitimacy'
        },
        similarPatterns: []
      };
    }

    console.log('[AI Item Analysis] Analysis complete, risk level:', analysis.riskLevel);

    return new Response(JSON.stringify(analysis), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI Item Analysis] Error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Analysis failed' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
