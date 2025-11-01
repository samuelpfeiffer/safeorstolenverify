import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, MapPin, AlertTriangle, Users } from 'lucide-react';

export default function RegionBrazilPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Verificador de Itens Roubados Brasil | SafeOrStolen Database"
        description="Verifique se celulares, carros e eletrônicos são roubados antes de comprar no Mercado Livre, OLX e Facebook. 4 verificações GRATUITAS por mês."
        keywords="verificar item roubado Brasil, Mercado Livre segurança, OLX verificação Brasil, celular roubado Brasil"
        structuredData={[{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SafeOrStolen Brasil",
          "serviceType": "Verificação de Itens Roubados",
          "areaServed": {
            "@type": "Country",
            "name": "Brazil"
          }
        }]}
      />
      <AISearchOptimizer
        page="regional"
        primaryKeywords={['verificar item roubado Brasil', 'Mercado Livre segurança', 'celular roubado']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Brasil</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
              Verificador de Itens Roubados #1 do Brasil
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
              Proteja-se de comprar produtos roubados. Verifique celulares, carros e eletrônicos antes de comprar no Mercado Livre, OLX ou Facebook Marketplace.
            </p>
            
            <p className="text-lg text-gray-500 text-center mb-8 max-w-3xl mx-auto">
              <em>Protect yourself from buying stolen goods. Verify phones, cars, and electronics before buying on Mercado Livre, OLX, or Facebook Marketplace.</em>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Verificar Agora (GRÁTIS)
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/app')}>
                Baixar Aplicativo
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Crise de Roubo no Brasil
            </h2>
            <p className="text-center text-gray-600 mb-12">
              <em>Theft Crisis in Brazil</em>
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">R$ 8B+</div>
                <div className="text-gray-600">Mercado de produtos roubados</div>
                <div className="text-sm text-gray-500 italic">Stolen goods market annually</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2.5M+</div>
                <div className="text-gray-600">Celulares roubados/ano</div>
                <div className="text-sm text-gray-500 italic">Phones stolen per year</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">450K+</div>
                <div className="text-gray-600">Veículos roubados</div>
                <div className="text-sm text-gray-500 italic">Vehicles stolen annually</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">8M+</div>
                <div className="text-gray-600">Usuários brasileiros</div>
                <div className="text-sm text-gray-500 italic">Brazilian users</div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Verifique Itens dos Principais Marketplaces Brasileiros
            </h2>
            <p className="text-center text-gray-600 mb-12">
              <em>Verify Items from Brazil's Top Marketplaces</em>
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Mercado Livre</h3>
                <p className="text-gray-600 mb-4">Popular para: Eletrônicos, veículos, celulares</p>
                <p className="text-sm text-gray-500 mb-4 italic">Popular for: Electronics, vehicles, phones</p>
                <Button variant="outline" size="sm" onClick={() => navigate('/verify')}>
                  Verificar do Mercado Livre
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">OLX Brasil</h3>
                <p className="text-gray-600 mb-4">Popular para: Carros, motos, eletrônicos</p>
                <p className="text-sm text-gray-500 mb-4 italic">Popular for: Cars, motorcycles, electronics</p>
                <Button variant="outline" size="sm" onClick={() => navigate('/verify')}>
                  Verificar da OLX
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Facebook Marketplace</h3>
                <p className="text-gray-600 mb-4">Popular para: Todas as categorias</p>
                <p className="text-sm text-gray-500 mb-4 italic">Popular for: All categories</p>
                <Button variant="outline" size="sm" onClick={() => navigate('/verify')}>
                  Verificar do Facebook
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Cobertura nas Principais Cidades Brasileiras
            </h2>
            <p className="text-center text-gray-600 mb-12">
              <em>Coverage in Major Brazilian Cities</em>
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: "São Paulo", pop: "12M+", rate: "Muito Alto" },
                { city: "Rio de Janeiro", pop: "6.7M+", rate: "Muito Alto" },
                { city: "Brasília", pop: "3M+", rate: "Alto" },
                { city: "Salvador", pop: "2.9M+", rate: "Alto" },
                { city: "Fortaleza", pop: "2.7M+", rate: "Alto" },
                { city: "Belo Horizonte", pop: "2.5M+", rate: "Alto" },
                { city: "Manaus", pop: "2.2M+", rate: "Médio" },
                { city: "Curitiba", pop: "1.9M+", rate: "Médio" }
              ].map((city, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-bold mb-1">{city.city}</h3>
                  <p className="text-sm text-gray-600">Pop: {city.pop}</p>
                  <p className="text-sm">
                    Taxa de Roubo: <span className={
                      city.rate === "Muito Alto" ? "text-red-600 font-semibold" :
                      city.rate === "Alto" ? "text-orange-600 font-semibold" :
                      "text-yellow-600 font-semibold"
                    }>{city.rate}</span>
                  </p>
                </Card>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8">
              Também servindo: Porto Alegre, Recife, Belém, Goiânia, Campinas, e mais de 200 cidades brasileiras
            </p>
            <p className="text-center text-sm text-gray-500 italic">
              Also serving: Porto Alegre, Recife, Belém, Goiânia, Campinas, and 200+ Brazilian cities
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Parceria com Polícia Brasileira
            </h2>
            <p className="text-gray-600 mb-2 italic">Partnership with Brazilian Police</p>
            <p className="text-xl text-gray-700 mb-8">
              SafeOrStolen trabalha diretamente com a Polícia Civil, Polícia Militar e delegacias em todo o Brasil para rastrear produtos roubados.
            </p>
            <p className="text-lg text-gray-600 italic">
              SafeOrStolen works directly with Civil Police, Military Police, and police stations across Brazil to track stolen goods.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Histórias Reais de Usuários Brasileiros
            </h2>
            <p className="text-center text-gray-600 mb-12 italic">
              Real Stories from Brazilian Users
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Estava comprando um iPhone no Mercado Livre por R$ 1.500. SafeOrStolen mostrou que foi roubado em São Paulo. Me salvou!"
                </p>
                <p className="font-semibold">— Carlos S., São Paulo</p>
                <p className="text-sm text-gray-500 italic">
                  "Was buying an iPhone on Mercado Livre for R$ 1,500. SafeOrStolen showed it was stolen in São Paulo. Saved me!"
                </p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Minha loja de celulares no Rio agora verifica todos os aparelhos usados. SafeOrStolen é essencial para nosso negócio."
                </p>
                <p className="font-semibold">— Ana P., Rio de Janeiro</p>
                <p className="text-sm text-gray-500 italic">
                  "My phone shop in Rio now verifies all used devices. SafeOrStolen is essential for our business."
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Proteja-se do Mercado de Produtos Roubados
            </h2>
            <p className="text-lg mb-2 italic opacity-90">
              Protect Yourself from the Stolen Goods Market
            </p>
            <p className="text-xl mb-8 opacity-90">
              4 verificações GRATUITAS todos os meses. Sem cartão de crédito. Confiado por milhões de brasileiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Verificar Agora (GRÁTIS)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/app')}
                className="bg-white/10 hover:bg-white/20 border-white text-white"
              >
                Baixar Aplicativo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
