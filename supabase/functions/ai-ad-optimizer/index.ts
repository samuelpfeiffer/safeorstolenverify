import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { adType, targetAudience, currentCopy, performanceData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('AI Ad Optimizer running for ad type:', adType);

    const prompt = `You are an expert digital advertising strategist specialized in creating high-converting ad copy. 
    Optimize the following ${adType} ad for ${targetAudience}:
    
    Current ad copy:
    ${currentCopy}
    
    Performance data:
    ${JSON.stringify(performanceData)}
    
    Provide 3 variations of optimized ad copy. Each variation should be distinct and designed to appeal to different segments within the target audience.
    
    Format your response as a JSON object with a single key "variations" that contains an array of the 3 optimized ad copy variations.`;
