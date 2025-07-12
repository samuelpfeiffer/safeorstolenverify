import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  try {
    // Filter out undefined/null values and handle edge cases
    const validInputs = inputs.filter(input => 
      input !== undefined && 
      input !== null && 
      input !== false
    );
    
    if (validInputs.length === 0) {
      return "";
    }
    
    return twMerge(clsx(validInputs));
  } catch (error) {
    console.warn('cn utility error:', error, 'inputs:', inputs);
    // Fallback to basic string concatenation
    return inputs
      .filter(input => typeof input === 'string' && input.trim().length > 0)
      .join(' ');
  }
}
