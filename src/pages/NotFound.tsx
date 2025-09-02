import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/cd58b33b-1a21-48fb-a735-002bc8846cba.png" 
            alt="Flora Parobé"
            className="w-20 h-20 mx-auto mb-6 opacity-60"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-serif">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 font-serif">
          Página não encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Oops! A página que você está procurando não existe ou foi movida. 
          Retorne ao início e encontre o que precisa para sua jornada espiritual.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg shadow-soft"
          >
            <a href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Voltar ao Início
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Página Anterior
          </Button>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-warm rounded-lg border border-primary/20 shadow-soft">
          <h3 className="text-lg font-semibold text-accent mb-2 font-serif">
            Precisa de ajuda?
          </h3>
          <p className="text-accent-foreground mb-4">
            Entre em contato conosco pelo WhatsApp e nossa equipe te ajudará a encontrar o que procura.
          </p>
          <Button 
            asChild
            variant="secondary"
            className="bg-background/20 text-accent-foreground hover:bg-background/40"
          >
            <a href="https://wa.me/5551984307593" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
