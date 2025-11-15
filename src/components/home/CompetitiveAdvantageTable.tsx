import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Trophy } from "lucide-react";

export const CompetitiveAdvantageTable = () => {
  const comparisons = [
    { feature: "Desktop-only websites", others: false, us: true, usText: "Mobile app (check on-site)" },
    { feature: "Phone OR car (choose one)", others: false, us: true, usText: "All categories (IMEI, VIN, serial)" },
    { feature: "$40+ per check", others: false, us: true, usText: "Free basic ($4.99 premium)" },
    { feature: "Static databases", others: false, us: true, usText: "Real-time verification" },
    { feature: "No receipts", others: false, us: true, usText: "Digital certificates" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why SafeOrStolen vs. Everyone Else
            </h2>
          </div>

          {/* Comparison Table */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted">
                    <th className="p-4 text-left font-semibold text-foreground">Feature</th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">Other Services</th>
                    <th className="p-4 text-center font-semibold text-primary">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                      <td className="p-4 font-medium text-foreground">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.others ? (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <span className="text-sm font-semibold text-primary">{row.usText}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Highlight Callout */}
          <Card className="mt-8 p-6 bg-secondary/10 border-secondary border-2">
            <div className="flex items-center gap-4">
              <Trophy className="w-10 h-10 text-secondary shrink-0" />
              <div>
                <div className="text-xl font-bold text-foreground mb-1">
                  The ONLY mobile platform with multi-category verification
                </div>
                <div className="text-muted-foreground">
                  Check phones, cars, and electronics — all in one place
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};