import billboardImage from '@/assets/billboard-street-view.jpg';

export const BillboardSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Mission in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spreading awareness nationwide to protect buyers and sellers from fraud
            </p>
          </div>

          {/* Billboard Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={billboardImage} 
              alt="SafeOrStolen billboard campaign - Person viewing message 'Before Any Transaction with Second-Hand Items, Always Check SafeOrStolen.com First' on urban billboard"
              className="relative w-full h-auto rounded-xl shadow-2xl object-cover border-2 border-primary/30 ring-2 ring-primary/10 hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
              decoding="async"
              width="1200"
              height="1200"
            />
          </div>

          {/* Caption */}
          <div className="mt-8 text-center">
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              <span className="font-semibold text-foreground">Before any transaction with second-hand items, always check SafeOrStolen.com first.</span>
              {" "}Our nationwide campaign is educating buyers and sellers about the importance of verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
