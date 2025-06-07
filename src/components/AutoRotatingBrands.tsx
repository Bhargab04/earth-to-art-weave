
import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

const AutoRotatingBrands = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const brands = useMemo(() => [
    'Hermes', 'Chanel', 'Tiffany & Co', 'Rolex', 'Louis Vuitton', 'Cartier', 
    'Bulgari', 'Prada', 'Gucci', 'Dior', 'Versace', 'Armani', 'Burberry',
    'Mont Blanc', 'Bottega Veneta', 'Saint Laurent', 'Fendi', 'Givenchy'
  ], []);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth;
    const containerWidth = scrollRef.current.clientWidth;

    // Only create animation if not already exists
    if (!animationRef.current) {
      animationRef.current = gsap.timeline({ 
        repeat: -1,
        paused: false
      });
      
      animationRef.current.to(scrollRef.current, {
        x: -(scrollWidth - containerWidth),
        duration: 30,
        ease: "none"
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
    };
  }, []);

  const duplicatedBrands = useMemo(() => [...brands, ...brands], [brands]);

  return (
    <div className="bg-charcoal py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="font-playfair text-3xl font-bold text-gold">127+</span>
            <span className="text-ivory text-lg">Global Design Brands</span>
          </div>
          <h2 className="font-playfair text-2xl text-ivory/80">
            6 Continents. One Standard.
          </h2>
        </div>
      </div>

      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={scrollRef} className="flex space-x-12 whitespace-nowrap will-change-transform">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="h-16 px-8 flex items-center justify-center bg-ivory/5 backdrop-blur-sm border border-gold/20 rounded-lg hover:border-gold/40 transition-all duration-300 hover:bg-ivory/10">
                <span className="font-inter text-ivory/70 group-hover:text-gold transition-colors duration-300 text-lg font-medium">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AutoRotatingBrands);
