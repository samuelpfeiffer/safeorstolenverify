
interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 bg-sos-dark/80 p-4 rounded-lg border border-sos-orange/20">
            <span className="w-2 h-2 bg-sos-lime rounded-full"></span>
            <span>Accelerated by</span>
            <a 
              href="https://fastercapital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sos-orange hover:text-sos-orange/80 transition-colors font-semibold"
            >
              FasterCapital
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
