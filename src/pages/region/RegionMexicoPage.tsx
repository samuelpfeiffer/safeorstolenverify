import { Shield, Smartphone, MapPin, TrendingUp, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const RegionMexicoPage = () => {
  const navigate = useNavigate();

  const majorCities = [
    { name: "Ciudad de México", theftRate: "Alta", marketplaces: ["Mercado Libre", "Facebook Marketplace"] },
    { name: "Guadalajara", theftRate: "Media-Alta", marketplaces: ["Mercado Libre", "OLX"] },
    { name: "Monterrey", theftRate: "Media", marketplaces: ["Mercado Libre", "Facebook"] },
    { name: "Puebla", theftRate: "Media", marketplaces: ["Mercado Libre", "Vivanuncios"] },
    { name: "Tijuana", theftRate: "Alta", marketplaces: ["OfferUp", "Craigslist", "Facebook"] }
  ];

  return (
    <>
      <PageSEO
        title="Verificador de Artículos Robados en México | SafeOrStolen"
        description="Verifica teléfonos, vehículos y artículos robados en México. Cobertura completa de CDMX, Guadalajara, Monterrey. Integración con Mercado Libre y más."
        keywords="verificador robados México, IMEI México, VIN México, Mercado Libre seguro, artículos robados CDMX"
        canonical="/region/mexico"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Bilingual Hero */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">🇲🇽 Servicio en México</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Verifica Artículos Robados en México<br />
              <span className="text-primary">Antes de Comprar o Vender</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Protégete contra el robo con nuestra aplicación móvil. Verifica teléfonos, 
              vehículos, electrónicos y más en toda la República Mexicana.
            </p>

            <p className="text-lg text-muted-foreground mb-8 italic">
              Protect yourself from theft with our mobile app. Verify phones, vehicles, 
              electronics and more throughout Mexico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                Verificar Ahora Gratis
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Descargar App Móvil
              </Button>
            </div>
          </div>
        </section>

        {/* Mexico Stats */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">2.1M+</div>
              <div className="text-sm text-muted-foreground">Reportes de robo anuales</div>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">850K+</div>
              <div className="text-sm text-muted-foreground">Teléfonos robados/año</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">320K+</div>
              <div className="text-sm text-muted-foreground">Vehículos robados/año</div>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">15K+</div>
              <div className="text-sm text-muted-foreground">Usuarios verificando</div>
            </Card>
          </div>
        </section>

        {/* Major Cities Coverage */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cobertura en las Principales Ciudades de México
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
                        Índice de Robo: {city.theftRate}
                      </span>
                      <span>Marketplaces: {city.marketplaces.join(", ")}</span>
                    </div>
                  </div>
                  <Button onClick={() => navigate(`/city/${city.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                    Ver Detalles
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
              Integración con Mercado Libre y Otros Marketplaces
            </h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Para Compradores</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Verifica IMEI antes de comprar en Mercado Libre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Escanea números de serie con tu celular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Resultados instantáneos en Facebook Marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Protégete de estafas en OLX y Vivanuncios</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Para Vendedores</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Certifica que tu artículo no es robado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Aumenta la confianza de compradores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Vende más rápido con certificado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Protección legal al vender</span>
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
              Descarga la App Móvil de SafeOrStolen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Disponible para iOS y Android. Verifica artículos en cualquier lugar de México 
              con solo escanear el código de barras o número de serie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/download-app')}>
                Descargar para iOS
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Descargar para Android
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Preguntas Frecuentes | Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">¿Cómo funciona SafeOrStolen en México?</h3>
                <p className="text-muted-foreground">
                  SafeOrStolen verifica artículos contra bases de datos de robo en México y globales. 
                  Simplemente escanea el IMEI, VIN, o número de serie con nuestra app móvil.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">¿Es legal usar SafeOrStolen en México?</h3>
                <p className="text-muted-foreground">
                  Sí, es completamente legal. Ayudamos a reducir el robo y proteger a compradores 
                  y vendedores en marketplaces mexicanos.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">¿Funciona con Mercado Libre y Facebook Marketplace?</h3>
                <p className="text-muted-foreground">
                  Sí, nuestra verificación funciona con todos los marketplaces en México incluyendo 
                  Mercado Libre, Facebook, OLX, Vivanuncios y más.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegionMexicoPage;
