import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    date: "2025-09-15",
    text: "Saved me from buying a stolen iPhone on Facebook Marketplace! The IMEI check came back as blacklisted. Worth every penny of the free verification.",
    location: "Los Angeles, CA"
  },
  {
    author: "Michael R.",
    rating: 5,
    date: "2025-09-10",
    text: "As a used car dealer, this VIN checker is essential. Quick, accurate, and has prevented me from accidentally buying stolen vehicles twice now.",
    location: "Houston, TX"
  },
  {
    author: "Jennifer K.",
    rating: 5,
    date: "2025-09-05",
    text: "The serial number check for my laptop purchase gave me peace of mind. Clean report, and I completed my purchase confidently. Highly recommend!",
    location: "New York, NY"
  }
];

export const ReviewSchema = () => {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SafeOrStolen Verification Service",
    "description": "Free IMEI, VIN, and serial number verification service to check if items are stolen",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://safeorstolen.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aggregateRating)}
        </script>
      </Helmet>
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Thousands of Buyers & Sellers
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-2xl font-bold ml-2">4.9</span>
              </div>
              <p className="text-muted-foreground">Based on 12,847+ verified reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-foreground">{review.author}</span>
                    <span className="text-muted-foreground text-xs">{review.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};