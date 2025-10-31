/**
 * Secure Storage Utility
 * Adds expiration and security features to localStorage/sessionStorage
 */

interface StorageItem<T> {
  value: T;
  expiry: number | null;
  timestamp: number;
}

/**
 * Securely stores data in localStorage with expiration
 * @param key - Storage key
 * @param value - Value to store
 * @param expiryMinutes - Optional expiration time in minutes
 */
export function setStorageItem<T>(
  key: string,
  value: T,
  expiryMinutes?: number
): void {
  try {
    const item: StorageItem<T> = {
      value,
      expiry: expiryMinutes ? Date.now() + expiryMinutes * 60 * 1000 : null,
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('Failed to store item:', error);
  }
}

/**
 * Retrieves and validates data from localStorage
 * @param key - Storage key
 * @returns Value if valid and not expired, null otherwise
 */
export function getStorageItem<T>(key: string): T | null {
  try {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item: StorageItem<T> = JSON.parse(itemStr);
    
    // Check expiration
    if (item.expiry && Date.now() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error('Failed to retrieve item:', error);
    return null;
  }
}

/**
 * Removes item from localStorage
 * @param key - Storage key
 */
export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove item:', error);
  }
}

/**
 * Cleans up expired items from localStorage
 */
export function cleanupExpiredStorage(): void {
  try {
    const keys = Object.keys(localStorage);
    
    for (const key of keys) {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) continue;

      try {
        const item: StorageItem<any> = JSON.parse(itemStr);
        
        // Remove if expired
        if (item.expiry && Date.now() > item.expiry) {
          localStorage.removeItem(key);
        }
      } catch {
        // Skip items that aren't in our format
        continue;
      }
    }
  } catch (error) {
    console.error('Failed to cleanup storage:', error);
  }
}

/**
 * Securely stores data in sessionStorage with expiration
 * @param key - Storage key
 * @param value - Value to store
 * @param expiryMinutes - Optional expiration time in minutes
 */
export function setSessionItem<T>(
  key: string,
  value: T,
  expiryMinutes?: number
): void {
  try {
    const item: StorageItem<T> = {
      value,
      expiry: expiryMinutes ? Date.now() + expiryMinutes * 60 * 1000 : null,
      timestamp: Date.now(),
    };
    sessionStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('Failed to store session item:', error);
  }
}

/**
 * Retrieves and validates data from sessionStorage
 * @param key - Storage key
 * @returns Value if valid and not expired, null otherwise
 */
export function getSessionItem<T>(key: string): T | null {
  try {
    const itemStr = sessionStorage.getItem(key);
    if (!itemStr) return null;

    const item: StorageItem<T> = JSON.parse(itemStr);
    
    // Check expiration
    if (item.expiry && Date.now() > item.expiry) {
      sessionStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error('Failed to retrieve session item:', error);
    return null;
  }
}

/**
 * Initialize storage security - runs cleanup on app start
 */
export function initializeSecureStorage(): void {
  // Clean up expired items
  cleanupExpiredStorage();
  
  // Set up periodic cleanup (every 5 minutes)
  if (typeof window !== 'undefined') {
    setInterval(cleanupExpiredStorage, 5 * 60 * 1000);
  }
}
