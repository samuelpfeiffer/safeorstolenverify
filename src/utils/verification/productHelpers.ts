
/**
 * Helper functions for product categories and attributes
 */

// Helper functions for generating verification data
export const determineCategory = (itemType: string): string => {
  itemType = (itemType || '').toLowerCase();
  
  if (itemType.includes('imei') || itemType.includes('phone') || itemType.includes('smartphone')) {
    return 'Electronics';
  } else if (itemType.includes('vin') || itemType.includes('vehicle') || itemType.includes('car')) {
    return 'Automotive';
  } else if (itemType.includes('watch') || itemType.includes('jewelry') || itemType.includes('luxury')) {
    return 'Fashion';
  } else if (itemType.includes('laptop') || itemType.includes('computer')) {
    return 'Computers';
  } else if (itemType.includes('headphone') || itemType.includes('audio')) {
    return 'Audio';
  } else if (itemType.includes('tool') || itemType.includes('drill') || itemType.includes('saw')) {
    return 'Tools';
  } else if (itemType.includes('machinery') || itemType.includes('appliance') || itemType.includes('equipment')) {
    return 'Machinery';
  } else if (itemType.includes('bike') || itemType.includes('e-bike') || itemType.includes('scooter') || itemType.includes('electric')) {
    return 'E-Bikes';
  } else if (itemType.includes('boat') || itemType.includes('marine') || itemType.includes('jet ski') || itemType.includes('hin')) {
    return 'Marine';
  }
  
  // Default category
  return 'Electronics';
};

export const determineIconType = (category: string): string => {
  switch (category) {
    case 'Electronics': return 'smartphone';
    case 'Fashion': return 'watch';
    case 'Audio': return 'headphones';
    case 'Computers': return 'laptop';
    case 'Tools': return 'wrench';
    case 'Machinery': return 'settings';
    case 'E-Bikes': return 'zap';
    case 'Marine': return 'waves';
    case 'Automotive': return 'car';
    default: return 'smartphone';
  }
};

export const getImageForCategory = (category: string): string => {
  switch (category) {
    case 'Electronics':
      return "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Fashion':
      return "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Audio':
      return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Computers':
      return "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Automotive':
      return "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Tools':
      return "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Machinery':
      return "https://images.unsplash.com/photo-1581092918484-8313e1f7f954?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'E-Bikes':
      return "https://images.unsplash.com/photo-1591199326065-b1ec1e52e0b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    case 'Marine':
      return "https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    default:
      return "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  }
};

export const determineColor = (category: string): string => {
  switch (category) {
    case 'Electronics': return 'Midnight Black';
    case 'Fashion': return 'Silver';
    case 'Audio': return 'Red';
    case 'Computers': return 'Space Gray';
    case 'Automotive': return 'Metallic Blue';
    case 'Tools': return 'Yellow';
    case 'Machinery': return 'Industrial Gray';
    case 'E-Bikes': return 'Electric Blue';
    case 'Marine': return 'Navy Blue';
    default: return 'Black';
  }
};

export const generateName = (itemType: string, category: string): string => {
  if (itemType.includes('imei') || category === 'Electronics') {
    return 'XS Pro Smartphone';
  } else if (itemType.includes('vin') || category === 'Automotive') {
    return 'Premium Sedan';
  } else if (category === 'Fashion') {
    return 'Ultra Timepiece';
  } else if (category === 'Audio') {
    return 'Sound Pro Headphones';
  } else if (category === 'Computers') {
    return 'UltraBook Pro';
  } else if (category === 'Tools') {
    return 'Professional Power Drill';
  } else if (category === 'Machinery') {
    return 'Industrial Equipment';
  } else if (category === 'E-Bikes') {
    return 'Electric Bicycle';
  } else if (category === 'Marine') {
    return 'Marine Vessel';
  }
  return `Premium ${category} Item`;
};
