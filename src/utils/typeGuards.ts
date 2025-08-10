
export type VerificationStatus = 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';

export const isValidVerificationStatus = (status: string): status is VerificationStatus => {
  return ['safe', 'stolen', 'lost', 'unknown', 'error'].includes(status);
};

export const normalizeVerificationStatus = (status: string): VerificationStatus => {
  const normalized = status.toLowerCase();
  if (isValidVerificationStatus(normalized)) {
    return normalized;
  }
  return 'unknown';
};

export interface VerificationResult {
  id: string;
  status: VerificationStatus;
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  verified_at: string;
  serial_number: string;
  item_type: string;
}

export const isVerificationResult = (obj: any): obj is VerificationResult => {
  return (
    obj &&
    typeof obj.id === 'string' &&
    isValidVerificationStatus(obj.status) &&
    typeof obj.confidence === 'number' &&
    typeof obj.source === 'string' &&
    typeof obj.verified_at === 'string' &&
    typeof obj.serial_number === 'string' &&
    typeof obj.item_type === 'string'
  );
};
