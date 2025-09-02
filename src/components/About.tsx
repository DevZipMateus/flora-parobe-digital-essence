import { Heart, Users, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Cada cliente é recebido com carinho e respeito, em um ambiente acolhedor e tranquilo."
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Trabalhamos apenas com produtos de alta qualidade, selecionados com cuidado e dedicação."
    },
    {
      icon: Users,
      title: "Tradição",
      description: "Preservamos as tradições religiosas, respeitando a história e a fé de cada cliente."
    },
    {
      icon: Sparkles,
      title: "Energia Positiva",
      description: "Nossa loja é um espaço de energia positiva, onde você encontra apoio para sua caminhada espiritual."
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-serif">
              Nossa História
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça os valores que nos guiam e nossa missão de levar espiritualidade 
              e tradição para todos que buscam artigos religiosos de qualidade.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-serif mb-6">
                Mais do que uma loja, um espaço de fé
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  A <strong className="text-primary">Flora Parobé</strong> nasceu com o propósito de 
                  levar espiritualidade, tradição e acolhimento para todos que buscam artigos 
                  religiosos de qualidade. Localizada no coração de Porto Alegre, nossa loja é 
                  um espaço de fé e respeito.
                </p>
                
                <p className="text-base md:text-lg">
                  Trabalhamos com uma grande variedade de produtos religiosos, desde velas, 
                  imagens, ervas e incensos até materiais para rituais e celebrações. Nosso 
                  compromisso é oferecer não apenas artigos, mas também <strong className="text-primary">
                  confiança</strong>, <strong className="text-primary">preço justo</strong> e um 
                  <strong className="text-primary"> atendimento próximo</strong>.
                </p>
                
                <p className="text-base md:text-lg">
                  Na Flora Parobé, você encontra muito mais do que produtos: encontra apoio, 
                  tradição e energia positiva para fortalecer sua caminhada espiritual.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-warm p-6 rounded-lg border border-primary/20 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 font-serif">
                  Nossa Missão
                </h4>
                <p className="text-foreground/90 italic leading-relaxed">
                  "Ser um ponto de encontro entre tradição e modernidade, oferecendo produtos 
                  e serviços que fortalecem a fé e nutrem o espírito de cada pessoa que nos visita."
                </p>
              </div>
            </div>

            {/* Image placeholder - Could be replaced with actual store photo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl shadow-elegant relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium opacity-90">
                      Espaço de Fé e Tradição
                    </p>
                    <p className="text-sm opacity-70 mt-2">
                      Flora Parobé
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-serif">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;