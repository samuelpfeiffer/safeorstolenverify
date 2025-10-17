import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Redirect page: /download-app → /mobile-app
 * This ensures consistency as /mobile-app is the canonical app download page
 */
const DownloadAppPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Immediate redirect to the canonical mobile app page
    navigate('/mobile-app', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to app download...</p>
      </div>
    </div>
  );
};

export default DownloadAppPage;
