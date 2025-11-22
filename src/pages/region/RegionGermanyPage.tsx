import { Shield, Smartphone, MapPin, TrendingUp, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const RegionGermanyPage = () => {
  const navigate = useNavigate();

  const majorCities = [
    { name: "Berlin", theftRate: "High", marketplaces: ["eBay Kleinanzeigen", "Facebook Marketplace"] },
    { name: "Hamburg", theftRate: "Medium-High", marketplaces: ["eBay Kleinanzeigen", "Shpock"] },
    { name: "München (Munich)", theftRate: "Medium", marketplaces: ["eBay Kleinanzeigen", "Quoka"] },
    { name: "Köln (Cologne)", theftRate: "Medium", marketplaces: ["eBay Kleinanzeigen", "Facebook"] },
    { name: "Frankfurt", theftRate: "Medium-High", marketplaces: ["eBay Kleinanzeigen", "Markt.de"] }
  ];

  return (
    <>
      <PageSEO
        title="Gestohlene Artikel Prüfen in Deutschland | SafeOrStolen"
        description="Überprüfen Sie Handys, Fahrzeuge und gestohlene Artikel in Deutschland. Vollständige Abdeckung von Berlin, Hamburg, München. Integration mit eBay Kleinanzeigen."
        keywords="gestohlene Artikel Deutschland, IMEI prüfen Deutschland, Fahrzeug Prüfung, eBay Kleinanzeigen sicher"
        canonical="/region/germany"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Bilingual Hero */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">🇩🇪 Service in Deutschland</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestohlene Artikel in Deutschland Überprüfen<br />
              <span className="text-primary">Vor dem Kauf oder Verkauf</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Schützen Sie sich vor Diebstahl mit unserer mobilen App. Überprüfen Sie Handys, 
              Fahrzeuge, Elektronik und mehr in ganz Deutschland.
            </p>

            <p className="text-lg text-muted-foreground mb-8 italic">
              Protect yourself from theft with our mobile app. Verify phones, vehicles, 
              electronics and more throughout Germany.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                Jetzt Kostenlos Prüfen
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Mobile App Herunterladen
              </Button>
            </div>
          </div>
        </section>

        {/* Germany Stats */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">1.8M+</div>
              <div className="text-sm text-muted-foreground">Diebstähle pro Jahr</div>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">420K+</div>
              <div className="text-sm text-muted-foreground">Gestohlene Handys/Jahr</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">180K+</div>
              <div className="text-sm text-muted-foreground">Gestohlene Fahrzeuge/Jahr</div>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">Aktive Nutzer</div>
            </Card>
          </div>
        </section>

        {/* Major Cities Coverage */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Abdeckung in Deutschen Großstädten
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {majorCities.map((city, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Diebstahlrate: {city.theftRate}
                      </span>
                      <span>Marktplätze: {city.marketplaces.join(", ")}</span>
                    </div>
                  </div>
                  <Button onClick={() => navigate(`/city/${city.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                    Details Anzeigen
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Marketplace Integration */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Integration mit eBay Kleinanzeigen und Anderen Marktplätzen
            </h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Für Käufer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>IMEI vor Kauf auf eBay Kleinanzeigen prüfen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Seriennummern mit Handy scannen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sofortige Ergebnisse auf Facebook Marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Schutz vor Betrug auf Shpock und Quoka</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Für Verkäufer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Zertifizieren Sie, dass Ihr Artikel nicht gestohlen ist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Erhöhen Sie das Vertrauen der Käufer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Schneller verkaufen mit Zertifikat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rechtlicher Schutz beim Verkauf</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Mobile App CTA */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              SafeOrStolen Mobile App Herunterladen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verfügbar für iOS und Android. Überprüfen Sie Artikel überall in Deutschland 
              durch einfaches Scannen des Barcodes oder der Seriennummer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/download-app')}>
                Für iOS Herunterladen
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Für Android Herunterladen
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Häufig Gestellte Fragen | Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">Wie funktioniert SafeOrStolen in Deutschland?</h3>
                <p className="text-muted-foreground">
                  SafeOrStolen überprüft Artikel gegen Diebstahldatenbanken in Deutschland und weltweit. 
                  Scannen Sie einfach IMEI, Fahrgestellnummer oder Seriennummer mit unserer mobilen App.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Ist SafeOrStolen in Deutschland legal?</h3>
                <p className="text-muted-foreground">
                  Ja, es ist völlig legal. Wir helfen, Diebstahl zu reduzieren und Käufer sowie Verkäufer 
                  auf deutschen Marktplätzen zu schützen. DSGVO-konform.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Funktioniert es mit eBay Kleinanzeigen?</h3>
                <p className="text-muted-foreground">
                  Ja, unsere Überprüfung funktioniert mit allen Marktplätzen in Deutschland einschließlich 
                  eBay Kleinanzeigen, Facebook, Shpock, Quoka und mehr.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegionGermanyPage;
