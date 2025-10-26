import { useCallback } from 'react';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { Capacitor } from '@capacitor/core';

export const useHapticFeedback = () => {
  const isNative = Capacitor.isNativePlatform();

  const impact = useCallback(async (style: 'light' | 'medium' | 'heavy' = 'medium') => {
    if (!isNative) return;
    
    try {
      const impactStyle = style === 'light' ? ImpactStyle.Light :
                          style === 'heavy' ? ImpactStyle.Heavy :
                          ImpactStyle.Medium;
      await Haptics.impact({ style: impactStyle });
    } catch (error) {
      console.error('Haptic feedback error:', error);
    }
  }, [isNative]);

  const notification = useCallback(async (type: 'success' | 'warning' | 'error') => {
    if (!isNative) return;
    
    try {
      const notificationType = type === 'success' ? NotificationType.Success :
                               type === 'error' ? NotificationType.Error :
                               NotificationType.Warning;
      await Haptics.notification({ type: notificationType });
    } catch (error) {
      console.error('Haptic notification error:', error);
    }
  }, [isNative]);

  const vibrate = useCallback(async (duration: number = 300) => {
    if (!isNative) {
      // Fallback for web
      if (navigator.vibrate) {
        navigator.vibrate(duration);
      }
      return;
    }
    
    try {
      await Haptics.vibrate({ duration });
    } catch (error) {
      console.error('Vibrate error:', error);
    }
  }, [isNative]);

  return {
    impact,
    notification,
    vibrate,
    isAvailable: isNative
  };
};
