import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920&h=1080&fit=crop",
    alt: "Cama decorada com lençóis florais",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&h=1080&fit=crop",
    alt: "Composição de tecidos premium",
  },
  {
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&h=1080&fit=crop",
    alt: "Estampas florais em lençóis",
  },
  {
    url: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1920&h=1080&fit=crop",
    alt: "Tecidos de alta qualidade",
  },
  {
    url: "https://images.unsplash.com/photo-1616627577385-5c0c4dab25fa?w=1920&h=1080&fit=crop",
    alt: "Decoração com estampas elegantes",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-[#0B1D3A]/30 to-transparent" />

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prev();
          setIsAutoPlaying(false);
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => {
          next();
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
