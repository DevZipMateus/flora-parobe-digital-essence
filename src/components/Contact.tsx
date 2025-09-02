import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(51) 98430-7593",
      link: "tel:5551984307593",
      description: "Ligue para nós"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "fabiano.grabinski@gmail.com",
      link: "mailto:fabiano.grabinski@gmail.com",
      description: "Envie um e-mail"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Praça Pereira Parobé, 64",
      link: "https://www.google.com/maps/place/Flora+PAROB%C3%89/@-30.0267929,-51.2293229,17z/data=!3m1!4b1!4m6!3m5!1s0x951979aadba0e263:0xb1e4e327f3bb9900!8m2!3d-30.0267929!4d-51.226748!16s%2Fg%2F11vdn6w05j",
      description: "Porto Alegre/RS"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 09:00-19:00",
      link: null,
      description: "Sáb: 09:00-16:00"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100089485338906",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://www.instagram.com/floraparobe",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-serif">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você em sua jornada espiritual. Entre em contato conosco 
              e descubra como podemos atender suas necessidades.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-serif mb-6">
                  Informações de Contato
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo com carinho e dedicação. 
                  Entre em contato pelos canais abaixo ou visite nossa loja física.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="bg-background border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <contact.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1 font-serif">
                            {contact.title}
                          </h4>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              target={contact.link.startsWith('http') ? '_blank' : undefined}
                              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary hover:text-primary-glow font-medium transition-colors block"
                            >
                              {contact.info}
                            </a>
                          ) : (
                            <p className="text-primary font-medium">{contact.info}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gradient-warm p-6 rounded-lg border border-primary/20 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-4 font-serif">
                  Siga-nos nas Redes Sociais
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-background/40 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:bg-background/60 transition-all duration-300 group border border-white/20 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-foreground/80 mt-3">
                  Acompanhe nossas novidades e dicas espirituais
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  <a href="https://wa.me/5551984307593" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <img 
                      src="/lovable-uploads/43a844dc-ff05-4541-8844-254d6e71d785.png" 
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                    Fale Conosco no WhatsApp
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Atendimento rápido e personalizado
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-serif mb-4">
                  Nossa Localização
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Venha nos visitar em nossa loja física no coração de Porto Alegre. 
                  Um espaço acolhedor onde você encontrará tudo que precisa para sua jornada espiritual.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3286789123456!2d-51.2293229!3d-30.0267929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979aadba0e263%3A0xb1e4e327f3bb9900!2sFlora%20PAROB%C3%89!5e0!3m2!1spt!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Flora Parobé"
                  ></iframe>
                </div>
                
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-soft">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Flora Parobé</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Praça Pereira Parobé, 64
                  </p>
                </div>
              </div>

              <div className="bg-background border border-primary/20 rounded-lg p-6 shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-3 font-serif">
                  Como Chegar
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Estamos localizados na Praça Pereira Parobé, uma região central e de fácil acesso 
                  em Porto Alegre. Transporte público disponível nas proximidades.
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="https://www.google.com/maps/place/Flora+PAROB%C3%89/@-30.0267929,-51.2293229,17z/data=!3m1!4b1!4m6!3m5!1s0x951979aadba0e263:0xb1e4e327f3bb9900!8m2!3d-30.0267929!4d-51.226748!16s%2Fg%2F11vdn6w05j"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;