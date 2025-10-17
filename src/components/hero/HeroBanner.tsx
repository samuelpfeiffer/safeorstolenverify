import heroBannerImage from '@/assets/hero-banner.png';

export const HeroBanner = () => {
  return (
    <section className="w-full bg-gradient-to-b from-card/5 to-transparent">
      <div className="container mx-auto px-4">
        <img 
          src={heroBannerImage} 
          alt="SafeOrStolen verification shown on mobile and desktop devices displaying Item Verified status for secure secondhand transactions"
          className="w-full h-auto max-w-5xl mx-auto rounded-xl shadow-elegant"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>
    </section>
  );
};
