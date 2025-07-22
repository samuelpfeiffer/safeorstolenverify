
export const detectItemType = (serialNumber: string): string => {
  const cleaned = serialNumber.replace(/\s+/g, '').toUpperCase();
  const original = serialNumber.trim();
  
  // Property address detection (check original input with spaces)
  if (isPropertyAddress(original)) {
    return 'property';
  }
  
  // IMEI detection (15 digits)
  if (/^\d{15}$/.test(cleaned)) {
    return 'smartphone';
  }
  
  // VIN detection (17 alphanumeric characters, specific format)
  if (/^[A-HJ-NPR-Z0-9]{17}$/i.test(cleaned)) {
    return 'vehicle';
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

export const isPropertyAddress = (input: string): boolean => {
  const cleanInput = input.trim().toLowerCase();
  
  // Check for common address patterns
  const addressPatterns = [
    /\d+\s+[a-z\s]+(street|st|avenue|ave|road|rd|drive|dr|lane|ln|boulevard|blvd|court|ct|place|pl|way|circle|cir|terrace|ter)/i,
    /\d+\s+[a-z\s]+,\s*[a-z\s]+/i, // Street, City pattern
    /[a-z\s]+\d+[a-z\s]*,/i, // City with numbers pattern
  ];
  
  return addressPatterns.some(pattern => pattern.test(cleanInput));
};

export const getItemTypeDisplayName = (itemType: string): string => {
  const typeMap: Record<string, string> = {
    'smartphone': 'Mobile Phone',
    'vehicle': 'Vehicle',
    'laptop': 'Laptop',
    'electronics': 'Electronics',
    'tablet': 'Tablet',
    'watch': 'Smart Watch',
    'gaming': 'Gaming Device',
    'audio': 'Audio Device',
    'property': 'Property'
  };
  
  return typeMap[itemType.toLowerCase()] || 'Electronic Device';
};
