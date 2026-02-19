
export const detectItemType = (serialNumber: string): string => {
  const cleaned = serialNumber.replace(/\s+/g, '').toUpperCase();
  
  // IMEI detection (15 digits)
  if (/^\d{15}$/.test(cleaned)) {
    return 'smartphone';
  }
  
  // VIN detection (17 alphanumeric characters, specific format)
  if (/^[A-HJ-NPR-Z0-9]{17}$/i.test(cleaned)) {
    return 'vehicle';
  }
  
  // License Plate detection (US formats: 2-8 chars, letters/digits, optional dash/space)
  const plateClean = serialNumber.replace(/\s+/g, '').toUpperCase();
  if (/^[A-Z0-9]{2,8}$/.test(plateClean) && /[A-Z]/.test(plateClean) && /\d/.test(plateClean) && plateClean.length <= 8 && plateClean.length >= 4) {
    // Disambiguate from serial numbers - plates are typically 5-8 chars with mixed alpha/digits
    if (plateClean.length >= 5 && plateClean.length <= 8 && !/^\d{15}$/.test(plateClean)) {
      return 'license_plate';
    }
  }
  
  // Apple serial number patterns
  if (/^[A-Z0-9]{10,12}$/.test(cleaned) && /[A-Z]/.test(cleaned)) {
    return 'smartphone';
  }
  
  // Samsung serial patterns
  if (/^[A-Z]{2}\d{8}[A-Z]{2}$/.test(cleaned)) {
    return 'smartphone';
  }
  
  // Laptop serial patterns (Dell, HP, Lenovo common formats)
  if (/^[A-Z0-9]{7,10}$/.test(cleaned) && cleaned.length >= 7) {
    return 'laptop';
  }
  
  // Default to electronics for other patterns
  return 'electronics';
};

export const getItemTypeDisplayName = (itemType: string | null): string => {
  if (!itemType) return 'Unknown';
  const typeMap: Record<string, string> = {
    'smartphone': 'Mobile Phone',
    'vehicle': 'Vehicle',
    'laptop': 'Laptop',
    'electronics': 'Electronics',
    'tablet': 'Tablet',
    'watch': 'Smart Watch',
    'gaming': 'Gaming Device',
    'audio': 'Audio Device',
    'license_plate': 'License Plate',
    'bicycle': 'Bicycle',
    'firearm': 'Firearm',
    'tool': 'Power Tool',
  };
  
  return typeMap[itemType.toLowerCase()] || 'Electronic Device';
};

export const getStatusColor = (status: string): { text: string; bg: string; border: string; glow: string } => {
  switch (status) {
    case 'clean':
      return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' };
    case 'flagged':
      return { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', glow: 'shadow-amber-500/20' };
    case 'stolen':
      return { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', glow: 'shadow-red-500/20' };
    default:
      return { text: 'text-muted-foreground', bg: 'bg-muted/10', border: 'border-border', glow: '' };
  }
};
