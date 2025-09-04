import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.28 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.28 (2).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.28 (3).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.28.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.29 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.29 (2).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.29 (3).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.01.29.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.27 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.27.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.28 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.28 (2).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.28.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.29 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.29 (2).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.29.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.30 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.30 (2).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.30 (3).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.12.30.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.17.58.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.00 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.00.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.01 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.01 (2).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.01 (3).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.01.jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.02 (1).jpeg",
    "/lovable-uploads/galeria/WhatsApp Image 2025-09-03 at 12.18.02.jpeg",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-foreground mb-12">Produtos</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-card"
              >
                <div 
                  className="aspect-square cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Produto ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium"
                  >
                    <a 
                      href="https://wa.me/5551984307593" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 justify-center"
                    >
                      <img 
                        src="/lovable-uploads/43a844dc-ff05-4541-8844-254d6e71d785.png" 
                        alt="WhatsApp"
                        className="w-4 h-4"
                      />
                      Saiba mais
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para visualizar imagem ampliada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Produto ampliado"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Produtos;