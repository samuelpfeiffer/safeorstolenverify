import heroBannerImage from '@/assets/hero-banner.png';

export const HeroBanner = () => {
  return (
    <div className="w-full">
      <img 
        src={heroBannerImage} 
        alt="SafeOrStolen verification on mobile and desktop devices showing Item Verified status"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </div>
  );
};
