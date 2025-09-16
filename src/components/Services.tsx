import { ShoppingBag, Palette, Headphones, Package, Globe, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Venda de Artigos Religiosos",
      description: "Ampla variedade de velas, imagens, incensos, ervas, colares, cordões e muito mais para suas práticas espirituais.",
      features: ["Velas especiais", "Imagens religiosas", "Incensos aromáticos", "Ervas sagradas"]
    },
    {
      icon: Palette,
      title: "Montagem de Kits Personalizados",
      description: "Kits preparados sob medida para seus rituais e celebrações, com produtos selecionados especialmente para você.",
      features: ["Kits personalizados", "Orientação especializada", "Produtos selecionados", "Embalagem especial"]
    },
    {
      icon: Headphones,
      title: "Atendimento Especializado",
      description: "Nossa equipe oferece orientação cuidadosa para ajudar você a encontrar exatamente o que precisa.",
      features: ["Consultoria especializada", "Atendimento personalizado", "Orientação espiritual", "Suporte completo"]
    },
    {
      icon: Package,
      title: "Encomendas e Pedidos Especiais",
      description: "Não encontrou o que procura? Fazemos encomendas e buscamos produtos especiais sob demanda.",
      features: ["Produtos sob encomenda", "Busca especializada", "Importação de itens", "Prazo garantido"]
    },
    {
      icon: Globe,
      title: "Atendimento Online e Presencial",
      description: "Facilidades para comprar do jeito que for melhor para você, seja presencialmente ou pela internet.",
      features: ["Loja física", "Atendimento online", "WhatsApp", "Entrega disponível"]
    }
  ];

  const products = [
    "Velas aromáticas e litúrgicas",
    "Imagens e estátuas religiosas",
    "Incensos de diversas fragrâncias",
    "Ervas para banhos e rituais",
    "Colares e cordões especiais",
    "Cristais e pedras energéticas",
    "Óleos essenciais e unguentos",
    "Materiais para rituais diversos"
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-serif">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Na Flora Parobé, oferecemos muito mais do que artigos religiosos. Nosso compromisso é 
              proporcionar experiências que fortalecem a fé, a tradição e a espiritualidade.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300 group h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground font-serif">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Products Section */}
          <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 shadow-elegant">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
                Nossos Produtos
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Trabalhamos com uma ampla gama de artigos religiosos e espirituais, 
                todos selecionados com cuidado e qualidade garantida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {products.map((product, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/30 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <Star className="w-4 h-4 text-primary fill-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{product}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-foreground/90 mb-6 italic">
                "Cada produto é escolhido com carinho para atender suas necessidades espirituais"
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <a href="https://wa.me/5199889444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/43a844dc-ff05-4541-8844-254d6e71d785.png" 
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                  Consulte Nossos Produtos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;