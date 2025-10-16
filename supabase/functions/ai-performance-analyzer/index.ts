import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { performanceMetrics, pageUrl } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('AI Performance Analyzer running for:', pageUrl);

    // Use AI to analyze performance and suggest improvements
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
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
            content: `You are a web performance expert. Analyze performance metrics and provide actionable optimization recommendations.
            Focus on: Core Web Vitals, bundle size, render times, user experience.`
          },
          {
            role: 'user',
            content: `Page: ${pageUrl}
            Performance Metrics: ${JSON.stringify(performanceMetrics, null, 2)}
            
            Analyze and provide:
            1. Top 3 performance bottlenecks
            2. Specific optimization recommendations
            3. Estimated improvement percentages
            4. Priority level (high/medium/low)
            5. Implementation difficulty (easy/medium/hard)
            
            Return as JSON with this structure:
            {
              "bottlenecks": ["..."],
              "recommendations": [{"action": "...", "impact": "...", "priority": "...", "difficulty": "..."}],
              "estimatedImprovement": "..."
            }`
          }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('AI API Error:', error);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    // Parse AI response
    let performanceReport;
    try {
      performanceReport = JSON.parse(analysis);
    } catch {
      performanceReport = {
        bottlenecks: ['Parse error'],
        recommendations: [],
        rawAnalysis: analysis
      };
    }

    console.log('Performance analysis completed');

    return new Response(JSON.stringify({ 
      success: true,
      performanceReport,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-performance-analyzer:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
