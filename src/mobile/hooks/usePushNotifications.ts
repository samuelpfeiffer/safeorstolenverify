import { useState, useEffect, useCallback } from 'react';
import { PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { useToast } from '@/hooks/use-toast';

export const usePushNotifications = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const { toast } = useToast();

  const initializePushNotifications = useCallback(async () => {
    if (!Capacitor.isNativePlatform()) {
      console.log('Push notifications only work on native platforms');
      return;
    }

    try {
      // Request permission
      const permission = await PushNotifications.requestPermissions();
      
      if (permission.receive === 'granted') {
        await PushNotifications.register();
        setIsEnabled(true);
      }

      // Listen for registration
      await PushNotifications.addListener('registration', (token: Token) => {
        console.log('Push registration success, token:', token.value);
        setToken(token.value);
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
      await PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
        console.log('Push notification action performed:', notification);
      });

    } catch (error) {
      console.error('Push notification initialization error:', error);
    }
  }, [toast]);

  const disablePushNotifications = useCallback(async () => {
    if (!Capacitor.isNativePlatform()) return;
    
    try {
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
