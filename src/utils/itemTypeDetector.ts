
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

export const getItemTypeDisplayName = (itemType: string): string => {
  const typeMap: Record<string, string> = {
    'smartphone': 'Mobile Phone',
    'vehicle': 'Vehicle',
    'laptop': 'Laptop',
    'electronics': 'Electronics',
    'tablet': 'Tablet',
    'watch': 'Smart Watch',
    'gaming': 'Gaming Device',
    'audio': 'Audio Device'
  };
  
  return typeMap[itemType.toLowerCase()] || 'Electronic Device';
};
