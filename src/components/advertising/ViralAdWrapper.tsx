import React, { useState } from 'react';
import { Share2, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ViralAdWrapperProps {
  children: React.ReactNode;
  imageUrl: string;
  shareTitle: string;
  shareText: string;
}

/**
 * Wrapper component that makes ads shareable and viral-ready
 * Implements social sharing, download, and engagement tracking
 */
export const ViralAdWrapper: React.FC<ViralAdWrapperProps> = ({
  children,
  imageUrl,
  shareTitle,
  shareText
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href
        });
        
        // Track share event
        console.log('Ad shared:', shareTitle);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(`${shareText} - ${window.location.href}`);
      toast({
        title: "Link copied!",
        description: "Share this with friends to protect them from scams"
      });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'safeorstolen-warning.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Downloaded!",
      description: "Share this warning to protect others"
    });
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Social sharing overlay */}
      {isHovered && (
        <div className="absolute top-2 right-2 flex gap-2 animate-fade-in">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white shadow-lg"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white shadow-lg"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      {/* Engagement tracking pixel */}
      <div 
        className="absolute bottom-0 left-0 w-1 h-1 opacity-0 pointer-events-none"
        data-ad-impression="true"
        data-ad-title={shareTitle}
      />
    </div>
  );
};
