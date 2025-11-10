import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BikeIndexResponse {
  status: 'stolen' | 'safe' | 'unknown';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { serialNumber } = await req.json();

    if (!serialNumber) {
      throw new Error('Serial number is required');
    }

    console.log(`Bike Index verification for serial: ${serialNumber}`);

    // Bike Index Public API - FREE (no API key required)
    // https://bikeindex.org/documentation/api_v3
    const response = await fetch(
      `https://bikeindex.org:443/api/v3/search?serial=${encodeURIComponent(serialNumber)}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Bike Index API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Bike Index API response:', data);

    let result: BikeIndexResponse;

    // Check if bikes found
    if (data.bikes && data.bikes.length > 0) {
      const bike = data.bikes[0];
      
      // Check if bike is marked as stolen
      if (bike.stolen === true || bike.status === 'stolen') {
        result = {
          status: 'stolen',
          confidence: 95,
          source: 'BikeIndex_Database',
          details: {
            bikeId: bike.id,
            title: bike.title,
            serialNumber: bike.serial,
            stolenLocation: bike.stolen_location,
            dateStolen: bike.date_stolen,
            manufacturer: bike.manufacturer_name,
            year: bike.year,
            frameColors: bike.frame_colors,
            registrationCreated: bike.registration_created_at,
            url: `https://bikeindex.org/bikes/${bike.id}`
          },
          message: 'Bike reported as stolen in Bike Index database'
        };
      } else {
        // Bike found but not marked stolen
        result = {
          status: 'safe',
          confidence: 90,
          source: 'BikeIndex_Database',
          details: {
            bikeId: bike.id,
            title: bike.title,
            serialNumber: bike.serial,
            manufacturer: bike.manufacturer_name,
            year: bike.year,
            frameColors: bike.frame_colors,
            url: `https://bikeindex.org/bikes/${bike.id}`
          },
          message: 'Bike registered in Bike Index - not marked as stolen'
        };
      }
    } else {
      // No bikes found with this serial number
      result = {
        status: 'unknown',
        confidence: 50,
        source: 'BikeIndex_Database',
        details: {
          searchedSerial: serialNumber,
          totalResults: 0
        },
        message: 'No bikes found with this serial number in Bike Index database'
      };
    }

    return new Response(
      JSON.stringify({
        success: true,
        result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Bike Index verification error:', error);
    return new Response(
      JSON.stringify({ 
        error: (error as Error).message || 'Bike Index verification failed',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
