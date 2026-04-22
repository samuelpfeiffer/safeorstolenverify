import { Download, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePWAContext } from '@/core/providers/PWAProvider';
import { useToast } from '@/hooks/use-toast';

export const DownloadAppBanner = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isInstallAvailable, showInstallPrompt } = usePWAContext();

  const handleDownload = async () => {
    if (isInstallAvailable) {
      try {
        const accepted = await showInstallPrompt();
        if (accepted) {
          toast({
            title: '🎉 App Installed!',
            description: 'SafeOrStolen is now on your home screen.',
          });
          return;
        }
      } catch (e) {
        // fall through to install guide
      }
    }
    navigate('/install-app');
  };

  return (
    <div
      className="bg-primary text-primary-foreground py-2.5 px-4 text-sm font-semibold mt-16 flex items-center justify-center gap-3 flex-wrap"
      style={{ minHeight: '40px' }}
    >
      <Smartphone className="w-4 h-4" aria-hidden="true" />
      <span>Download the SafeOrStolen App</span>
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center gap-1.5 bg-primary-foreground text-primary font-bold px-3 py-1 rounded-md hover:bg-primary-foreground/90 transition-colors"
      >
        <Download className="w-3.5 h-3.5" aria-hidden="true" />
        Download
      </button>
    </div>
  );
};
