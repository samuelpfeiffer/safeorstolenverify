
import { Wifi, WifiOff } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { cn } from '@/lib/utils';

export const OfflineIndicator = () => {
  const { isOnline } = usePWA();

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-16 left-4 right-4 z-50 animate-slideDown">
      <div className="bg-amber-500 text-amber-900 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 max-w-md mx-auto">
        <WifiOff className="h-4 w-4" />
        <span className="text-sm font-medium">
          You're offline. Some features may be limited.
        </span>
      </div>
    </div>
  );
};
