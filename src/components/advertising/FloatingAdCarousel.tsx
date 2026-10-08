import React, { useEffect, useState, useCallback } from 'react';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import handshakeConfidence from '@/assets/ads/handshake-confidence.jpg';
import smartphoneCheck from '@/assets/ads/smartphone-check.jpg';
import laptopVerify from '@/assets/ads/laptop-verify.jpg';
import firearmCheck from '@/assets/ads/firearm-check.jpg';

interface Ad {
  src: string;
  alt: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const FloatingAdCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const ads: Ad[] = [
    {
      src: handshakeConfidence,
      alt: 'Buy & Sell with Confidence',
      title: 'Limited Time Offer',
      description: 'Verify items from $0.99/check or $10/month unlimited. Protect yourself from stolen goods and fraudulent sellers.',
      ctaText: 'View Pricing',
      ctaLink: '/pricing'
    },
    {
      src: handshakeConfidence,
      alt: 'Handshake Confidence',
      title: 'Buy & Sell with Confidence',
      description: 'Join thousands of users who verify before they buy. Protect yourself from legal trouble and financial loss.',
      ctaText: 'Start Verification',
      ctaLink: '/real-time-verification'
    },
    {
      src: smartphoneCheck,
      alt: 'Smartphone Verification',
      title: 'Verify Smartphones Instantly',
      description: 'Check IMEI numbers in seconds. Know if a phone is stolen, blacklisted, or safe to purchase.',
      ctaText: 'Check IMEI Now',
      ctaLink: '/real-time-verification'
    },
    {
      src: laptopVerify,
      alt: 'Laptop Verification',
      title: 'Electronics Protection',
      description: 'Verify laptops, tablets, and electronics before buying. Access worldwide stolen item databases.',
      ctaText: 'Verify Device',
      ctaLink: '/real-time-verification'
    },
    {
      src: firearmCheck,
      alt: 'Firearm Verification - Not sure where that guns been? Check it out on SafeOrStolen.com',
      title: 'Not Sure Where That Guns Been?',
      description: "Make sure you check it out on SafeOrStolen.com before you buy a used firearm. Stay legal and safe.",
      ctaText: 'Check Firearm Serial',
      ctaLink: '/real-time-verification?category=firearms'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  }, [ads.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  }, [ads.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleAdClick = () => {
    setIsModalOpen(true);
    setIsPaused(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPaused(false);
  };

  return (
    <>
      {/* Floating Carousel - More Prominent */}
      <div 
        className="fixed bottom-4 right-4 z-50 w-96 bg-card/98 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-primary/30 overflow-hidden animate-fade-in"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Ad Image */}
        <div 
          className="relative h-64 cursor-pointer group overflow-hidden"
          onClick={handleAdClick}
        >
          <OptimizedImage
            src={ads[currentIndex].src}
            alt={ads[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Ad Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-lg mb-1">{ads[currentIndex].title}</h3>
            <p className="text-white/90 text-sm line-clamp-2">{ads[currentIndex].description}</p>
          </div>

          {/* Pulse Animation */}
          <div className="absolute top-3 right-3">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between p-3 bg-background/50">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Previous ad"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to ad ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Next ad"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Expanded Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{ads[currentIndex].title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              {ads[currentIndex].description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <OptimizedImage
              src={ads[currentIndex].src}
              alt={ads[currentIndex].alt}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          <div className="flex gap-3 mt-6">
            <Link to={ads[currentIndex].ctaLink} className="flex-1" onClick={handleCloseModal}>
              <Button size="lg" className="w-full font-semibold">
                {ads[currentIndex].ctaText}
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
