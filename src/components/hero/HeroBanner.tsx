import heroBannerImage from '@/assets/sos-billboard.jpg';

export const HeroBanner = () => {
  return (
    <section className="w-full bg-gradient-to-b from-card/5 to-transparent">
      <div className="container mx-auto px-4">
        <img 
          src={heroBannerImage} 
          alt="Person viewing SafeOrStolen billboard message about checking secondhand items before transactions to protect buyers and sellers"
          className="w-full h-auto max-w-5xl mx-auto rounded-xl shadow-elegant"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>
    </section>
  );
};
