
interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
