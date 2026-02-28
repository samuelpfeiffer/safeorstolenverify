import { supabase } from '@/integrations/supabase/client';

export type IdentifierType = 'imei' | 'vin' | 'plate' | 'serial' | 'firearm' | 'bike';

export interface DetectionResult {
  type: IdentifierType;
  confidence: number;
  explanation: string;
  extractedValue: string;
}

/**
 * Maps detected AI type to the item type used by the verification system
 */
export function mapDetectedTypeToItemType(type: IdentifierType): string {
  const mapping: Record<IdentifierType, string> = {
    imei: 'smartphone',
    vin: 'vehicle',
    plate: 'license_plate',
    serial: 'electronics',
    firearm: 'firearm',
    bike: 'bicycle',
  };
  return mapping[type] || 'electronics';
}

/**
 * Human-readable labels for detected types
 */
export function getTypeLabel(type: IdentifierType): string {
  const labels: Record<IdentifierType, string> = {
    imei: 'Phone IMEI',
    vin: 'Vehicle VIN',
    plate: 'License Plate',
    serial: 'Serial Number',
    firearm: 'Firearm Serial',
    bike: 'Bicycle Serial',
  };
  return labels[type] || 'Unknown';
}

/**
 * Icon emoji for each type
 */
export function getTypeIcon(type: IdentifierType): string {
  const icons: Record<IdentifierType, string> = {
    imei: '📱',
    vin: '🚗',
    plate: '🪪',
    serial: '💻',
    firearm: '🔫',
    bike: '🚲',
  };
  return icons[type] || '🔍';
}

/**
 * Call AI detection edge function
 */
export async function detectIdentifierType(input: string): Promise<DetectionResult> {
  const { data, error } = await supabase.functions.invoke('ai-detect-identifier', {
    body: { input },
  });

  if (error) {
    throw new Error('AI detection failed');
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data as DetectionResult;
}
