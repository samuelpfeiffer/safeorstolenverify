import { Button } from '@/components/ui/button';
import { Apple, PlayCircle, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppStoreBadgesProps {
  showPWA?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
}

export const AppStoreBadges = ({ 
  showPWA = true, 
  size = 'md',
  variant = 'default'
}: AppStoreBadgesProps) => {
  const navigate = useNavigate();

  const sizeClasses = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button 
        variant={variant}
        className={`gap-2 ${sizeClasses[size]}`}
        onClick={() => navigate('/app')}
      >
        <Apple className={iconSizes[size]} />
        <span className="flex flex-col items-start">
          <span className="text-xs opacity-80">Install on</span>
          <span className="font-semibold">iOS & Web</span>
        </span>
      </Button>

      <Button 
        variant={variant}
        className={`gap-2 ${sizeClasses[size]}`}
        onClick={() => navigate('/app')}
      >
        <PlayCircle className={iconSizes[size]} />
        <span className="flex flex-col items-start">
          <span className="text-xs opacity-80">Install on</span>
          <span className="font-semibold">Android & Web</span>
        </span>
      </Button>

      {showPWA && (
        <Button 
          variant="outline"
          className={`gap-2 ${sizeClasses[size]}`}
          onClick={() => navigate('/download')}
        >
          <Download className={iconSizes[size]} />
          <span className="flex flex-col items-start">
            <span className="text-xs opacity-80">Install</span>
            <span className="font-semibold">Web App</span>
          </span>
        </Button>
      )}
    </div>
  );
};
