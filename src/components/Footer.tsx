import { Heart, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    "Artigos Religiosos",
    "Kits Personalizados", 
    "Atendimento Especializado",
    "Encomendas Especiais"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/d0384803-4960-43b4-969b-f05978cfc3e8.png" 
                alt="Flora Parobé"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold font-serif">FLORA PAROBÉ</h3>
                <p className="text-sm opacity-90">Tradição, fé e energia</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
              A Flora Parobé nasceu com o propósito de levar espiritualidade, tradição e 
              acolhimento para todos que buscam artigos religiosos de qualidade.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 opacity-80" />
                <a href="tel:5551984307593" className="hover:text-primary-glow transition-colors">
                  (51) 98430-7593
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:fabiano.grabinski@gmail.com" className="hover:text-primary-glow transition-colors">
                  fabiano.grabinski@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 opacity-80 mt-0.5" />
                <span>Praça Pereira Parobé, 64<br />Porto Alegre/RS</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089485338906"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/floraparobe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-serif">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-serif">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 font-serif">
              Horário de Funcionamento
            </h4>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-primary-foreground/90">
              <span>Segunda a Sexta: 09:00 às 19:00</span>
              <span className="hidden md:inline">•</span>
              <span>Sábado: 09:00 às 16:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-primary/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>© {currentYear} Flora Parobé. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>para nossa comunidade espiritual</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-primary-foreground/60">
              CNPJ: 45.749.406/0001-00 | www.floraparobe.com.br
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;