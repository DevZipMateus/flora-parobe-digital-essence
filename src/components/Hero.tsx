import { ArrowDown, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Heart className="w-6 h-6 text-accent animate-pulse delay-1000" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <Star className="w-7 h-7 text-primary-glow animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/cd58b33b-1a21-48fb-a735-002bc8846cba.png" 
              alt="Flora Parobé - Artigos Religiosos e Espiritualidade"
              className="w-32 h-32 mx-auto mb-6 drop-shadow-glow"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in delay-200 font-serif">
            FLORA PAROBÉ
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-accent font-medium mb-8 animate-fade-in delay-300">
            Tradição, fé e energia em cada detalhe
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in delay-400">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              A Flora Parobé nasceu com o propósito de levar <strong className="text-primary">espiritualidade</strong>, 
              <strong className="text-primary"> tradição</strong> e <strong className="text-primary">acolhimento</strong> para 
              todos que buscam artigos religiosos de qualidade.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Localizada no coração de Porto Alegre, nossa loja é um espaço de fé e respeito, 
              onde cada detalhe é pensado para atender com carinho e dedicação.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <a href="https://wa.me/5551984307593" target="_blank" rel="noopener noreferrer">
                Fale Conosco no WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
              onClick={() => scrollToSection("servicos")}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in delay-700">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium">Saiba mais</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path 
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" 
            fill="hsl(var(--card))"
            opacity="0.7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;