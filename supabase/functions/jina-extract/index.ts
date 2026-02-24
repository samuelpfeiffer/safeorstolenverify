import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts'

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { url } = await req.json()

    if (!url || !url.startsWith('http')) {
      return new Response(
        JSON.stringify({ error: 'Valid URL required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const jinaKey = Deno.env.get('Jina_API_KEY')
    if (!jinaKey) {
      return new Response(
        JSON.stringify({ error: 'Jina API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Use Jina Reader to extract page content
    const jinaResponse = await fetch(`https://r.jina.ai/${encodeURIComponent(url)}`, {
      headers: {
        'Authorization': `Bearer ${jinaKey}`,
        'Accept': 'application/json',
        'X-Return-Format': 'text',
      }
    })

    if (!jinaResponse.ok) {
      throw new Error(`Jina API error: ${jinaResponse.status}`)
    }

    const pageText = await jinaResponse.text()

    // Extract identifiers from page content using patterns
    const identifiers: { type: string; value: string }[] = []

    // IMEI pattern (15 digits)
    const imeiMatches = pageText.match(/\b\d{15}\b/g)
    if (imeiMatches) {
      imeiMatches.slice(0, 3).forEach(m => identifiers.push({ type: 'imei', value: m }))
    }

    // VIN pattern (17 chars, letters + numbers, no I, O, Q)
    const vinMatches = pageText.match(/\b[A-HJ-NPR-Z0-9]{17}\b/g)
    if (vinMatches) {
      vinMatches.slice(0, 3).forEach(m => identifiers.push({ type: 'vin', value: m }))
    }

    // Firearm serial patterns
    const serialMatches = pageText.match(/(?:serial|ser\.?|s\/n)[:\s#]+([A-Z0-9]{5,12})/gi)
    if (serialMatches) {
      serialMatches.slice(0, 3).forEach(m => {
        const val = m.replace(/(?:serial|ser\.?|s\/n)[:\s#]+/i, '').trim()
        identifiers.push({ type: 'serial', value: val })
      })
    }

    // License plate patterns
    const plateMatches = pageText.match(/(?:plate|license)[:\s#]+([A-Z0-9]{2,8})/gi)
    if (plateMatches) {
      plateMatches.slice(0, 2).forEach(m => {
        const val = m.replace(/(?:plate|license)[:\s#]+/i, '').trim()
        identifiers.push({ type: 'plate', value: val })
      })
    }

    return new Response(
      JSON.stringify({
        url,
        identifiers,
        page_excerpt: pageText.slice(0, 500),
        found: identifiers.length > 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Jina extract error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
