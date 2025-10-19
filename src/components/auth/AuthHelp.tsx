import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const AuthHelp = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => navigate('/auth?tab=signin')}
        className="bg-sos-orange hover:bg-sos-orange/90 text-white shadow-lg flex items-center gap-2"
      >
        <HelpCircle className="h-4 w-4" />
        Sign In / Sign Up
      </Button>
    </div>
  );
};