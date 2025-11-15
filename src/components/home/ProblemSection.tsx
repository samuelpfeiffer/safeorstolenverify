import { Card } from "@/components/ui/card";
import { AlertTriangle, Smartphone, Car, Laptop } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Smartphone,
      title: "Stolen Phones",
      stat: "1 in 7",
      description: "used phones is blacklisted",
      loss: "$800 average loss",
      impact: "Can't activate on your carrier"
    },
    {
      icon: Car,
      title: "Salvage Vehicles",
      stat: "450,000+",
      description: "cars stolen annually",
      loss: "$28,000 average loss",
      impact: "Worthless resale value"
    },
    {
      icon: Laptop,
      title: "Hot Electronics",
      stat: "$15B",
      description: "in stolen goods sold yearly",
      loss: "$2,500 average loss",
      impact: "Legal liability risk"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              One Bad Transaction Can Cost You Thousands
            </h2>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{problem.title}</h3>
                    <div>
                      <div className="text-3xl font-bold text-red-500 mb-1">{problem.stat}</div>
                      <div className="text-sm text-muted-foreground mb-3">{problem.description}</div>
                      <div className="text-lg font-semibold text-red-600 mb-2">{problem.loss}</div>
                      <div className="text-sm text-muted-foreground italic">{problem.impact}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Warning Callout */}
          <Card className="p-8 bg-destructive/10 border-destructive border-2">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-destructive mb-2">
                  Buying without verification? You're gambling with $10,000+
                </h3>
                <p className="text-lg text-foreground">
                  Check in 30 seconds — or regret it forever.
                </p>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};