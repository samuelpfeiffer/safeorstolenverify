import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

export const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Almost bought a 'like new' iPhone for $700. SafeOrStolen showed it was blacklisted. Dodged a $700 mistake in 20 seconds.",
      name: "Jennifer M.",
      location: "Phoenix",
      avatar: "JM",
      amount: "$700"
    },
    {
      quote: "Used it to verify a car before test driving. Found hidden accident history the seller 'forgot' to mention. Worth every penny.",
      name: "Marcus R.",
      location: "Tempe",
      avatar: "MR",
      amount: "$28,000"
    },
    {
      quote: "Our pawn shop uses it for every transaction. It's a game-changer for compliance and avoiding legal trouble.",
      name: "Mike's Pawn",
      location: "Scottsdale",
      avatar: "MP",
      amount: "Business"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Real Stories. Real Saved Money.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-4">
                    <DollarSign className="w-3 h-3 mr-1" />
                    Saved {testimonial.amount}
                  </Badge>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Big Stat Callout */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
              $100,000+
            </div>
            <div className="text-xl text-muted-foreground">
              in fraud prevented through SafeOrStolen verifications
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};