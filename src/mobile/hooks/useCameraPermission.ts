import { useState, useEffect, useCallback } from 'react';
import { Camera } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

export const useCameraPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);

  const checkPermission = useCallback(async () => {
    if (!Capacitor.isNativePlatform()) {
      // Web - check navigator.mediaDevices
      try {
        const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
        setHasPermission(result.state === 'granted');
      } catch {
        setHasPermission(null);
      }
      return;
    }

    try {
      const permissions = await Camera.checkPermissions();
      setHasPermission(permissions.camera === 'granted');
    } catch (error) {
      console.error('Camera permission check error:', error);
      setHasPermission(false);
    }
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    setIsRequesting(true);
    try {
      if (!Capacitor.isNativePlatform()) {
        // Web - request via getUserMedia
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach(track => track.stop());
        setHasPermission(true);
        return true;
      }

      const permissions = await Camera.requestPermissions();
      const granted = permissions.camera === 'granted';
      setHasPermission(granted);
      return granted;
    } catch (error) {
      console.error('Camera permission request error:', error);
      setHasPermission(false);
      return false;
    } finally {
      setIsRequesting(false);
    }
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return {
    hasPermission,
    isRequesting,
    requestPermission,
    checkPermission
  };
};
