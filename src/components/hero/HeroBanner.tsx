import heroBannerImage from '@/assets/sos-billboard.jpg';

export const HeroBanner = () => {
  return (
    <section className="w-full py-8 bg-gradient-to-b from-background via-orange-950/30 to-amber-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-yellow-500/20 to-orange-500/30 rounded-2xl blur-2xl"></div>
            <img 
              src={heroBannerImage} 
              alt="Person viewing SafeOrStolen billboard message - Before any transaction with second-hand items, always check SafeOrStolen.com first"
              className="relative w-full h-auto rounded-xl shadow-2xl object-cover border-2 border-primary/40 ring-2 ring-primary/20"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
