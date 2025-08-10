
interface CachedVerificationData {
  serialNumber: string;
  result: any;
  timestamp: number;
}

class PWAService {
  private dbName = 'SafeOrStolenDB';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains('verifications')) {
          const store = db.createObjectStore('verifications', { keyPath: 'serialNumber' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  }

  async cacheVerificationData(serialNumber: string, result: any): Promise<void> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['verifications'], 'readwrite');
    const store = transaction.objectStore('verifications');
    
    const data: CachedVerificationData = {
      serialNumber,
      result,
      timestamp: Date.now()
    };
    
    return new Promise((resolve, reject) => {
      const request = store.put(data);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async getCachedVerificationData(serialNumber: string): Promise<CachedVerificationData | null> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['verifications'], 'readonly');
    const store = transaction.objectStore('verifications');
    
    return new Promise((resolve, reject) => {
      const request = store.get(serialNumber);
      request.onsuccess = () => {
        const result = request.result;
        if (result && Date.now() - result.timestamp < 7 * 24 * 60 * 60 * 1000) { // 7 days
          resolve(result);
        } else {
          resolve(null);
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  async clearOldCache(): Promise<void> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['verifications'], 'readwrite');
    const store = transaction.objectStore('verifications');
    const index = store.index('timestamp');
    
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000; // 7 days ago
    const range = IDBKeyRange.upperBound(cutoff);
    
    return new Promise((resolve, reject) => {
      const request = index.openCursor(range);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve();
        }
      };
      request.onerror = () => reject(request.error);
    });
  }
}

export const pwaService = new PWAService();
