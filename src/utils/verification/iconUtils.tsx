
/**
 * Utility functions for handling product icons
 */

import React from 'react';
import { Smartphone, Watch, Headphones, Laptop } from 'lucide-react';

// Helper function to create icon elements without JSX in non-TSX files
export const createIconElement = (IconComponent: any): React.ReactNode => {
  return React.createElement(IconComponent, { className: "h-4 w-4" });
};

export const getIconForCategory = (iconType: string): React.ReactNode => {
  switch (iconType) {
    case 'smartphone': return createIconElement(Smartphone);
    case 'watch': return createIconElement(Watch);
    case 'headphones': return createIconElement(Headphones);
    case 'laptop': return createIconElement(Laptop);
    default: return createIconElement(Smartphone);
  }
};
