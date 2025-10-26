import { useState, useEffect, useCallback } from 'react';
import { usePWA } from '@/hooks/usePWA';

interface QueuedRequest {
  id: string;
  type: 'verification';
  data: any;
  timestamp: number;
}

export const useOfflineSync = () => {
  const [queue, setQueue] = useState<QueuedRequest[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const { isOnline } = usePWA();

  // Load queue from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('offline-queue');
      if (stored) {
        setQueue(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading offline queue:', error);
    }
  }, []);

  // Save queue to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('offline-queue', JSON.stringify(queue));
    } catch (error) {
      console.error('Error saving offline queue:', error);
    }
  }, [queue]);

  const addToQueue = useCallback((type: 'verification', data: any) => {
    const request: QueuedRequest = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      data,
      timestamp: Date.now()
    };
    
    setQueue(prev => [...prev, request]);
    return request.id;
  }, []);

  const removeFromQueue = useCallback((id: string) => {
    setQueue(prev => prev.filter(item => item.id !== id));
  }, []);

  const syncQueue = useCallback(async () => {
    if (!isOnline || queue.length === 0 || isSyncing) return;

    setIsSyncing(true);
    
    for (const request of queue) {
      try {
        // Process each queued request
        // This would call your verification API
        console.log('Syncing queued request:', request);
        
        // If successful, remove from queue
        removeFromQueue(request.id);
      } catch (error) {
        console.error('Error syncing request:', request.id, error);
        // Keep in queue for retry
      }
    }

    setIsSyncing(false);
  }, [isOnline, queue, isSyncing, removeFromQueue]);

  // Auto-sync when coming online
  useEffect(() => {
    if (isOnline && queue.length > 0) {
      syncQueue();
    }
  }, [isOnline, queue.length, syncQueue]);

  return {
    queue,
    queueSize: queue.length,
    isSyncing,
    addToQueue,
    removeFromQueue,
    syncQueue
  };
};
