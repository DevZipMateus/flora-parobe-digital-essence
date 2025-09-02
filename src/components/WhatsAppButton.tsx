import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vim através do site da Flora Parobé e gostaria de saber mais sobre os artigos religiosos disponíveis."
    );
    window.open(`https://wa.me/5551984307593?text=${message}`, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-4 w-64 bg-background border border-primary/20 rounded-lg shadow-elegant p-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">
                Fale Conosco
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tire suas dúvidas sobre nossos artigos religiosos. Estamos aqui para ajudar!
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-4 -mt-1">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/20"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20B858] text-white rounded-full flex items-center justify-center shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></div>
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
          1
        </div>
      </button>

      {/* Background pulse effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-pulse scale-125 pointer-events-none"></div>
    </div>
  );
};

export default WhatsAppButton;