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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[140px]">
      {/* Background with store image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/0220a782-6e3f-465b-9085-5702727bd9c2.png"
          alt="Fachada da loja Flora Parobé"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability - removed yellow tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>
      
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
          {/* Logo with enhanced visibility */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elegant">
              <img 
                src="/lovable-uploads/d0384803-4960-43b4-969b-f05978cfc3e8.png" 
                alt="Flora Parobé - Artigos Religiosos e Espiritualidade"
                className="w-32 h-32 drop-shadow-glow"
              />
            </div>
          </div>

          {/* Main heading with better contrast */}
          <div className="bg-background/40 backdrop-blur-md rounded-2xl p-8 mb-8 shadow-elegant animate-fade-in delay-200 border border-white/10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
              FLORA PAROBÉ
            </h1>

            {/* Slogan */}
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6">
              Tradição, fé e energia em cada detalhe
            </p>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                A Flora Parobé nasceu com o propósito de levar <strong className="text-white">espiritualidade</strong>, 
                <strong className="text-white"> tradição</strong> e <strong className="text-white">acolhimento</strong> para 
                todos que buscam artigos religiosos de qualidade.
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Localizada no coração de Porto Alegre, nossa loja é um espaço de fé e respeito, 
                onde cada detalhe é pensado para atender com carinho e dedicação.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                className="border-white/60 bg-white/10 text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-lg transition-all duration-300 backdrop-blur-sm"
                onClick={() => scrollToSection("servicos")}
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in delay-700">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="group flex flex-col items-center gap-2 text-white bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full hover:bg-black/40 transition-all shadow-soft"
            >
              <span className="text-sm font-medium">Saiba mais</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-white transition-colors" />
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