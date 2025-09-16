import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // Se já estamos na página principal, apenas fazer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      // Se estamos em outra página, navegar para a principal e depois fazer scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-elegant" 
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className={`bg-primary text-primary-foreground transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-2'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm">
            <div className="flex flex-col md:flex-row md:gap-6 gap-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <span>(51) 98430-7593</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span>floraparobe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>Praça Pereira Parobé, 64 - Porto Alegre/RS</span>
              </div>
            </div>
            <div className={`text-xs md:text-sm mt-1 md:mt-0 transition-opacity duration-300 ${
              isScrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'
            }`}>
              Seg-Sex: 09:00-19:00 | Sáb: 09:00-16:00
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-inherit border-b border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src="/lovable-uploads/d0384803-4960-43b4-969b-f05978cfc3e8.png" 
                alt="Flora Parobé - Artigos Religiosos"
                className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary font-serif">
                  FLORA PAROBÉ
                </h1>
                <p className="text-xs text-muted-foreground font-light">
                  Tradição, fé e energia
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => handleNavigation("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavigation("sobre")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleNavigation("servicos")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <Link 
                to="/produtos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Produtos
              </Link>
              <button 
                onClick={() => handleNavigation("contato")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                asChild
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium px-6 shadow-soft"
              >
                <a href="https://wa.me/5199889444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/43a844dc-ff05-4541-8844-254d6e71d785.png" 
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-lg shadow-soft">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => handleNavigation("home")}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Início
                </button>
                <button 
                  onClick={() => handleNavigation("sobre")}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => handleNavigation("servicos")}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Serviços
                </button>
                <Link 
                  to="/produtos"
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produtos
                </Link>
                <button 
                  onClick={() => handleNavigation("contato")}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contato
                </button>
                <div className="px-4">
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium"
                  >
                    <a href="https://wa.me/5199889444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <img 
                        src="/lovable-uploads/43a844dc-ff05-4541-8844-254d6e71d785.png" 
                        alt="WhatsApp"
                        className="w-5 h-5"
                      />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;