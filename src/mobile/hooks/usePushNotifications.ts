import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

// Safe check for native platform without importing Capacitor at top level
const isNative = () => {
  try {
    // Only true if running in Capacitor native context
    return typeof window !== 'undefined' && 
           'Capacitor' in window && 
           (window as any).Capacitor?.isNativePlatform?.();
  } catch {
    return false;
  }
};

export const usePushNotifications = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const { toast } = useToast();

  const initializePushNotifications = useCallback(async () => {
    if (!isNative()) {
      console.log('Push notifications only work on native platforms');
      return;
    }

    try {
      // Dynamic import to avoid breaking web builds
      const { PushNotifications } = await import('@capacitor/push-notifications');
      
      // Request permission
      const permission = await PushNotifications.requestPermissions();
      
      if (permission.receive === 'granted') {
        await PushNotifications.register();
        setIsEnabled(true);
      }

      // Listen for registration
      await PushNotifications.addListener('registration', (tokenData) => {
        console.log('Push registration success, token:', tokenData.value);
        setToken(tokenData.value);
      });

      // Listen for errors
      await PushNotifications.addListener('registrationError', (error: any) => {
        console.error('Push registration error:', error);
        toast({
          title: 'Notification Error',
          description: 'Failed to enable push notifications',
          variant: 'destructive'
        });
      });

      // Handle notification received
      await PushNotifications.addListener('pushNotificationReceived', (notification: any) => {
        console.log('Push notification received:', notification);
        toast({
          title: notification.title || 'Notification',
          description: notification.body || '',
        });
      });

      // Handle notification action
      await PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log('Push notification action performed:', notification);
      });

    } catch (error) {
      console.error('Push notification initialization error:', error);
    }
  }, [toast]);

  const disablePushNotifications = useCallback(async () => {
    if (!isNative()) return;
    
    try {
      const { PushNotifications } = await import('@capacitor/push-notifications');
      await PushNotifications.removeAllListeners();
      setIsEnabled(false);
      setToken(null);
    } catch (error) {
      console.error('Error disabling push notifications:', error);
    }
  }, []);

  return {
    token,
    isEnabled,
    initializePushNotifications,
    disablePushNotifications
  };
};
