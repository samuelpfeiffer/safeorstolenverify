
export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            The <span className="text-destructive">$13 Billion</span> Crisis 
            <br />Hidden in Plain Sight
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Every year, millions of Americans unknowingly purchase stolen goods, 
            funding criminal enterprises and facing serious legal consequences. 
            This is the hidden crisis destroying trust in secondhand markets.
          </p>
        </div>
      </div>
    </section>
  );
};
