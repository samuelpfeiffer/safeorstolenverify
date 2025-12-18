
import { Shield, Settings, Activity, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const SecurityHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-sos border-b border-sos-orange/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-sos-orange" />
            <div>
              <h2 className="text-xl font-bold text-white">Security Center</h2>
              <p className="text-sm text-gray-400">Manage your account security and privacy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/profile')}
              className="text-gray-300 hover:text-sos-orange"
            >
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/dashboard')}
              className="text-gray-300 hover:text-sos-orange"
            >
              <Activity className="h-4 w-4 mr-1" />
              Activity
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/profile')}
              className="text-gray-300 hover:text-sos-orange"
            >
              <Database className="h-4 w-4 mr-1" />
              Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
