import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ClaudeAnalysisRequest {
  verificationResults: any[];
  serialNumber: string;
  itemType: string;
}

interface ClaudeAnalysisResponse {
  riskScore: number;
  confidence: number;
  summary: string;
  recommendations: string[];
  details: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('CLAUDE_API_KEY') || Deno.env.get('ANTHROPIC_API_KEY')
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ 
          error: 'Claude API key not configured',
          success: false 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const { verificationResults, serialNumber, itemType }: ClaudeAnalysisRequest = await req.json()

    if (!verificationResults || !Array.isArray(verificationResults)) {
      throw new Error('Verification results array is required')
    }

    console.log(`Claude analysis for ${itemType} serial: ${serialNumber}`)

    // Prepare the prompt for Claude
    const prompt = `Analyze the following item verification results for a ${itemType} with serial number ${serialNumber}:

${JSON.stringify(verificationResults, null, 2)}

Please provide:
1. Overall risk assessment (0-100, where 100 is highest risk)
2. Confidence level in the assessment (0-100)
3. A brief summary of findings
4. Specific recommendations for the buyer/seller
5. Key factors that influenced your assessment

Respond in JSON format with keys: riskScore, confidence, summary, recommendations (array), keyFactors (array).`

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Claude API error:', response.status, errorText)
      throw new Error(`Claude API error: ${response.status}`)
    }

    const claudeResponse = await response.json()
    const analysisText = claudeResponse.content[0].text

    let analysis: ClaudeAnalysisResponse
    try {
      // Try to parse Claude's JSON response
      const parsed = JSON.parse(analysisText)
      analysis = {
        riskScore: Math.max(0, Math.min(100, parsed.riskScore || 50)),
        confidence: Math.max(0, Math.min(100, parsed.confidence || 70)),
        summary: parsed.summary || 'Analysis completed',
        recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
        details: {
          keyFactors: Array.isArray(parsed.keyFactors) ? parsed.keyFactors : [],
          rawAnalysis: analysisText,
          model: 'claude-3-sonnet-20240229'
        }
      }
    } catch (parseError) {
      // If JSON parsing fails, create a structured response from the text
      console.warn('Could not parse Claude JSON response, using fallback:', parseError)
      analysis = {
        riskScore: calculateFallbackRiskScore(verificationResults),
        confidence: 75,
        summary: analysisText.substring(0, 200) + '...',
        recommendations: ['Review all verification results carefully', 'Consider additional verification if needed'],
        details: {
          rawAnalysis: analysisText,
          model: 'claude-3-sonnet-20240229',
          fallback: true
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        analysis
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Claude analysis error:', error)
    return new Response(
      JSON.stringify({ 
        error: (error as Error).message || 'Claude analysis failed',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

function calculateFallbackRiskScore(results: any[]): number {
  if (!results || results.length === 0) return 50

  let totalRisk = 0
  let count = 0

  for (const result of results) {
    if (result.status) {
      switch (result.status) {
        case 'stolen':
          totalRisk += 95
          break
        case 'lost':
          totalRisk += 75
          break
        case 'unknown':
          totalRisk += 40
          break
        case 'safe':
          totalRisk += 10
          break
        default:
          totalRisk += 50
      }
      count++
    }
  }

  return count > 0 ? Math.round(totalRisk / count) : 50
}