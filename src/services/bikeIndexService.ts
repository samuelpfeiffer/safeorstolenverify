/**
 * BikeIndex API Integration Service
 * Free public API for searching stolen bicycles
 * Documentation: https://bikeindex.org/documentation/api_v3
 */

const BIKEINDEX_API = 'https://bikeindex.org/api/v3';

export interface BikeIndexResult {
  id: number;
  title: string;
  serial: string;
  manufacturer_name: string;
  frame_model: string;
  year: number | null;
  frame_colors: string[];
  stolen: boolean;
  stolen_location: string | null;
  date_stolen: number | null;
  thumb: string | null;
  url: string;
  large_img: string | null;
  description: string | null;
}

export interface BikeIndexSearchResponse {
  bikes: BikeIndexResult[];
}

/**
 * Search BikeIndex for a bicycle by serial number
 * @param serial - The bicycle serial number to search
 * @returns Array of matching bikes from BikeIndex
 */
export async function searchBikeIndex(serial: string): Promise<BikeIndexResult[]> {
  if (!serial || serial.length < 3) {
    return [];
  }

  try {
    const response = await fetch(
      `${BIKEINDEX_API}/search?serial=${encodeURIComponent(serial)}&stolenness=all`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('BikeIndex API error:', response.status, response.statusText);
      return [];
    }

    const data: BikeIndexSearchResponse = await response.json();
    return data.bikes || [];
  } catch (error) {
    console.error('BikeIndex API error:', error);
    return [];
  }
}

/**
 * Search BikeIndex for stolen bicycles only
 * @param serial - The bicycle serial number to search
 * @returns Array of stolen bikes matching the serial
 */
export async function searchBikeIndexStolen(serial: string): Promise<BikeIndexResult[]> {
  if (!serial || serial.length < 3) {
    return [];
  }

  try {
    const response = await fetch(
      `${BIKEINDEX_API}/search?serial=${encodeURIComponent(serial)}&stolenness=stolen`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('BikeIndex API error:', response.status, response.statusText);
      return [];
    }

    const data: BikeIndexSearchResponse = await response.json();
    return data.bikes || [];
  } catch (error) {
    console.error('BikeIndex API error:', error);
    return [];
  }
}

/**
 * Search BikeIndex with partial/fuzzy serial matching
 * BikeIndex supports fuzzy matching on their end
 * @param partialSerial - Partial serial number
 * @returns Array of potentially matching stolen bikes
 */
export async function searchBikeIndexPartial(partialSerial: string): Promise<BikeIndexResult[]> {
  if (!partialSerial || partialSerial.length < 4) {
    return [];
  }

  // Remove wildcard characters for BikeIndex API
  const cleanSerial = partialSerial.replace(/[*?]/g, '');
  
  try {
    const response = await fetch(
      `${BIKEINDEX_API}/search?serial=${encodeURIComponent(cleanSerial)}&stolenness=stolen`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('BikeIndex API error:', response.status, response.statusText);
      return [];
    }

    const data: BikeIndexSearchResponse = await response.json();
    return data.bikes || [];
  } catch (error) {
    console.error('BikeIndex API error:', error);
    return [];
  }
}

/**
 * Get details for a specific bike by ID
 * @param bikeId - The BikeIndex bike ID
 * @returns Bike details or null if not found
 */
export async function getBikeDetails(bikeId: number): Promise<BikeIndexResult | null> {
  try {
    const response = await fetch(
      `${BIKEINDEX_API}/bikes/${bikeId}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.bike || null;
  } catch (error) {
    console.error('BikeIndex API error:', error);
    return null;
  }
}

/**
 * Format BikeIndex result for display
 */
export function formatBikeResult(bike: BikeIndexResult): {
  title: string;
  description: string;
  status: 'stolen' | 'safe' | 'unknown';
  imageUrl: string | null;
  detailUrl: string;
  stolenDate: string | null;
  stolenLocation: string | null;
} {
  return {
    title: bike.title || `${bike.manufacturer_name || 'Unknown'} ${bike.frame_model || 'Bicycle'}`,
    description: bike.description || `${bike.year || ''} ${bike.manufacturer_name || ''} ${bike.frame_model || ''}`.trim(),
    status: bike.stolen ? 'stolen' : 'safe',
    imageUrl: bike.thumb || bike.large_img || null,
    detailUrl: bike.url,
    stolenDate: bike.date_stolen ? new Date(bike.date_stolen * 1000).toLocaleDateString() : null,
    stolenLocation: bike.stolen_location || null,
  };
}
