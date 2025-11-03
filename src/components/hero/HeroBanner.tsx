import heroBannerImage from '@/assets/sos-billboard.jpg';

export const HeroBanner = () => {
  return (
    <section className="w-full bg-transparent py-8">
      <div className="container mx-auto px-4">
        <img 
          src={heroBannerImage} 
          alt="Person viewing SafeOrStolen billboard message - Before any transaction with second-hand items, always check SafeOrStolen.com first"
          className="w-full h-auto max-w-5xl mx-auto rounded-xl shadow-2xl"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>
    </section>
  );
};
