import heroBannerImage from '@/assets/sos-billboard.jpg';

export const HeroBanner = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <img 
            src={heroBannerImage} 
            alt="Person viewing SafeOrStolen billboard message - Before any transaction with second-hand items, always check SafeOrStolen.com first"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
